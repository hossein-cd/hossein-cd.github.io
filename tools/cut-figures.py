#!/usr/bin/env python3
"""Cut the four painted philosophers out of one sheet into transparent PNGs.

    python3 tools/cut-figures.py ~/Desktop/figures.png

Knocks out the white ground *and* the white die-cut outline, splits on the
empty columns between figures, and writes them in left-to-right order to
assets/fig/ under the names the site expects.
"""
import sys, os
from PIL import Image

# left-to-right on the sheet -> which section each figure belongs to
NAMES = ['video', 'images', 'writing', 'me']
WHITE = 232      # a pixel this bright and this neutral is background
NEUTRAL = 16     # max channel spread still counted as "white"
PAD = 12

def main(src):
    im = Image.open(src).convert('RGBA')
    w, h = im.size
    px = im.load()

    # 1. white ground + white sticker outline -> transparent
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if min(r, g, b) >= WHITE and max(r, g, b) - min(r, g, b) <= NEUTRAL:
                px[x, y] = (r, g, b, 0)

    # 2. columns that are entirely transparent are the gaps between figures
    alpha = im.getchannel('A')
    ap = alpha.load()
    filled = [any(ap[x, y] > 8 for y in range(0, h, 2)) for x in range(w)]

    spans, start = [], None
    for x, f in enumerate(filled):
        if f and start is None:
            start = x
        elif not f and start is not None:
            if x - start > w * 0.03:      # ignore specks
                spans.append((start, x))
            start = None
    if start is not None:
        spans.append((start, w))

    if len(spans) != len(NAMES):
        print(f'found {len(spans)} figures, expected {len(NAMES)}: {spans}')
        print('adjust WHITE/NEUTRAL, or crop the sheet so the four are separated')
        return 1

    out = os.path.join(os.path.dirname(__file__), '..', 'assets', 'fig')
    os.makedirs(out, exist_ok=True)
    for (x0, x1), name in zip(spans, NAMES):
        fig = im.crop((x0, 0, x1, h))
        fig = fig.crop(fig.getbbox())                       # trim vertically too
        pad = Image.new('RGBA', (fig.width + PAD * 2, fig.height + PAD * 2), (0, 0, 0, 0))
        pad.paste(fig, (PAD, PAD))
        pad.thumbnail((760, 760), Image.LANCZOS)
        path = os.path.join(out, f'{name}.png')
        pad.save(path, optimize=True)
        print(f'{name}.png  {pad.width}x{pad.height}')
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(os.path.expanduser(sys.argv[1])))
