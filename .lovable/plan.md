## Goal
Match the hero logo treatment: "ONE" and "40" appear the same visual height, and "vue" stays smaller + italic. In the current Cormorant Garamond serif, the digits "40" render visibly shorter than the caps "ONE", which is what you're seeing. Fix: bump the "40" up by ~1.35–1.45em so its glyph height matches the cap height of "ONE".

## Scope
Edits to `src/routes/index.tsx` only. Three places:

1. **Nav wordmark** (top-left of header)
2. **Footer wordmark** (bottom ribbon)
3. **Contact heading** — "Join us at ONE40vue"

Hero logo image is untouched (it's already correct and is the reference).

## Change pattern
Replace each occurrence of:
```
<span>ONE40</span><span class="italic …">vue</span>
```
with a three-span structure:
```
<span>ONE</span>
<span class="text-[1.4em] leading-none align-baseline">40</span>
<span class="italic …">vue</span>
```

- `text-[1.4em]` scales the "40" relative to its parent so it works at every breakpoint (Nav `text-lg md:text-xl`, Footer `text-sm md:text-base`, Contact `text-5xl md:text-7xl`).
- `leading-none` prevents the larger digits from pushing line-height and creating a vertical jump.
- `align-baseline` (default) keeps all three spans sitting on the same baseline so "ONE", "40", and "vue" line up cleanly.
- "vue" keeps its existing italic + accent color (gold in nav/contact, clay in footer) and inherits the parent size — unchanged.

If 1.4em looks slightly off after building, a one-line tweak to 1.35em or 1.45em is the only follow-up — no structural change.

## Specific edits

**Nav** (`Nav` component, the `<a href="#top">` wordmark):
- From: `<span>ONE40</span><span className="italic text-gold">vue</span>`
- To: `<span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-gold">vue</span>`

**Footer** (`Footer` component, ribbon wordmark):
- From: `<span>ONE40</span><span className="italic text-clay">vue</span>`
- To: `<span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-clay">vue</span>`

**Contact** (`Contact` component, the `<h2>` "Join us at ONE40vue"):
- From: `Join us at <span className="italic text-gold">ONE40vue</span>`
- To: `Join us at <span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-gold">vue</span>`
- Note: only "vue" stays italic + gold; "ONE" and "40" inherit the heading's cream color (matching the rest of the line "Join us at"). If you'd rather the whole wordmark stay gold, say the word and I'll wrap all three spans in a `text-gold` parent.

## Out of scope
Hero logo image, all other copy, colors, fonts, padding, routing, menu data.

## Verification
View at the current 1220px desktop and at 390px mobile to confirm: in all three locations "ONE" and "40" read as the same height, "vue" stays smaller and italic, and no line-height jump appears in the Nav/Footer rows.