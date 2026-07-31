/* What is INSIDE a section. index.html owns how a section opens; this file owns
   the gallery, the video grid, the essay list, the lightbox and the reader.
   Content comes from content.js + essays.js — never edit copy in here. */

const UI = (() => {
let lang='en';

/* One missing translation should not blank out a line, so fall back to the
   other language and say so once in the console — visible to whoever is
   editing, invisible to whoever is reading. */
const warned=new Set();
function t(o,where){
  if(o==null)return '';
  if(typeof o==='string')return o;
  if(o[lang]!=null)return o[lang];
  const other=lang==='en'?'fa':'en';
  const k=(where||'')+':'+(o[other]||'').slice(0,24);
  if(!warned.has(k)){warned.add(k);
    console.warn(`content: missing "${lang}" text`+(where?` in ${where}`:'')+
                 ` — showing "${other}" instead:`,o[other]);}
  return o[other]||'';
}

/* Essays are authored as one block of text with blank lines between
   paragraphs, which is how a person actually writes. Split it back out. */
function paras(block){
  return String(block||'').trim().split(/\n\s*\n/)
    .map(p=>p.replace(/\s*\n\s*/g,' ').trim()).filter(Boolean);
}
/* Reading time is derived, never stored, so it cannot drift from the text. */
function mins(e){
  const words=(paras(e.text&&e.text[lang]||e.text&&e.text.en||'').join(' ')
    .match(/\S+/g)||[]).length;
  return Math.max(1,Math.round(words/200));
}

/* which category each filterable section is showing */
const sel={images:'all', video:'all', writing:'all'};

/* ---------- shared category filter ---------- */
function count(key,id){
  const it=DATA[key].items;
  return id==='all'?it.length:it.filter(x=>x.cat===id).length;
}
/* shown() is the single source of truth for what a section is displaying, so
   a filter and the lightbox can never disagree about which item index 3 is */
function shown(key){
  const c=sel[key];
  return DATA[key].items.filter(x=>c==='all'||x.cat===c);
}
function chips(key){
  const d=DATA[key];
  if(!d.cats||!d.cats.length)return '';
  const cats=[{id:'all',title:DATA.ui.all},...d.cats].filter(c=>count(key,c.id));
  if(!cats.some(c=>c.id===sel[key]))sel[key]='all';
  return `<div class="chips">${cats.map(c=>
    `<button class="chip${c.id===sel[key]?' on':''}" data-c="${c.id}" type="button">
       ${t(c.title)}<b>${count(key,c.id)}</b></button>`).join('')}</div>`;
}

/* ---------- section HTML ---------- */
const BODY={me,images,video,writing};

function section(key){
  const d=DATA[key];
  /* the figure removes itself if the file is not there */
  const fig=d.fig?`<div class="sec-fig"><img src="${d.fig}" alt="" aria-hidden="true"
      onerror="this.closest('.sec-fig').remove()"></div>`:'';
  const head=`<div class="sec-head">
      <div><div class="eyebrow">${d.num} · ${t(d.title,key)}</div>
        <h2>${t(d.title,key)}</h2><p class="lead">${t(d.lead,key)}</p></div>${fig}</div>`;
  return `<div class="sec" data-k="${key}">${head}${chips(key)}
      <div class="list">${BODY[key]()}</div></div>`;
}

function me(){
  const d=DATA.me;
  return `<div class="me-grid">
    <div>${t(d.body).map(p=>`<p class="body" style="margin-bottom:18px">${p}</p>`).join('')}</div>
    <div>
      <div class="facts">${t(d.facts).map(f=>
        `<div class="fact"><span>${f[0]}</span><em>${f[1]}</em></div>`).join('')}</div>
      <div class="links">${d.links.map(l=>
        `<a class="link" href="${l.href}" target="_blank" rel="noopener">
           <span>${t(l.label)}</span><span>${l.at}</span></a>`).join('')}</div>
    </div></div>`;
}

function images(){
  return `<div class="gal">${shown('images').map((im,i)=>
    `<figure data-i="${i}"><img src="${im.src}" alt="${t(im.title,im.src)}" loading="lazy">
       <figcaption>${t(im.title,im.src)}</figcaption></figure>`).join('')}</div>`;
}

function video(){
  return `<div class="vids">${shown('video').map(v=>
    `<div class="vid"><video src="${v.src}" poster="${v.poster}" playsinline preload="none"></video>
       <div class="cue"><s></s></div><div class="tag">${t(v.title,v.src)}</div></div>`).join('')}</div>`;
}

function writing(){
  return `<div class="essays">${shown('writing').map((e,i)=>
    `<article class="essay" data-i="${i}">
       <span class="idx">${String(i+1).padStart(2,'0')}</span>
       <div><h3>${t(e.title,'essay '+(i+1))}</h3>
         <p class="hook">${t(e.hook,'essay '+(i+1))}</p></div>
       <span class="mins">${mins(e)} ${t(DATA.ui.min)}</span>
     </article>`).join('')}</div>`;
}

/* ---------- overlays, created once ---------- */
let box,reader,gi=0;
function overlays(){
  if(box)return;
  box=document.createElement('div');box.className='box';
  box.innerHTML=`<button class="nav prev">‹</button><img alt=""><button class="nav next">›</button>
                 <div class="cap"></div>`;
  document.body.appendChild(box);
  box.onclick=e=>{if(e.target===box)box.classList.remove('on')};
  box.querySelector('.prev').onclick=()=>step(-1);
  box.querySelector('.next').onclick=()=>step(1);

  reader=document.createElement('div');reader.className='reader';
  reader.innerHTML=`<div class="bar"></div><div class="col"></div>`;
  document.body.appendChild(reader);
  reader.addEventListener('scroll',()=>{
    const h=reader.scrollHeight-reader.clientHeight;
    reader.querySelector('.bar').style.width=(h>0?reader.scrollTop/h*100:0)+'%';
    reader.querySelectorAll('p.t').forEach(p=>{
      if(p.getBoundingClientRect().top < innerHeight*0.88) p.classList.add('in');});
  });
  addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    if(reader.classList.contains('on'))closeReader();
    else if(box.classList.contains('on'))box.classList.remove('on');
  });
}
function step(n){
  const it=shown('images');if(!it.length)return;
  gi=(gi+n+it.length)%it.length;
  box.querySelector('img').src=it[gi].src;
  box.querySelector('.cap').textContent=`${t(it[gi].title)} — ${gi+1} ${t(DATA.ui.of)} ${it.length}`;
}
function openBox(i){overlays();gi=i;step(0);box.classList.add('on')}

