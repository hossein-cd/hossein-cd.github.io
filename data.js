/* Single source of content for both shells (athens.html, girih.html).
   Everything the site says lives here. Edit this file, not the HTML. */

const DATA = {

meta:{
  name:{en:'Hossein Soroushpour', fa:'حسین سروش‌پور'},
  role:{en:'Digital marketing · content · political philosophy',
        fa:'بازاریابی دیجیتال · تولید محتوا · فلسفه سیاسی'},
  hero:{en:['A portfolio you walk into,','not one you scroll past.'],
        fa:['نمونه‌کاری که واردش می‌شوی،','نه چیزی که از کنارش رد می‌شوی.']},
  heroSub:{en:'Four rooms. Take whichever one you came for.',
           fa:'چهار اتاق. هرکدام را که برایش آمده‌ای باز کن.'}
},

/* ---------------- I · ME ---------------- */
me:{
  num:'I',
  title:{en:'Me', fa:'من'},
  lead:{en:'Born 1380 in Tehran. I read political philosophy and I make things that have to be seen.',
        fa:'متولد ۱۳۸۰، تهران. فلسفه سیاسی می‌خوانم و چیزهایی می‌سازم که باید دیده شوند.'},
  body:{
   en:[`BA in Political Science and an MA in Political Philosophy, both at the University of Tehran. Three years of content production — first at Telewebion, then at the Iranian Entrepreneurs Assembly — and now digital marketing at Hiva Ex.`,
       `The work itself is simple to describe: find the thing that actually needs saying, then build a shape for it that gets looked at. Poster, video, or a long argument — the format is the last decision, not the first.`,
       `Underneath it there is a reading habit I have not been able to shake: ontology, and the line that runs from Plato through Kant to Heidegger. It does not show up on a campaign brief. It decides which arguments I think are worth making.`],
   fa:[`کارشناسی علوم سیاسی و کارشناسی ارشد فلسفه سیاسی، هر دو در دانشگاه تهران. سه سال تولید محتوا — اول در تلوبیون، بعد در مجمع کارآفرینان ایران — و حالا دیجیتال مارکتینگ در هیوا اکس.`,
       `توصیف کار ساده است: چیزی را که واقعاً باید گفته شود پیدا می‌کنم و بعد شکلی برایش می‌سازم که نگاه را نگه دارد. پوستر، ویدئو، یا یک استدلال بلند — قالب آخرین تصمیم است، نه اولی.`,
       `زیر همه‌ی این‌ها عادتی هست که نتوانسته‌ام کنارش بگذارم: هستی‌شناسی، و خطی که از افلاطون تا کانت و هایدگر کشیده می‌شود. توی بریف هیچ کمپینی نمی‌آید. اما تعیین می‌کند کدام حرف به نظرم ارزش گفتن دارد.`]
  },
  facts:{
   en:[['Hiva Ex — Digital marketing','1404 — now'],
       ['Iranian Entrepreneurs Assembly — Content','1403 — 1404'],
       ['Telewebion — Content','1401 — 1403'],
       ['MA Political Philosophy, Univ. of Tehran','1404 — now'],
       ['BA Political Science, Univ. of Tehran','1399 — 1404']],
   fa:[['هیوا اکس — دیجیتال مارکتینگ','۱۴۰۴ — تا الان'],
       ['مجمع کارآفرینان ایران — تولید محتوا','۱۴۰۳ — ۱۴۰۴'],
       ['تلوبیون — تولید محتوا','۱۴۰۱ — ۱۴۰۳'],
       ['ارشد فلسفه سیاسی، دانشگاه تهران','۱۴۰۴ — تا الان'],
       ['کارشناسی علوم سیاسی، دانشگاه تهران','۱۳۹۹ — ۱۴۰۴']]
  },
  fig:'assets/fig/me.png',
  /* edit these lines and nothing else to change where people reach you */
  links:[
   {label:{en:'Telegram', fa:'تلگرام'}, href:'https://t.me/Hosseincd', at:'@Hosseincd'},
   {label:{en:'Phone',    fa:'تلفن'}, href:'tel:+989120212076', at:'+98 912 021 2076'},
   {label:{en:'LinkedIn', fa:'لینکدین'}, href:'https://www.linkedin.com/in/hossein-sorosh-68a83a349/', at:'hossein-sorosh'},
   {label:{en:'Email',    fa:'ایمیل'}, href:'mailto:', at:'—'}
  ]
},

/* ---------------- II · IMAGES ---------------- */
images:{
  num:'II',
  title:{en:'Images', fa:'تصویر'},
  lead:{en:'Posters, key visuals and campaign frames. Every one drawn, set and finished by me.',
        fa:'پوستر، تصویر کلیدی و فریم‌های کمپین. همه را خودم طراحی، حروف‌چینی و تکمیل کرده‌ام.'},
  fig:'assets/fig/images.png',
  /* SAMPLE CATEGORIES — rename them, add more, or change which one each
     image belongs to via its `c` field. `all` is generated automatically. */
  cats:[
   {id:'poster',   t:{en:'Posters',       fa:'پوستر'}},
   {id:'social',   t:{en:'Social',        fa:'سوشال'}},
   {id:'campaign', t:{en:'Campaigns',     fa:'کمپین'}},
   {id:'brand',    t:{en:'Brand',         fa:'برند'}},
   {id:'photo',    t:{en:'Photography',   fa:'عکاسی'}}
  ],
  items:[
   {c:'poster',  src:'assets/img/23.jpg',  t:{en:'No algorithm exists', fa:'هیچ الگوریتمی وجود ندارد'}},
   {c:'social',  src:'assets/img/kant.jpg',t:{en:'Messi or Yamal, according to Kant', fa:'مسی یا یامال از نظر کانت'}},
   {c:'poster',  src:'assets/img/20.1.jpg',t:{en:'Never trade again', fa:'دیگه هیچ‌وقت ترید نکن'}},
   {c:'social',  src:'assets/img/54.jpg',  t:{en:'The magic formula', fa:'فرمول جادویی ترید'}},
   {c:'poster',  src:'assets/img/22.jpg',  t:{en:'If you are waiting for a miracle', fa:'اگر دنبال معجزه هستید'}},
   {c:'poster',  src:'assets/img/24.jpg',  t:{en:'The market', fa:'بازار'}},
   {c:'brand',   src:'assets/img/coinonia.jpg',t:{en:'Coinonia', fa:'کوینونیا'}},
   {c:'social',  src:'assets/img/24.1.jpg',t:{en:'What is a bull trap?', fa:'تله گاوی چیه؟'}},
   {c:'social',  src:'assets/img/51.jpg',  t:{en:'Three films for traders', fa:'۳ فیلم مخصوص تریدرها'}},
   {c:'poster',  src:'assets/img/14.2.jpg',t:{en:'Before the trade', fa:'قبل از معامله'}},
   {c:'campaign',src:'assets/img/50.jpg',  t:{en:'90% off', fa:'۹۰٪ تخفیف ویژه'}},
   {c:'photo',   src:'assets/img/3.jpg',   t:{en:'The mirror shows you plainly', fa:'آینه چون نقش تو بنمود راست'}},
   {c:'photo',   src:'assets/img/4.jpg',   t:{en:'Hiva Ex traders', fa:'تریدرهای انس هیوا اکس'}}
  ]
},

/* ---------------- III · VIDEO ---------------- */
video:{
  num:'III',
  title:{en:'Video', fa:'ویدیو'},
  lead:{en:'Shot, cut, captioned and scored by me. Tap one — the rest go quiet.',
        fa:'تصویربرداری، تدوین، زیرنویس و صدا، همه به‌دست خودم. یکی را بزن — بقیه ساکت می‌شوند.'},
  fig:'assets/fig/video.png',
  items:[
   {src:'assets/video/2.mp4', poster:'assets/video/2.jpg',
    t:{en:'The best time to trade', fa:'بهترین زمان برای معامله'}},
   {src:'assets/video/14.1.mp4', poster:'assets/video/14.1.jpg',
    t:{en:'A stop-loss kills more than the loss', fa:'حد ضرر فقط «ضرر» را نمی‌کشد'}},
   {src:'assets/video/6.1.mp4', poster:'assets/video/6.1.jpg',
    t:{en:'Hivanameh — do not fall for Bitcoin', fa:'هیوانامه — فریب بیت‌کوین را نخورید'}},
   {src:'assets/video/Okay_Damage__1_.mp4', poster:'assets/video/Okay_Damage__1_.jpg',
    t:{en:'Okay Damage', fa:'اوکی دمیج'}}
  ]
},

/* ---------------- IV · WRITING ----------------
   TO ADD AN ESSAY: copy one block. `body` is an array of paragraphs.
   `mins` is the reading time shown on the card. Nothing else needs touching. */
writing:{
  num:'IV',
  title:{en:'Writing', fa:'متن'},
  lead:{en:'Longer pieces. The reader strips the page down to one column — start anywhere.',
        fa:'متن‌های بلندتر. صفحه‌ی خواندن همه‌چیز را جز یک ستون حذف می‌کند — از هرجا شروع کن.'},
  fig:'assets/fig/writing.png',
  items:[
   {mins:9,
    t:{en:'Placeholder — replace with your first essay', fa:'جای‌گذار — اولین متن خودت را اینجا بگذار'},
    lead:{en:'The first sentence goes here, set large. It is the hook — the site shows it before anything else.',
          fa:'جمله‌ی اول اینجا می‌آید، درشت. این قلاب متن است — سایت پیش از هر چیز دیگری همین را نشان می‌دهد.'},
    body:{en:['Paste the full text here, one paragraph per line in this array.',
              'The reader gives it a single narrow column, a progress line at the top, and fades each paragraph in as it arrives. Everything else on the page gets out of the way.',
              'Two to three pages is exactly the length this view is built for.'],
          fa:['متن کامل را اینجا بگذار، هر پاراگراف یک عضو از این آرایه.',
              'نمای خواندن یک ستون باریک می‌سازد، نواری از پیشرفتِ خواندن بالای صفحه می‌گذارد، و هر پاراگراف را با نزدیک‌شدن محو‌به‌روشن می‌آورد. باقی صفحه از سر راه کنار می‌رود.',
              'دو تا سه صفحه دقیقاً همان طولی است که این نما برایش ساخته شده.']}},
   {mins:12,
    t:{en:'Placeholder — second essay', fa:'جای‌گذار — متن دوم'},
    lead:{en:'Another opening line. Keep it to one sentence that makes the next one unavoidable.',
          fa:'یک جمله‌ی آغازین دیگر. در حد یک جمله نگهش دار؛ جمله‌ای که خواندن جمله‌ی بعدی را ناگزیر کند.'},
    body:{en:['Paragraph one.','Paragraph two.','Paragraph three.'],
          fa:['پاراگراف اول.','پاراگراف دوم.','پاراگراف سوم.']}},
   {mins:6,
    t:{en:'Placeholder — third essay', fa:'جای‌گذار — متن سوم'},
    lead:{en:'Short pieces work here too; the reading time on the card sets the expectation.',
          fa:'متن کوتاه هم اینجا جواب می‌دهد؛ زمان مطالعه روی کارت، انتظار خواننده را تنظیم می‌کند.'},
    body:{en:['Paragraph one.','Paragraph two.'],
          fa:['پاراگراف اول.','پاراگراف دوم.']}}
  ]
},

ui:{
  close:{en:'close', fa:'بستن'},
  read:{en:'read', fa:'خواندن'},
  min:{en:'min read', fa:'دقیقه مطالعه'},
  back:{en:'back to writing', fa:'بازگشت به متن‌ها'},
  play:{en:'play', fa:'پخش'},
  of:{en:'of', fa:'از'},
  all:{en:'All', fa:'همه'}
},

/* Palette options. Pick one, then set PALETTE below to lock it in and the
   swatch picker disappears. Colours themselves live in app.css. */
palettes:[
  {id:'athens',    t:{en:'Athens',    fa:'آتن'},      dot:'#d9a441'},
  {id:'ink',       t:{en:'Ink',       fa:'مرکب'},     dot:'#ffffff'},
  {id:'lapis',     t:{en:'Lapis',     fa:'لاجورد'},   dot:'#5b9bd5'},
  {id:'ochre',     t:{en:'Ochre',     fa:'اخرا'},     dot:'#e0a12a'},
  {id:'verdigris', t:{en:'Verdigris', fa:'زنگار'},    dot:'#4f7a63'}
],
PALETTE:null   /* e.g. 'ochre' to lock it and hide the picker */
};

DATA.order = ['me','images','video','writing'];
