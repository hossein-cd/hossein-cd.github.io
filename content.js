/* =============================================================================
   CONTENT — everything the site says, except the long essays.
   Essays live in their own file, essays.js, because they are long.

   HOW THIS FILE WORKS
   -------------------
   Every piece of text is a pair:      title:{en:'English', fa:'فارسی'}
   Both languages are required. If one is missing the site falls back to the
   other and prints a warning in the browser console, so nothing breaks — but
   a half-translated page looks careless, so fill both.

   Text goes in 'single quotes'. If your text contains an apostrophe, use
   "double quotes" around it instead:   fa:'…'   →   en:"Kant's answer"

   Every block ends with a comma. Adding an entry means copying the line above
   it and changing the values. Nothing else needs touching.

   Order matters: items appear on the site in the order they appear here.
   ============================================================================= */

const DATA = {

/* -----------------------------------------------------------------------------
   WHO — the name in the header and the words on the front page
   -------------------------------------------------------------------------- */
meta:{
  name:{en:'Hossein Soroushpour', fa:'حسین سروش‌پور'},
  role:{en:'Digital marketing · content · political philosophy',
        fa:'بازاریابی دیجیتال · تولید محتوا · فلسفه سیاسی'},
  /* the big line on the front page; the second line is set in a lighter tone */
  hero:{en:['A portfolio you walk into,','not one you scroll past.'],
        fa:['نمونه‌کاری که واردش می‌شوی،','نه چیزی که از کنارش رد می‌شوی.']},
  heroSub:{en:'Four rooms. Take whichever one you came for.',
           fa:'چهار اتاق. هرکدام را که برایش آمده‌ای باز کن.'}
},

/* -----------------------------------------------------------------------------
   I · ME — the bio, the history table, and how to reach you
   -------------------------------------------------------------------------- */
me:{
  num:'I',
  title:{en:'Me', fa:'من'},
  lead:{en:'Born 1380 in Tehran. I read political philosophy and I make things that have to be seen.',
        fa:'متولد ۱۳۸۰، تهران. فلسفه سیاسی می‌خوانم و چیزهایی می‌سازم که باید دیده شوند.'},
  fig:'assets/fig/me.png',

  /* the bio. one entry per paragraph. */
  body:{
   en:[
    `BA in Political Science and an MA in Political Philosophy, both at the University of Tehran. Three years of content production — first at Telewebion, then at the Iranian Entrepreneurs Assembly — and now digital marketing at Hiva Ex.`,
    `The work itself is simple to describe: find the thing that actually needs saying, then build a shape for it that gets looked at. Poster, video, or a long argument — the format is the last decision, not the first.`,
    `Underneath it there is a reading habit I have not been able to shake: ontology, and the line that runs from Plato through Kant to Heidegger. It does not show up on a campaign brief. It decides which arguments I think are worth making.`
   ],
   fa:[
    `کارشناسی علوم سیاسی و کارشناسی ارشد فلسفه سیاسی، هر دو در دانشگاه تهران. سه سال تولید محتوا — اول در تلوبیون، بعد در مجمع کارآفرینان ایران — و حالا دیجیتال مارکتینگ در هیوا اکس.`,
    `توصیف کار ساده است: چیزی را که واقعاً باید گفته شود پیدا می‌کنم و بعد شکلی برایش می‌سازم که نگاه را نگه دارد. پوستر، ویدئو، یا یک استدلال بلند — قالب آخرین تصمیم است، نه اولی.`,
    `زیر همه‌ی این‌ها عادتی هست که نتوانسته‌ام کنارش بگذارم: هستی‌شناسی، و خطی که از افلاطون تا کانت و هایدگر کشیده می‌شود. توی بریف هیچ کمپینی نمی‌آید. اما تعیین می‌کند کدام حرف به نظرم ارزش گفتن دارد.`
   ]
  },

  /* the two-column table: [what it was, when it was] */
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

  /* `at` is what the visitor sees; `href` is where it goes.
     phone → tel:+98…   email → mailto:you@example.com   anything else → https://… */
  links:[
   {label:{en:'Telegram', fa:'تلگرام'},  at:'@Hosseincd',        href:'https://t.me/Hosseincd'},
   {label:{en:'Phone',    fa:'تلفن'},    at:'+98 912 021 2076',  href:'tel:+989120212076'},
   {label:{en:'LinkedIn', fa:'لینکدین'}, at:'hossein-sorosh',    href:'https://www.linkedin.com/in/hossein-sorosh-68a83a349/'},
   {label:{en:'Email',    fa:'ایمیل'},   at:'hosseinsoroshpoor@gmail.com',                 href:'mailto:'}
  ]
},

/* -----------------------------------------------------------------------------
   II · IMAGES

   TO ADD ONE:
     1. put the file in  assets/img/
        (convert it first — see the recipe at the bottom of this file)
     2. copy an items line below and change `src`, `title` and `cat`
     `cat` must match an id from `cats`. Any aspect ratio is fine.
   -------------------------------------------------------------------------- */
images:{
  num:'II',
  title:{en:'Images', fa:'تصویر'},
  lead:{en:'Posters, key visuals and campaign frames. Every one drawn, set and finished by me.',
        fa:'پوستر، تصویر کلیدی و فریم‌های کمپین. همه را خودم طراحی، حروف‌چینی و تکمیل کرده‌ام.'},
  fig:'assets/fig/images.png',

  /* the filter buttons. `All` and every count are worked out automatically —
     add a category here, then tag images with its id. */
  cats:[
   {id:'poster',   title:{en:'Posters',     fa:'پوستر'}},
   {id:'social',   title:{en:'Social',      fa:'سوشال'}},
   {id:'campaign', title:{en:'Campaigns',   fa:'کمپین'}},
   {id:'brand',    title:{en:'Brand',       fa:'برند'}},
   {id:'photo',    title:{en:'Photography', fa:'عکاسی'}}
  ],

  items:[
   {cat:'poster',   src:'assets/img/23.jpg',       title:{en:'No algorithm exists',              fa:'هیچ الگوریتمی وجود ندارد'}},
   {cat:'social',   src:'assets/img/kant.jpg',     title:{en:'Messi or Yamal, according to Kant',fa:'مسی یا یامال از نظر کانت'}},
   {cat:'poster',   src:'assets/img/20.1.jpg',     title:{en:'Never trade again',                fa:'دیگه هیچ‌وقت ترید نکن'}},
   {cat:'social',   src:'assets/img/54.jpg',       title:{en:'The magic formula',                fa:'فرمول جادویی ترید'}},
   {cat:'poster',   src:'assets/img/22.jpg',       title:{en:'If you are waiting for a miracle', fa:'اگر دنبال معجزه هستید'}},
   {cat:'poster',   src:'assets/img/24.jpg',       title:{en:'The market',                       fa:'بازار'}},
   {cat:'brand',    src:'assets/img/coinonia.jpg', title:{en:'Coinonia',                         fa:'کوینونیا'}},
   {cat:'social',   src:'assets/img/24.1.jpg',     title:{en:'What is a bull trap?',             fa:'تله گاوی چیه؟'}},
   {cat:'social',   src:'assets/img/51.jpg',       title:{en:'Three films for traders',          fa:'۳ فیلم مخصوص تریدرها'}},
   {cat:'poster',   src:'assets/img/14.2.jpg',     title:{en:'Before the trade',                 fa:'قبل از معامله'}},
   {cat:'campaign', src:'assets/img/50.jpg',       title:{en:'90% off',                          fa:'۹۰٪ تخفیف ویژه'}},
   {cat:'photo',    src:'assets/img/3.jpg',        title:{en:'The mirror shows you plainly',     fa:'آینه چون نقش تو بنمود راست'}},
   {cat:'photo',    src:'assets/img/4.jpg',        title:{en:'Hiva Ex traders',                  fa:'تریدرهای انس هیوا اکس'}}
  ]
},

/* -----------------------------------------------------------------------------
   III · VIDEO

   TO ADD ONE:
     1. put  name.mp4  AND  name.jpg  (a still from it) in  assets/video/
     2. copy an items line below
     Shot vertical (9:16) is what the grid is built for.
   -------------------------------------------------------------------------- */
video:{
  num:'III',
  title:{en:'Video', fa:'ویدیو'},
  lead:{en:'Shot, cut, captioned and scored by me. Tap one — the rest go quiet.',
        fa:'تصویربرداری، تدوین، زیرنویس و صدا، همه به‌دست خودم. یکی را بزن — بقیه ساکت می‌شوند.'},
  fig:'assets/fig/video.png',

  cats:[
   {id:'explainer', title:{en:'Explainer', fa:'آموزشی'}},
   {id:'series',    title:{en:'Series',    fa:'مجموعه'}},
   {id:'social',    title:{en:'Social',    fa:'سوشال'}}
  ],

  items:[
   {cat:'explainer', src:'assets/video/2.mp4',    poster:'assets/video/2.jpg',
    title:{en:'The best time to trade', fa:'بهترین زمان برای معامله'}},
   {cat:'explainer', src:'assets/video/14.1.mp4', poster:'assets/video/14.1.jpg',
    title:{en:'A stop-loss kills more than the loss', fa:'حد ضرر فقط «ضرر» را نمی‌کشد'}},
   {cat:'series',    src:'assets/video/6.1.mp4',  poster:'assets/video/6.1.jpg',
    title:{en:'Hivanameh — do not fall for Bitcoin', fa:'هیوانامه — فریب بیت‌کوین را نخورید'}},
   {cat:'social',    src:'assets/video/Okay_Damage__1_.mp4', poster:'assets/video/Okay_Damage__1_.jpg',
    title:{en:'Okay Damage', fa:'اوکی دمیج'}}
  ]
},

/* -----------------------------------------------------------------------------
   IV · WRITING — the section wrapper only.
   The essays themselves are in  essays.js.
   -------------------------------------------------------------------------- */
writing:{
  num:'IV',
  title:{en:'Writing', fa:'متن'},
  lead:{en:'Longer pieces. The reader strips the page down to one column — start anywhere.',
        fa:'متن‌های بلندتر. صفحه‌ی خواندن همه‌چیز را جز یک ستون حذف می‌کند — از هرجا شروع کن.'},
  fig:'assets/fig/writing.png',

  cats:[
   {id:'philosophy', title:{en:'Philosophy', fa:'فلسفه'}},
   {id:'politics',   title:{en:'Politics',   fa:'سیاست'}},
   {id:'marketing',  title:{en:'Marketing',  fa:'بازاریابی'}}
  ],

  items:[]   /* filled by essays.js — do not write essays here */
},

/* -----------------------------------------------------------------------------
   Interface words. Only touch these to change wording or fix a translation.
   -------------------------------------------------------------------------- */
ui:{
  close:{en:'close',          fa:'بستن'},
  min:  {en:'min read',       fa:'دقیقه مطالعه'},
  back: {en:'back to writing', fa:'بازگشت به متن‌ها'},
  of:   {en:'of',             fa:'از'},
  all:  {en:'All',            fa:'همه'}
}
};

/* which order the four tiles appear in on the front page */
DATA.order = ['me','images','video','writing'];


/* =============================================================================
   CONVERTING A FILE BEFORE YOU ADD IT

   Big files make the site slow, so shrink them first. Run these in a Terminal
   from inside this folder, changing the input path and the output name:

     image
       sips -Z 1400 -s format jpeg -s formatOptions 72 ~/Desktop/poster.png \
            --out assets/img/poster.jpg

     video + its still frame
       ffmpeg -i ~/Desktop/clip.mp4 -vcodec libx264 -crf 28 -vf scale=720:-2 \
              -movflags +faststart assets/video/clip.mp4
       ffmpeg -ss 1 -i ~/Desktop/clip.mp4 -frames:v 1 -vf scale=480:-2 \
              assets/video/clip.jpg

   (ffmpeg comes from `brew install ffmpeg`; sips is already on every Mac.)
   ============================================================================= */
