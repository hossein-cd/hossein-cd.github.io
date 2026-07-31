---
name: site-content
description: >
  Add or edit content on Hossein Soroushpour's personal site (the hossein-cd/resume
  repo) — essays, images, videos, bio, contact links, categories — and keep the
  bilingual EN/FA structure and the design system intact. Use this skill whenever
  someone asks to put something on the site, publish a piece of writing, upload
  posters or clips, change the bio or CV history, rename or add a category, fix a
  translation, or change how the site looks, even if they never say "the site" or
  name a file. Also use it before touching content.js, essays.js, ui.js, app.css or
  index.html in this repo, because the content format, the Persian handling and the
  colour and type rules are not obvious from reading the code.
---

# Working on Hossein's site

A four-room portfolio: **Me**, **Images**, **Video**, **Writing**. The front page
is a hero and four tiles; clicking a tile opens that room. Everything is bilingual
English / Persian, and the visitor switches with a fixed control at the bottom.

Static: no build step, no dependencies, no framework. Edit a file, reload, done.
It is published with GitHub Pages from `main`, so pushing to `main` deploys.

## Where things live

| File | What it is | Safe to edit for content? |
|---|---|---|
| `content.js` | Bio, CV history, links, image list, video list, categories, UI words | **Yes — start here** |
| `essays.js` | The long texts, one block each | **Yes** |
| `assets/img/` `assets/video/` `assets/fig/` | Media | Yes, add files |
| `ui.js` | What is inside a section: gallery, lightbox, video grid, reader | Only for behaviour |
| `app.css` | Palette, type, every section body, responsive rules | Only for design |
| `index.html` | The shell: hero, tiles, the opening animation | Only for structure |
| `_source/` | The original CV and raw uncompressed samples | Never — gitignored, not published |

**Content never goes in `ui.js`, `app.css` or `index.html`.** If you find yourself
typing a sentence a visitor will read into one of those, it belongs in `content.js`.

## The rule that breaks the site if you miss it

Every visible string is a pair:

```js
title:{en:'Never trade again', fa:'دیگه هیچ‌وقت ترید نکن'}
```

Both languages, always. A missing one no longer blanks the line — `t()` in `ui.js`
falls back to the other language and warns once in the console — but a page that is
half-translated reads as unfinished. If you genuinely cannot supply the Persian,
say so to the user rather than shipping an English-only entry; Persian is the
primary audience for most of this work.

## Adding an essay

Essays are the thing Hossein adds most, so the format is built for pasting prose,
not for escaping quotes. Copy a block in `essays.js` and fill it in:

```js
{
cat:'philosophy',
title:{ en:`…`, fa:`…` },
hook:{  en:`…`, fa:`…` },
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
```

- Text sits between **backticks**, so apostrophes, quotation marks, «گیومه» and
  line breaks all survive a straight paste from a document.
- **A blank line starts a new paragraph.** Single line breaks inside a paragraph
  are joined, so hard-wrapped text is fine.
- Only `` ` `` and `${` need escaping (`` \` `` and `\${`). Neither occurs in
  ordinary prose.
- **Do not add a `mins` field.** Reading time is counted from the text at render
  time, so it can never drift from what is actually there.
- `cat` must match an `id` in `writing.cats` in `content.js`.
- `hook` is one sentence, set large under the title. It is the entire reason
  someone opens a three-page piece — write it after the essay exists, when you
  know what the piece turned out to be about. Do not write a summary; write the
  sentence that makes the next one unavoidable.

## Adding an image or a video

Compress first — an uncompressed poster is 3 MB and the whole gallery is one page.

```bash
# image
sips -Z 1400 -s format jpeg -s formatOptions 72 ~/Desktop/poster.png --out assets/img/poster.jpg

# video, plus a still frame for the poster attribute
ffmpeg -i ~/Desktop/clip.mp4 -vcodec libx264 -crf 28 -vf scale=720:-2 -movflags +faststart assets/video/clip.mp4
ffmpeg -ss 1 -i ~/Desktop/clip.mp4 -frames:v 1 -vf scale=480:-2 assets/video/clip.jpg
```

Then one line in `content.js`. Images take any aspect ratio (the gallery is a
masonry column layout). Videos are expected vertical, 9:16, and every video needs
its `.jpg` still or the grid shows a black rectangle before playback.

Pick the still frame deliberately — it is what people judge the clip by. `-ss 1`
is a default, not a rule; move it to a frame that shows the subject.

## Categories

Add an entry to that section's `cats`, then tag items with its `id` via `cat`.
The `All` chip and every count are derived, so there is nothing to keep in sync.
Images, video and writing each have their own independent set.

A category with no items disappears on its own — so you can add the category
first and fill it later without an empty button sitting there.

## Checking your work

```bash
python3 -m http.server -d . 8000   # then open http://localhost:8000
```

Open the browser console: content problems announce themselves there. Then check
**both languages** and **a narrow window** — Persian is right-to-left and the
layout mirrors, which is where mistakes show up. Reload with cache disabled, or
the browser will happily serve you the old `content.js`.

## Design rules — do not quietly break these

These were decided deliberately with Hossein. Changing one is a design decision
for him to make, not a side effect of adding content.

- **One typeface.** Vazirmatn, Latin and Persian both. Do not add a display face
  for headings, including for Persian — that was tried and rejected.
- **One ink colour** for every piece of text: `--ink`. Hierarchy comes from weight
  and opacity. There is no second text colour anywhere, and coloured text is the
  fastest way to make the page look cheap.
- **Black and blue.** `--accent` `#5b9bd5` and `--accent-2` `#2f6fa8` over a
  near-black ground. The whole palette is the `:root` block in `app.css`; the
  gradient that carries it is the single `.sky` rule under it. Four other palettes
  existed and were dropped — do not reintroduce a palette switcher.
- **Colour lives in the room, not in the type.**
- **Minimal geometry**: hairlines, arcs, plain shapes, space. No ornament.
- The four painted philosopher figures in `assets/fig/` are one per section and
  are desaturated in CSS so they sit inside the blue. If you add art, it has to
  survive that treatment.

## Things that have already bitten someone here

Worth knowing before you debug them a second time:

- **`shown(key)` in `ui.js` is the single source of truth** for what a section is
  displaying. The lightbox and the reader index into it, not into the full list.
  If you add filtering or sorting, route it through `shown()` or clicking item 3
  will open the wrong item whenever a filter is active.
- **Buttons do not inherit `font-family`.** Any new `<button>` needs
  `font-family:var(--font)` or its Persian text silently falls back to the system
  UI face while everything around it stays Vazirmatn.
- **A percentage `max-height` needs a parent with a definite height.** The
  lightbox cropped tall posters until it moved from grid to flex for this reason.
- **A square is symmetric every 90°.** The tile hover animation holds its two
  squares exactly 45° apart; rotating one `+45` and the other `-45` lands them on
  top of each other and the eight-point star vanishes.
- Media files are committed to the repo. Keep them small — GitHub Pages serves
  everything, and the whole site is currently under 20 MB.

## Committing

Small commits, one subject each. Say what changed and why in the body if the why
is not obvious. Push to `main` and GitHub Pages redeploys within a minute or two;
tell the user it may take that long and that they may need a hard reload.
