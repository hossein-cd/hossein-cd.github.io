/* Section bodies + overlays, shared by athens.html and girih.html.
   Shells own the way a section OPENS; this file owns what is inside it. */

const UI = (() => {
let lang='en';
const t=(o)=>o[lang];

/* ---------- section HTML ---------- */
function section(key){
  const d=DATA[key];
  const head=`<div class="sec-head"><div class="eyebrow">${d.num} · ${t(d.title)}</div>
    <h2>${t(d.title)}</h2><p class="lead">${t(d.lead)}</p></div>`;
  return `<div class="sec">${head}${({me:me,images:images,video:video,writing:writing})[key]()}</div>`;
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
  return `<div class="gal">${DATA.images.items.map((im,i)=>
    `<figure data-i="${i}"><img src="${im.src}" alt="${t(im.t)}" loading="lazy">
       <figcaption>${t(im.t)}</figcaption></figure>`).join('')}</div>`;
}

function video(){
  return `<div class="vids">${DATA.video.items.map(v=>
    `<div class="vid"><video src="${v.src}" poster="${v.poster}" playsinline preload="none"></video>
       <div class="cue"><s></s></div><div class="tag">${t(v.t)}</div></div>`).join('')}</div>`;
}

function writing(){
  return `<div class="essays">${DATA.writing.items.map((e,i)=>
    `<article class="essay" data-i="${i}">
       <span class="idx">${String(i+1).padStart(2,'0')}</span>
       <div><h3>${t(e.t)}</h3><p class="hook">${t(e.lead)}</p></div>
       <span class="mins">${e.mins} ${t(DATA.ui.min)}</span>
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
  const it=DATA.images.items;
  gi=(gi+n+it.length)%it.length;
  box.querySelector('img').src=it[gi].src;
  box.querySelector('.cap').textContent=`${t(it[gi].t)} — ${gi+1} ${t(DATA.ui.of)} ${it.length}`;
}
function openBox(i){overlays();gi=i;step(0);box.classList.add('on')}

function openReader(i){
  overlays();
  const e=DATA.writing.items[i];
  reader.querySelector('.col').innerHTML=
    `<div class="eyebrow">${DATA.writing.num} · ${e.mins} ${t(DATA.ui.min)}</div>
     <h2>${t(e.t)}</h2><p class="hook">${t(e.lead)}</p>
     ${t(e.body).map(p=>`<p class="t">${p}</p>`).join('')}
     <button class="end">← ${t(DATA.ui.back)}</button>`;
  reader.querySelector('.end').onclick=closeReader;
  reader.scrollTop=0;
  reader.classList.add('on');
  requestAnimationFrame(()=>reader.dispatchEvent(new Event('scroll')));
}
function closeReader(){reader.classList.remove('on')}

/* ---------- wire a freshly-rendered section ---------- */
function bind(root){
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
  section,bind,stopAll,
  closeOverlays(){if(box)box.classList.remove('on');if(reader)closeReader()}
};
})();
