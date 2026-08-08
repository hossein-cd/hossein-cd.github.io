/* =============================================================================
   ESSAYS — the long texts.

   HOW TO ADD ONE
   --------------
   Copy an entire block between the ---- lines, paste it above the last ], and
   fill it in. The blocks are separated so you can paste three pages of text
   without hunting for the end of a line.

   The text goes between BACKTICKS  ` … `  — not quotes. That means you can
   paste straight from a document: apostrophes, quotation marks, «گیومه»,
   line breaks, all of it survives untouched.

   A BLANK LINE STARTS A NEW PARAGRAPH. Nothing else does. Write the way you
   would in a text editor and it comes out right.

   Only two characters are unsafe inside a backtick block:
       `      a backtick        →  write it as  \`
       ${     dollar-brace      →  write it as  \${
   Neither appears in ordinary Persian or English prose.

   Reading time is counted from the text automatically — there is no number to
   keep up to date.

   FIELDS
     cat    which filter button it sits under — an id from writing.cats in content.js
     title  the headline on the card
     hook   ONE sentence, shown large under the headline. This is the whole job
            of getting someone to open it, so write it last, once you know what
            the piece actually turned out to be about.
     text   the piece itself
   ============================================================================= */

DATA.writing.items = [

/* ------------------------------------------------------------------------- */
{
cat:'stories',

title:{
  en:`Placeholder — replace this with your first essay`,
  fa:`جای‌گذار — اولین متن خودت را جای این بگذار`
},

hook:{
  en:`The first sentence goes here, set large. It is the hook — the site shows it before anything else.`,
  fa:`جمله‌ی اول اینجا می‌آید، درشت. این قلاب متن است — سایت پیش از هر چیز دیگری همین را نشان می‌دهد.`
},

text:{
en:`
Paste the whole piece here. Leave a blank line between paragraphs and the site
does the rest — one narrow column, a progress line across the top, and each
paragraph fading in as it comes up.

Two to three pages is exactly the length this view was built for. Shorter is
fine. Much longer and it would be worth splitting into two pieces.

Delete this text and this block once you have a real one to put here.
`,
fa:`
متن کامل را اینجا بگذار. بین پاراگراف‌ها یک خط خالی بگذار؛ بقیه‌اش با سایت است —
یک ستون باریک، نواری از پیشرفتِ خواندن بالای صفحه، و پاراگراف‌هایی که با
نزدیک‌شدن، محو‌به‌روشن می‌آیند.

دو تا سه صفحه دقیقاً همان طولی است که این نما برایش ساخته شده. کوتاه‌تر هم
اشکالی ندارد. خیلی بلندتر که شد، بهتر است به دو متن تقسیمش کنی.

وقتی متن واقعی داشتی، این نوشته و کل این بلوک را پاک کن.
`}
},

/* ------------------------------------------------------------------------- */
{
cat:'reports',

title:{
  en:`Placeholder — second essay`,
  fa:`جای‌گذار — متن دوم`
},

hook:{
  en:`Another opening line. Keep it to one sentence that makes reading the next one unavoidable.`,
  fa:`یک جمله‌ی آغازین دیگر. در حد یک جمله نگهش دار؛ جمله‌ای که خواندن جمله‌ی بعدی را ناگزیر کند.`
},

text:{
en:`
First paragraph.

Second paragraph.
`,
fa:`
پاراگراف اول.

پاراگراف دوم.
`}
},

/* ------------------------------------------------------------------------- */
{
cat:'research',

title:{
  en:`Placeholder — third essay`,
  fa:`جای‌گذار — متن سوم`
},

hook:{
  en:`Short pieces work here too; the reading time on the card sets the expectation.`,
  fa:`متن کوتاه هم اینجا جواب می‌دهد؛ زمان مطالعه روی کارت، انتظار خواننده را تنظیم می‌کند.`
},

text:{
en:`
First paragraph.

Second paragraph.
`,
fa:`
پاراگراف اول.

پاراگراف دوم.
`}
},

];
