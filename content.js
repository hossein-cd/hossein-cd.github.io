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
   {id:'telegram', title:{en:'Telegram',    fa:'تلگرام'}},
   {id:'carousel', title:{en:'IG carousels',fa:'کاروسل‌های اینستاگرام'}},
   {id:'story',    title:{en:'IG stories',  fa:'استوری‌های اینستاگرام'}},
   {id:'cover',    title:{en:'IG covers',   fa:'کاور پست‌های اینستاگرام'}},
   {id:'logo',     title:{en:'Logos & ads', fa:'لوگو، تبلیغات و هدر'}}
  ],

  items:[
   /* No captions yet. To name one, add a title to its line:
      {cat:'telegram', src:'…', title:{en:'…', fa:'…'}}  */
   {cat:'telegram', src:'assets/img/telegram-01.jpg'},
   {cat:'telegram', src:'assets/img/telegram-02.jpg'},
   {cat:'telegram', src:'assets/img/telegram-03.jpg'},
   {cat:'telegram', src:'assets/img/telegram-04.jpg'},
   {cat:'telegram', src:'assets/img/telegram-05.jpg'},
   {cat:'telegram', src:'assets/img/telegram-06.jpg'},
   {cat:'telegram', src:'assets/img/telegram-07.jpg'},
   {cat:'telegram', src:'assets/img/telegram-08.jpg'},
   {cat:'telegram', src:'assets/img/telegram-09.jpg'},
   {cat:'telegram', src:'assets/img/telegram-10.jpg'},
   {cat:'telegram', src:'assets/img/telegram-11.jpg'},
   {cat:'telegram', src:'assets/img/telegram-12.jpg'},
   {cat:'telegram', src:'assets/img/telegram-13.jpg'},
   {cat:'telegram', src:'assets/img/telegram-14.jpg'},
   {cat:'telegram', src:'assets/img/telegram-15.jpg'},
   {cat:'telegram', src:'assets/img/telegram-16.jpg'},
   {cat:'telegram', src:'assets/img/telegram-17.jpg'},
   {cat:'telegram', src:'assets/img/telegram-18.jpg'},
   {cat:'telegram', src:'assets/img/telegram-19.jpg'},
   {cat:'telegram', src:'assets/img/telegram-20.jpg'},
   {cat:'telegram', src:'assets/img/telegram-21.jpg'},
   {cat:'telegram', src:'assets/img/telegram-22.jpg'},
   {cat:'telegram', src:'assets/img/telegram-23.jpg'},
   {cat:'telegram', src:'assets/img/telegram-24.jpg'},
   {cat:'telegram', src:'assets/img/telegram-25.jpg'},
   {cat:'telegram', src:'assets/img/telegram-26.jpg'},
   {cat:'telegram', src:'assets/img/telegram-27.jpg'},
   {cat:'telegram', src:'assets/img/telegram-28.jpg'},
   {cat:'telegram', src:'assets/img/telegram-29.jpg'},
   {cat:'telegram', src:'assets/img/telegram-30.jpg'},
   {cat:'telegram', src:'assets/img/telegram-31.jpg'},
   {cat:'telegram', src:'assets/img/telegram-32.jpg'},
   {cat:'telegram', src:'assets/img/telegram-33.jpg'},
   {cat:'telegram', src:'assets/img/telegram-34.jpg'},
   {cat:'telegram', src:'assets/img/telegram-35.jpg'},
   {cat:'telegram', src:'assets/img/telegram-36.jpg'},
   {cat:'carousel', src:'assets/img/carousel-01.jpg'},
   {cat:'carousel', src:'assets/img/carousel-02.jpg'},
   {cat:'carousel', src:'assets/img/carousel-03.jpg'},
   {cat:'carousel', src:'assets/img/carousel-04.jpg'},
   {cat:'carousel', src:'assets/img/carousel-05.jpg'},
   {cat:'carousel', src:'assets/img/carousel-06.jpg'},
   {cat:'carousel', src:'assets/img/carousel-07.jpg'},
   {cat:'carousel', src:'assets/img/carousel-08.jpg'},
   {cat:'carousel', src:'assets/img/carousel-09.jpg'},
   {cat:'carousel', src:'assets/img/carousel-10.jpg'},
   {cat:'carousel', src:'assets/img/carousel-11.jpg'},
   {cat:'carousel', src:'assets/img/carousel-12.jpg'},
   {cat:'carousel', src:'assets/img/carousel-13.jpg'},
   {cat:'carousel', src:'assets/img/carousel-14.jpg'},
   {cat:'carousel', src:'assets/img/carousel-15.jpg'},
   {cat:'carousel', src:'assets/img/carousel-16.jpg'},
   {cat:'carousel', src:'assets/img/carousel-17.jpg'},
   {cat:'carousel', src:'assets/img/carousel-18.jpg'},
   {cat:'carousel', src:'assets/img/carousel-19.jpg'},
   {cat:'carousel', src:'assets/img/carousel-20.jpg'},
   {cat:'carousel', src:'assets/img/carousel-21.jpg'},
   {cat:'carousel', src:'assets/img/carousel-22.jpg'},
   {cat:'carousel', src:'assets/img/carousel-23.jpg'},
   {cat:'carousel', src:'assets/img/carousel-24.jpg'},
   {cat:'carousel', src:'assets/img/carousel-25.jpg'},
   {cat:'carousel', src:'assets/img/carousel-26.jpg'},
   {cat:'story', src:'assets/img/story-01.jpg'},
   {cat:'story', src:'assets/img/story-02.jpg'},
   {cat:'story', src:'assets/img/story-03.jpg'},
   {cat:'story', src:'assets/img/story-04.jpg'},
   {cat:'story', src:'assets/img/story-05.jpg'},
   {cat:'story', src:'assets/img/story-06.jpg'},
   {cat:'story', src:'assets/img/story-07.jpg'},
   {cat:'story', src:'assets/img/story-08.jpg'},
   {cat:'story', src:'assets/img/story-09.jpg'},
   {cat:'story', src:'assets/img/story-10.jpg'},
   {cat:'story', src:'assets/img/story-11.jpg'},
   {cat:'story', src:'assets/img/story-12.jpg'},
   {cat:'story', src:'assets/img/story-13.jpg'},
   {cat:'story', src:'assets/img/story-14.jpg'},
   {cat:'story', src:'assets/img/story-15.jpg'},
   {cat:'story', src:'assets/img/story-16.jpg'},
   {cat:'story', src:'assets/img/story-17.jpg'},
   {cat:'story', src:'assets/img/story-18.jpg'},
   {cat:'story', src:'assets/img/story-19.jpg'},
   {cat:'story', src:'assets/img/story-20.jpg'},
   {cat:'story', src:'assets/img/story-21.jpg'},
   {cat:'story', src:'assets/img/story-22.jpg'},
   {cat:'story', src:'assets/img/story-23.jpg'},
   {cat:'story', src:'assets/img/story-24.jpg'},
   {cat:'story', src:'assets/img/story-25.jpg'},
   {cat:'cover', src:'assets/img/cover-01.jpg'},
   {cat:'cover', src:'assets/img/cover-02.jpg'},
   {cat:'cover', src:'assets/img/cover-03.jpg'},
   {cat:'cover', src:'assets/img/cover-04.jpg'},
   {cat:'cover', src:'assets/img/cover-05.jpg'},
   {cat:'cover', src:'assets/img/cover-06.jpg'},
   {cat:'cover', src:'assets/img/cover-07.jpg'},
   {cat:'cover', src:'assets/img/cover-08.jpg'},
   {cat:'cover', src:'assets/img/cover-09.jpg'},
   {cat:'cover', src:'assets/img/cover-10.jpg'},
   {cat:'cover', src:'assets/img/cover-11.jpg'},
   {cat:'cover', src:'assets/img/cover-12.jpg'},
   {cat:'cover', src:'assets/img/cover-13.jpg'},
   {cat:'cover', src:'assets/img/cover-14.jpg'},
   {cat:'logo', src:'assets/img/logo-01.jpg'},
   {cat:'logo', src:'assets/img/logo-02.jpg'},
   {cat:'logo', src:'assets/img/logo-03.jpg'},
   {cat:'logo', src:'assets/img/logo-04.jpg'},
   {cat:'logo', src:'assets/img/logo-05.jpg'},
   {cat:'logo', src:'assets/img/logo-06.jpg'},
   {cat:'logo', src:'assets/img/logo-07.jpg'},
   {cat:'logo', src:'assets/img/logo-08.jpg'},
   {cat:'logo', src:'assets/img/logo-09.jpg'},
   {cat:'logo', src:'assets/img/logo-10.jpg'},
   {cat:'logo', src:'assets/img/logo-11.jpg'},
   {cat:'logo', src:'assets/img/logo-12.jpg'},
   {cat:'logo', src:'assets/img/logo-13.jpg'},
   {cat:'logo', src:'assets/img/logo-14.jpg'}
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
  lead:{en:'I created the reels and motion videos with the help of AI, while the edits were done without AI using simple software tools. I have also uploaded a few videos of myself presenting.',
        fa:'ریلز و موشن‌ها را با کمک هوش مصنوعی و ادیت‌ها را بدون آن اما با نرم افزارهای ساده ساخته‌ام، چند ویدیو از مجری‌گری خود نیز بارگذاری کرده‌ام'},
  fig:'assets/fig/video.png',

  cats:[
   {id:'reels',    title:{en:'Reels',        fa:'ریلز‌ها'}},
   {id:'motion',   title:{en:'Motion',       fa:'موشن‌ها'}},
   {id:'edits',    title:{en:'Edits',        fa:'ادیت‌ها'}},
   {id:'carousel', title:{en:'IG carousels', fa:'کاروسل‌های اینستاگرام'}},
   {id:'host',     title:{en:'Hosting',      fa:'مجری‌گری'}}
  ],

  items:[
   /* No captions yet. Add one with:  title:{en:'…', fa:'…'}  */
   {cat:'reels', src:'assets/video/reels-01.mp4', poster:'assets/video/reels-01.jpg'},
   {cat:'reels', src:'assets/video/reels-02.mp4', poster:'assets/video/reels-02.jpg'},
   {cat:'reels', src:'assets/video/reels-03.mp4', poster:'assets/video/reels-03.jpg'},
   {cat:'reels', src:'assets/video/reels-04.mp4', poster:'assets/video/reels-04.jpg'},
   {cat:'reels', src:'assets/video/reels-05.mp4', poster:'assets/video/reels-05.jpg'},
   {cat:'reels', src:'assets/video/reels-06.mp4', poster:'assets/video/reels-06.jpg'},
   {cat:'reels', src:'assets/video/reels-07.mp4', poster:'assets/video/reels-07.jpg'},
   {cat:'reels', src:'assets/video/reels-08.mp4', poster:'assets/video/reels-08.jpg'},
   {cat:'reels', src:'assets/video/reels-09.mp4', poster:'assets/video/reels-09.jpg'},
   {cat:'reels', src:'assets/video/reels-10.mp4', poster:'assets/video/reels-10.jpg'},
   {cat:'reels', src:'assets/video/reels-11.mp4', poster:'assets/video/reels-11.jpg'},
   {cat:'reels', src:'assets/video/reels-12.mp4', poster:'assets/video/reels-12.jpg'},
   {cat:'reels', src:'assets/video/reels-13.mp4', poster:'assets/video/reels-13.jpg'},
   {cat:'reels', src:'assets/video/reels-14.mp4', poster:'assets/video/reels-14.jpg'},
   {cat:'motion', src:'assets/video/motion-01.mp4', poster:'assets/video/motion-01.jpg'},
   {cat:'motion', src:'assets/video/motion-02.mp4', poster:'assets/video/motion-02.jpg'},
   {cat:'motion', src:'assets/video/motion-03.mp4', poster:'assets/video/motion-03.jpg'},
   {cat:'motion', src:'assets/video/motion-04.mp4', poster:'assets/video/motion-04.jpg'},
   {cat:'motion', src:'assets/video/motion-05.mp4', poster:'assets/video/motion-05.jpg'},
   {cat:'motion', src:'assets/video/motion-06.mp4', poster:'assets/video/motion-06.jpg'},
   {cat:'motion', src:'assets/video/motion-07.mp4', poster:'assets/video/motion-07.jpg'},
   {cat:'motion', src:'assets/video/motion-08.mp4', poster:'assets/video/motion-08.jpg'},
   {cat:'motion', src:'assets/video/motion-09.mp4', poster:'assets/video/motion-09.jpg'},
   {cat:'motion', src:'assets/video/motion-10.mp4', poster:'assets/video/motion-10.jpg'},
   {cat:'motion', src:'assets/video/motion-11.mp4', poster:'assets/video/motion-11.jpg'},
   {cat:'motion', src:'assets/video/motion-12.mp4', poster:'assets/video/motion-12.jpg'},
   {cat:'motion', src:'assets/video/motion-13.mp4', poster:'assets/video/motion-13.jpg'},
   {cat:'edits', src:'assets/video/edits-01.mp4', poster:'assets/video/edits-01.jpg'},
   {cat:'edits', src:'assets/video/edits-02.mp4', poster:'assets/video/edits-02.jpg'},
   {cat:'edits', src:'assets/video/edits-03.mp4', poster:'assets/video/edits-03.jpg'},
   {cat:'edits', src:'assets/video/edits-04.mp4', poster:'assets/video/edits-04.jpg'},
   {cat:'edits', src:'assets/video/edits-05.mp4', poster:'assets/video/edits-05.jpg'},
   {cat:'edits', src:'assets/video/edits-06.mp4', poster:'assets/video/edits-06.jpg'},
   {cat:'carousel', src:'assets/video/carousel-01.mp4', poster:'assets/video/carousel-01.jpg'},
   {cat:'carousel', src:'assets/video/carousel-02.mp4', poster:'assets/video/carousel-02.jpg'},
   {cat:'host', src:'assets/video/host-01.mp4', poster:'assets/video/host-01.jpg'},
   {cat:'host', src:'assets/video/host-02.mp4', poster:'assets/video/host-02.jpg'}
  ]
},

/* -----------------------------------------------------------------------------
   IV · WRITING — the section wrapper only.
   The essays themselves are in  essays.js.
   -------------------------------------------------------------------------- */
writing:{
  num:'IV',
  title:{en:'Writing', fa:'متن'},
  lead:{en:'I have uploaded some of my short stories, reports I have written from meetings, and research projects I conducted at university here.',
        fa:'برخی از داستان‌های کوتاه، گزارشاتی که از جلسات نوشته‌ام و پژوهش‌های که در دانشگاه انجام داده‌ام اینجا گذاشته‌ام.'},
  fig:'assets/fig/writing.png',

  cats:[
   {id:'stories',  title:{en:'Stories',  fa:'داستان‌ها'}},
   {id:'reports',  title:{en:'Reports',  fa:'گزارش‌ها'}},
   {id:'research', title:{en:'Research', fa:'پژوهش‌ها'}}
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
