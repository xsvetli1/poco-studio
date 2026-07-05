# Studio Site — UI kit

A single-page **marketing website** for poco.studio: the studio's own shop window. It composes the core components into full sections and is interactive (smooth-scroll nav, work filter, working contact form with a thank-you state).

Open `index.html`. Load order: React → ReactDOM → Babel → `_ds_bundle.js` → the section `.jsx` files → the mount script. Primitives come from `window.PocoStudioDesignSystem_17c7c8`; each section file exposes itself on `window`.

## Sections
- `SiteHeader.jsx` — sticky blurred header: logo, nav, violet "ozvi se" CTA.
- `Hero.jsx` — full-bleed violet hero, huge lowercase headline, floating shapes, two CTAs.
- `Services.jsx` — the two service lines as pink/apricot cards (*sociální sítě*, *eventy*) with lens bullets + arrow.
- `Work.jsx` — filterable project grid (vše / sociální sítě / eventy); shape-cover tiles that lift on hover.
- `About.jsx` — the two founders (overlapping ringed avatars), warm story copy, stat cards.
- `Contact.jsx` — violet contact section with a working form → thank-you state.
- `SiteFooter.jsx` — ink footer: logo, link columns, fine print.

## Notes
- Imagery is intentionally **shape-based** (brand lens/circle on colour fields) — swap in real photography when available.
- All copy is Czech and in the brand voice (lowercase, warm, "we" → "you").