function openReader(i){
  overlays();
  const e=shown('writing')[i];
  reader.querySelector('.col').innerHTML=
    `<div class="eyebrow">${DATA.writing.num} · ${mins(e)} ${t(DATA.ui.min)}</div>
     <h2>${t(e.title)}</h2><p class="hook">${t(e.hook)}</p>
     ${paras(t(e.text,'essay text')).map(p=>`<p class="t">${p}</p>`).join('')}
     <button class="end">← ${t(DATA.ui.back)}</button>`;
  reader.querySelector('.end').onclick=closeReader;
  reader.scrollTop=0;
  reader.classList.add('on');
  requestAnimationFrame(()=>reader.dispatchEvent(new Event('scroll')));
}
function closeReader(){reader.classList.remove('on')}

/* ---------- wire a freshly-rendered section ---------- */
function bind(root){
  const sec=root.querySelector('.sec'), key=sec&&sec.dataset.k;

  root.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{
    sel[key]=c.dataset.c;
    stopAll();
    root.querySelectorAll('.chip').forEach(o=>o.classList.toggle('on',o.dataset.c===sel[key]));
    root.querySelector('.list').innerHTML=BODY[key]();
    bind(root);
  });

  root.querySelectorAll('.gal figure').forEach(f=>
    f.onclick=()=>openBox(+f.dataset.i));
  root.querySelectorAll('.essay').forEach(a=>
    a.onclick=()=>openReader(+a.dataset.i));
  root.querySelectorAll('.vid').forEach(card=>{
    const v=card.querySelector('video');
    card.onclick=()=>{
      document.querySelectorAll('.vid').forEach(o=>{
        if(o!==card){o.querySelector('video').pause();o.classList.remove('playing')}});
      if(v.paused){v.play();card.classList.add('playing')}
      else{v.pause();card.classList.remove('playing')}
    };
    v.onended=()=>card.classList.remove('playing');
  });
}

function stopAll(){
  document.querySelectorAll('.vid video').forEach(v=>v.pause());
  document.querySelectorAll('.vid').forEach(c=>c.classList.remove('playing'));
}

return {
  set lang(l){lang=l},
  get lang(){return lang},
  t,section,bind,stopAll,
  closeOverlays(){if(box)box.classList.remove('on');if(reader)closeReader()}
};
})();
