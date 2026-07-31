/* Verification gate for content edits.  node .claude/skills/hossein-site/scripts/check.js
   Run from the repo root after touching content.js or essays.js.

   It catches the four things that actually go wrong when a person edits
   content by hand, none of which throw an error on their own — the page just
   renders something slightly wrong and nobody notices for a month. */

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const read = f => fs.readFileSync(path.join(root, f), 'utf8');

let DATA;
try {
  // classic scripts share one global scope in the browser; mimic that here
  DATA = eval(read('content.js') + '\n' + read('essays.js') + '\n;DATA');
} catch (e) {
  console.error('✗ content.js or essays.js will not parse — the site would be blank.\n');
  console.error('  ' + e.message);
  console.error('\n  Usually a missing comma between entries, or a quote inside a');
  console.error("  'single-quoted' string that needs a backslash: don\\'t");
  process.exit(1);
}

const problems = [];

/* 1. a category id that no chip declares — the item silently never shows */
for (const key of ['images', 'video', 'writing']) {
  const ids = new Set((DATA[key].cats || []).map(c => c.id));
  (DATA[key].items || []).forEach((it, i) => {
    if (!ids.has(it.cat))
      problems.push(`${key} item ${i + 1}: cat '${it.cat}' is not in ${key}.cats — it will be hidden`);
  });
}

/* 2. a half-translated pair — the page falls back, but looks careless */
(function walk(o, at) {
  if (!o || typeof o !== 'object') return;
  if ('en' in o || 'fa' in o) {
    if (o.en == null) problems.push(`${at}: missing English`);
    if (o.fa == null) problems.push(`${at}: missing Persian`);
    return;
  }
  for (const k in o) walk(o[k], at + '.' + k);
})(DATA, 'content');

/* 3. a file that is referenced but not committed — a broken image on a live page */
const miss = p => !fs.existsSync(path.join(root, p));
(DATA.images.items || []).forEach(i => miss(i.src) && problems.push(`missing file: ${i.src}`));
(DATA.video.items || []).forEach(v => {
  if (miss(v.src)) problems.push(`missing file: ${v.src}`);
  if (miss(v.poster)) problems.push(`missing poster: ${v.poster} — the card shows black until it plays`);
});
['me', 'images', 'video', 'writing'].forEach(k => {
  if (DATA[k].fig && miss(DATA[k].fig)) problems.push(`missing figure: ${DATA[k].fig}`);
});

/* 4. an essay whose two languages disagree about how many paragraphs it has,
      which nearly always means a blank line was lost when pasting */
const paras = b => String(b || '').trim().split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
(DATA.writing.items || []).forEach((e, i) => {
  const en = paras(e.text && e.text.en).length, fa = paras(e.text && e.text.fa).length;
  if (en && fa && en !== fa)
    problems.push(`essay ${i + 1} "${(e.title && e.title.en) || ''}": ${en} English paragraphs vs ${fa} Persian — a blank line is probably missing`);
});

const words = t => (paras(t).join(' ').match(/\S+/g) || []).length;
console.log(`${DATA.images.items.length} images · ${DATA.video.items.length} videos · ` +
  `${DATA.writing.items.length} essays (${DATA.writing.items.map(e => Math.max(1, Math.round(words(e.text.en) / 200)) + 'm').join(', ')})`);

if (!problems.length) {
  console.log('✓ content is consistent');
  process.exit(0);
}
console.log('\n' + problems.length + ' problem' + (problems.length > 1 ? 's' : '') + ':');
problems.forEach(p => console.log('  ✗ ' + p));
process.exit(1);
