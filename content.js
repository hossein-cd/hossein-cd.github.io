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
  name:{en:'Welcome!', fa:'خوش آمدید!'},
  role:{en:'Digital market specialist and content creator',
        fa:'کارشناس دیجیتال مارکتینگ و تولیدکننده‌ محتوا'},
  /* the big line on the front page; the second line is set in a lighter tone */
  hero:{en:['Hello, I’m Hossein, and I have uploaded my portfolio here.'],
        fa:['سلام، من حسین هستم و نمونه کارهای خود را اینجا بارگذاری کرده‌ام.']},
  heroSub:{en:'Click on the desired section.',
           fa:'روی قسمت مورد نظر کلیک کنید!'}
},

/* -----------------------------------------------------------------------------
   I · ME — the bio, the history table, and how to reach you
   -------------------------------------------------------------------------- */
me:{
  num:'I',
  title:{en:'Me', fa:'من'},
  lead:{en:'I am interested in people, the humanities, and talking with others.',
        fa:'به انسان، علوم انسانی و حرف زدن با بقیه آدم‌ها علاقه دارم!'},
  fig:'assets/fig/me.png',

  /* the bio. one entry per paragraph. */
  body:{
   en:[
    `I have written where I studied and worked in my resume,`,
    `but what matters more to me is understanding`,
    `how I can change people’s perceptions of a product or a company.`
   ],
   fa:[
    `اینکه کجا درس خوانده و کار کردم را در رزومه نوشته‌ام،`,
    `اما از آنها مهم تر این اسست که دوست دارم بدانم،`,
    `چگونه می‌توان ذهنیت مردم به کالای یک شرکت را تغییر داد.`
   ]
  },

  /* the two-column table: [what it was, when it was] */
  facts:{
   en:[['Hiva Ex — Digital marketing','1404 — now'],
       ['Iranian Entrepreneurs forum - Content spesialist','1403 — 1404'],
       ['Telewebion — Content','1401 — 1403'],
       ['MA Political Philosophy, Univ. of Tehran','1404 — now'],
       ['BA Political Science, Univ. of Tehran','1399 — 1404']],
   fa:[['هیوا اکس — کارشناس دیجیتال مارکتینگ','۱۴۰۴ — تا الان'],
       ['مجمع کارآفرینان ایران — کارشناس تولید محتوا','۱۴۰۳ — ۱۴۰۴'],
       ['تلوبیون — تولیدکننده محتوا','۱۴۰۱ — ۱۴۰۳'],
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
  title:{en:'Images', fa:'تصاویر'},
  lead:{en:'I designed these images with the help of AI and some editing using simple software tools.',
        fa:'تصاویر را با کمک هوش مصنوعی و کمی ادیت با نرم‌افزارهای ساده طراحی کرده‌ام.'},
  fig:'assets/fig/images.png',

  /* the filter buttons. `All` and every count are worked out automatically —
     add a category here, then tag images with its id. */
  cats:[
   {id:'Telgram',   title:{en:'Telegram',     fa'تلگرام'}},
   {id:'IG carousles',   title:{en:'IG carousles',      fa:'کاروسل‌های اینستاگرام'}},
   {id:'IG stories', title:{en:'IG stories',   fa:'استوری‌های اینستاگرام'}},
   {id:'IG covers',    title:{en:'IG covers',       fa:'کاور پست‌های اینستاگرام'}},
   {id:'Logos + Ads + Header',    title:{en:'Logos + Ads + Header', fa:'لوگوها، تبلیغات وهدر'}}
  ],

  items:[
   {cat:'telegram',   src:'assets/img/23.jpg',       title:{en:'No algorithm exists',              fa:'هیچ الگوریتمی وجود ندارد'}},
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
        fa:'ریلز و موشن‌ها را با کمک هوش مصنوعی و ادیت‌ها را بدون آن اما با نرم افزارهای ساده ساخته‌ام، چند ویدیو از مجری‌گری خود نیز بارگذاری کرده‌ام'},
  fig:'assets/fig/video.png',

  cats:[
   {id:'reels', title:{en:'reels', fa:'ریلز‌ها'}},
   {id:'motions',    title:{en:'motions',    fa:'موشن‌ها'}},
   {id:'edits',    title:{en:'edits',    fa:'سوشال'}}
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
