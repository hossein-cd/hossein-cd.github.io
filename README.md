# hosseincd — personal site

Static. No build step, no dependencies, no framework. Open `index.html` and it runs.

## Files

| File | What it is |
|---|---|
| `index.html` | The site: hero, four tiles, and the room each one opens. |
| `content.js` | **Content.** Bio, links, image and video lists, categories, UI words. |
| `essays.js` | **The long texts**, one block each. Paragraphs split on blank lines. |
| `ui.js` | What is *inside* a section: gallery, lightbox, video grid, reader. |
| `app.css` | Palette, typography, every section body, responsive rules. |
| `assets/img/` | Posters and key visuals (JPEG, max 1400px). |
| `assets/video/` | Videos (720p H.264) + a poster frame for each. |
| `assets/fig/` | The four painted figures, one per section. |
| `_source/` | Original resume + raw samples. Gitignored — never published. |
| `.claude/skills/site-content/` | Briefing for any agent asked to edit this site. |

## Editing

Everything you would normally want to change is in `content.js` and `essays.js`.
Both files are commented with the instructions inline, so you can work in the file
itself without coming back here.

Every visible string is a pair — `{en:'…', fa:'…'}`. Fill both.

**Add an essay** — copy a block in `essays.js`. The text goes between backticks, so
you can paste straight from a document, and **a blank line starts a new paragraph**.
Reading time is counted from the text; there is no number to maintain.

**Add a category** — one entry in that section's `cats`, then tag items with its
`id` via `cat`. Images, video and writing each have their own set. The `All` chip
and every count are derived. An empty category hides itself.

**Add an image** — drop the file in `assets/img/`, add one line to `images.items`.
Any aspect ratio works; the gallery is a masonry column layout.

**Add a video** — put `name.mp4` and `name.jpg` (a still frame) in `assets/video/`,
add one line to `video.items`. Vertical (9:16) is what the grid expects.

**Check it** — `python3 -m http.server -d . 8000`, then look at both languages and
a narrow window. Content problems print in the browser console.

Compress before committing:

```bash
sips -Z 1400 -s format jpeg -s formatOptions 72 in.png --out assets/img/out.jpg
ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -vf scale=720:-2 -movflags +faststart assets/video/out.mp4
ffmpeg -ss 1 -i in.mp4 -frames:v 1 -vf scale=480:-2 assets/video/out.jpg
```

## Design rules being followed

- One typeface (Vazirmatn) for Latin and Persian, one ink colour for all text.
  Hierarchy comes from weight and opacity, never from a second colour.
- Black and blue: `#5b9bd5` and `#2f6fa8` over a near-black ground. The whole
  palette is the `:root` block in `app.css`; the gradient that carries it is
  the single `.sky` rule under it.
- Elements stay minimal: hairlines, arcs, plain geometry, space.
- Colour appears in the room, not in the type.
