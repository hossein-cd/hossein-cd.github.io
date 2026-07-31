# hosseincd — personal site

Static. No build step, no dependencies, no framework. Open `index.html` and it runs.

## Files

| File | What it is |
|---|---|
| `index.html` | The site: hero, four tiles, and the room each one opens. |
| `data.js` | **All content.** Text, links, image list, video list, essays. Edit this. |
| `ui.js` | What is *inside* a section: gallery, lightbox, video grid, reader. |
| `app.css` | Palette, typography, every section body, responsive rules. |
| `assets/img/` | Posters and key visuals (JPEG, max 1400px). |
| `assets/video/` | Videos (720p H.264) + a poster frame for each. |
| `assets/fig/` | The four painted figures, one per section. |
| `_source/` | Original resume + raw samples. Gitignored — never published. |

## Editing

Everything you would normally want to change is in `data.js`.

**Add an essay** — copy one block inside `writing.items`. `body` is an array; one
paragraph per entry. `mins` is the reading time shown on the card.

**Add a category** — one line in `images.cats`, then set `c:` on the images
that belong to it. The `All` chip and every count are worked out automatically.

**Add an image** — drop the file in `assets/img/`, add one line to `images.items`.
Any aspect ratio works; the gallery is a masonry column layout.

**Add a video** — put `name.mp4` and `name.jpg` (a poster frame) in `assets/video/`,
add one line to `video.items`. Vertical (9:16) is what the grid expects.

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
