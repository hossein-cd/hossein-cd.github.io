---
name: hossein-site
description: >
  Add or edit content on Hossein Soroushpour's personal site (the hossein-cd
  repo published at hossein-cd.github.io) — essays and long-form writing,
  poster and campaign images, videos, the bio, the work history, contact
  links, and the category chips that filter each section. Use this skill
  whenever someone is working inside this repo and wants to publish a piece
  of writing, add a portfolio image or video, update the "about me" text or
  CV entries, translate content between English and Persian, reorganise
  categories, or asks why something is not showing up on the site. Also use
  it before changing any styling here, because the design has deliberate
  rules that are easy to break by accident and hard to notice afterwards.
---

# Hossein's site

A static bilingual (English / Persian) portfolio. No build step, no
dependencies, no framework. Open `index.html` and it runs; push to `main` and
GitHub Pages publishes it.

The single most useful thing to know: **content and code are separate, and
almost every request is a content change.** If you find yourself editing HTML
to add an essay, stop — you are in the wrong file.

## Where things live

| File | What it is |
|---|---|
| `content.js` | Bio, work history, links, the image and video lists, category chips, interface words. |
| `essays.js` | The long texts. Separate because they are long. |
| `ui.js` | What is *inside* a section: gallery, lightbox, video grid, essay reader. |
| `app.css` | The whole design system — palette, type, every section, responsive rules. |
| `index.html` | The shell: hero, four tiles, and the room a tile opens into. |
| `assets/img/`, `assets/video/`, `assets/fig/` | Media. `fig/` is the four painted philosophers, one per section. |
| `_source/` | Hossein's original CV and raw uncompressed samples. Gitignored — never published, never referenced. |

## Before you finish, run the check

```bash
node .claude/skills/hossein-site/scripts/check.js
```

It parses both content files and reports the four failures that don't throw
an error on their own — a category id no chip declares (the item silently
never appears), a half-translated pair, a referenced file that isn't there,
and an essay whose two languages disagree on paragraph count (a blank line
was lost in the paste). A syntax slip is usually a missing comma between
entries, or an apostrophe inside a `'single-quoted'` string.

## Everything is bilingual

Every visible string is a pair:

```js
title:{en:'Never trade again', fa:'دیگه هیچ‌وقت ترید نکن'}
```

If one language is missing the site shows the other and warns in the console,
so nothing breaks — but a half-translated page reads as unfinished, and that
undercuts the whole point of the site. Fill both.

Persian is not a second-class citizen here: the page flips to RTL, the layout
mirrors, and the same typeface covers both alphabets. When writing Persian,
use Persian digits (۱۴۰۴), the ZWNJ in words that need it (`می‌شود`, not
`میشود`), and «Persian quotation marks». If you are not confident writing
Persian prose, say so and ask rather than shipping something stilted — Hossein
writes for a living and will notice immediately.

## Adding an essay

Essays are the main reason this site exists, and the reader view was built for
pieces two or three pages long. Copy a whole block in `essays.js` and fill it
in. The text sits between backticks, so paste straight from a document —
apostrophes, quotes, «گیومه», line breaks all survive.

**A blank line starts a new paragraph. Nothing else does.** Only two sequences
need escaping inside a backtick block: a backtick (`` \` ``) and `${`. Neither
occurs in ordinary prose.

`hook` is the one sentence shown large on the card and again above the text.
It is doing all the work of getting the piece opened, so it deserves more
attention than the title. Write it last, once you know what the piece actually
turned out to be about.

Reading time is counted from the text automatically. There is no number to
maintain, and no `mins` field to set.

## Adding an image or video

Put the file in `assets/img/` or `assets/video/`, then add one line to the
matching `items` list in `content.js`. Compress first — this is a portfolio,
and a visitor on Iranian mobile data will close a page that takes ten seconds:

```bash
sips -Z 1400 -s format jpeg -s formatOptions 72 ~/Desktop/poster.png --out assets/img/poster.jpg
ffmpeg -i ~/Desktop/clip.mp4 -vcodec libx264 -crf 28 -vf scale=720:-2 -movflags +faststart assets/video/clip.mp4
ffmpeg -ss 1 -i ~/Desktop/clip.mp4 -frames:v 1 -vf scale=480:-2 assets/video/clip.jpg
```

Every video needs that second file — a still frame at `assets/video/<name>.jpg`
— or its card sits black until someone presses play. Videos are shot vertical;
the grid is built for 9:16.

Images can be any shape. The gallery is a masonry column layout, so tall
posters, squares and wide banners all sit correctly next to each other.

## Categories

Each of Images, Video and Writing has a `cats` list that becomes the chip row.
Add a category there, then tag items with its `id` via their `cat` field. The
`All` chip and every count are worked out for you, and a category with no
items in it hides itself. A typo in `cat` is the most common way an item
"disappears" — the checker catches exactly this.

## The design rules, and why they exist

The site looks calm because of a few constraints that are easy to violate one
small step at a time. If you are asked to change styling, work inside these
rather than around them:

- **One typeface for both alphabets.** Vazirmatn covers Latin and Persian, so
  the page never changes voice when it changes language. Adding a display font
  for headings was tried and removed.
- **One ink colour.** All text is `--ink`. Hierarchy comes from weight and
  opacity only. The moment a second text colour appears the page starts
  looking like a template.
- **Colour lives in the room, not in the type.** Black and blue: `#5b9bd5` and
  `#2f6fa8` over a near-black ground, carried by a single `.sky` gradient rule.
  Change the palette there and the whole site follows.
- **Minimal elements.** Hairlines, arcs, plain geometry, space. No shadows on
  panels, no rounded cards, no icon sets.
- **Everything responsive.** Verify at 375px as well as desktop, and in
  Persian as well as English — RTL is where layout bugs hide.

Two geometry facts already learned the hard way here, worth not rediscovering:
a square is symmetric every 90°, so the two tile squares must stay exactly 45°
apart or they land on top of each other instead of crossing into a star; and a
percentage `max-height` only resolves against a definite parent height, which
is why the lightbox uses flex rather than grid.

## Publishing

`main` is what is live. Push and GitHub Pages redeploys within a minute or
two. Because assets are cached, a returning visitor may see old content for a
few minutes after a change — that is expected, not a bug to engineer around.

Ask before pushing. Hossein may want to read a piece once more before it is
public, and unlike a local edit, a push is visible to anyone with the link.
