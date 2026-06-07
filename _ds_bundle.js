/* @ds-bundle: {"format":3,"namespace":"PocoStudioDesignSystem_17c7c8","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Shape","sourcePath":"components/core/Shape.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"7787bec6e17a","components/core/Button.jsx":"cacd854a52a1","components/core/Card.jsx":"63e3a0ed345c","components/core/IconButton.jsx":"5788c03bb5fd","components/core/Input.jsx":"0c8d594f0b33","components/core/Logo.jsx":"aad32dda6e1c","components/core/Shape.jsx":"2b3dfebcd068","components/core/Tag.jsx":"3788f6fe7297","ui_kits/social_kit/Templates.jsx":"c6ad7ef90964","ui_kits/studio_site/About.jsx":"2eda2cb6e0d4","ui_kits/studio_site/Contact.jsx":"3db2729c0090","ui_kits/studio_site/Hero.jsx":"b74bf9c6af8e","ui_kits/studio_site/Services.jsx":"ef6b6a7052cb","ui_kits/studio_site/SiteFooter.jsx":"a9c1d4718613","ui_kits/studio_site/SiteHeader.jsx":"267ea9f28428","ui_kits/studio_site/Work.jsx":"77d0e01e8d8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PocoStudioDesignSystem_17c7c8 = window.PocoStudioDesignSystem_17c7c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.poco-avatar{
  display:inline-flex; align-items:center; justify-content:center; overflow:hidden;
  border-radius:var(--radius-pill); flex:0 0 auto;
  font-family:var(--font-display); font-weight:var(--fw-bold); color:var(--poco-white);
  background:var(--poco-violet); user-select:none;
}
.poco-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.poco-avatar--apricot{ background:var(--poco-apricot); }
.poco-avatar--pink{ background:var(--poco-pink); color:var(--poco-ink); }
.poco-avatar--ink{ background:var(--poco-ink); }
.poco-avatar--ring{ box-shadow:0 0 0 3px var(--poco-paper), 0 0 0 5px var(--poco-apricot); }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'poco-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96
};
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * Poco avatar — image or initials in a brand-coloured circle, optional accent ring.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  color = 'violet',
  ring = false,
  className = '',
  style = {},
  ...props
}) {
  const px = SIZES[size] || size;
  const cls = ['poco-avatar', `poco-avatar--${color}`, ring ? 'poco-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4,
      ...style
    }
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. */
const CSS = `
.poco-btn{
  --_bg: var(--poco-apricot);
  --_fg: var(--poco-white);
  --_bg-hover: var(--poco-apricot-600);
  --_bg-press: var(--poco-apricot-700);
  font-family: var(--font-display);
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  border:none; cursor:pointer; text-decoration:none;
  border-radius: var(--radius-pill);
  background: var(--_bg); color: var(--_fg);
  transition: background var(--dur-fast) var(--ease-soft),
              transform var(--dur-fast) var(--ease-bounce),
              box-shadow var(--dur-base) var(--ease-soft);
  -webkit-tap-highlight-color: transparent;
  white-space:nowrap; line-height:1;
}
.poco-btn:hover{ background: var(--_bg-hover); }
.poco-btn:active{ background: var(--_bg-press); transform: scale(.97); }
.poco-btn:focus-visible{ outline: 2px solid var(--focus-ring); outline-offset: 3px; }
.poco-btn[disabled]{ opacity:.45; cursor:not-allowed; transform:none; box-shadow:none; }

/* sizes */
.poco-btn--sm{ font-size:15px; padding:9px 18px; }
.poco-btn--md{ font-size:17px; padding:13px 26px; }
.poco-btn--lg{ font-size:20px; padding:17px 34px; }

/* variants */
.poco-btn--pop{ --_bg:var(--poco-violet); --_bg-hover:var(--poco-violet-600); --_bg-press:var(--poco-violet-700); --_fg:var(--poco-white); box-shadow:var(--shadow-pop); }
.poco-btn--pink{ --_bg:var(--poco-pink); --_bg-hover:var(--poco-pink-300); --_bg-press:var(--poco-pink-300); --_fg:var(--poco-ink); }
.poco-btn--outline{ background:transparent; color:var(--poco-ink); box-shadow: inset 0 0 0 2px var(--poco-ink); }
.poco-btn--outline:hover{ background:var(--poco-ink); color:var(--poco-paper); }
.poco-btn--outline:active{ background:var(--poco-ink); }
.poco-btn--ghost{ background:transparent; color:var(--poco-ink); }
.poco-btn--ghost:hover{ background:var(--poco-cloud); }
.poco-btn--ghost:active{ background:var(--poco-mist); }
.poco-btn__arrow{ transition: transform var(--dur-base) var(--ease-soft); }
.poco-btn:hover .poco-btn__arrow{ transform: translateX(3px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-btn-css')) {
  const s = document.createElement('style');
  s.id = 'poco-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  className: "poco-btn__arrow",
  width: "1.1em",
  height: "1.1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));

/**
 * Poco primary button — pill-shaped, League Spartan, playful press.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  as = 'button',
  className = '',
  ...props
}) {
  const Tag = as;
  const cls = ['poco-btn', `poco-btn--${size}`, variant !== 'primary' ? `poco-btn--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, props), children, arrow && /*#__PURE__*/React.createElement(Arrow, null));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.poco-card{
  background:var(--surface-card); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-md); padding:var(--space-6);
  transition: transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft);
  position:relative;
}
.poco-card--pink{ background:var(--poco-pink); }
.poco-card--violet{ background:var(--poco-violet); color:var(--poco-white); }
.poco-card--apricot{ background:var(--poco-apricot); color:var(--poco-white); }
.poco-card--cream{ background:var(--poco-pink-100); box-shadow:none; }
.poco-card--flat{ box-shadow:none; border:1px solid var(--border-subtle); }
.poco-card--interactive{ cursor:pointer; }
.poco-card--interactive:hover{ transform:translateY(-4px); box-shadow:var(--shadow-lg); }
.poco-card--pad-sm{ padding:var(--space-4); }
.poco-card--pad-lg{ padding:var(--space-7); }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-card-css')) {
  const s = document.createElement('style');
  s.id = 'poco-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Poco card — soft, rounded surface that leans on warm shadow, not borders.
 */
function Card({
  children,
  tone = 'default',
  pad = 'md',
  interactive = false,
  className = '',
  ...props
}) {
  const cls = ['poco-card', tone !== 'default' ? `poco-card--${tone}` : '', pad !== 'md' ? `poco-card--pad-${pad}` : '', interactive ? 'poco-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.poco-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:var(--radius-pill); cursor:pointer; border:none; background:transparent;
  color:var(--poco-ink); transition: background var(--dur-fast) var(--ease-soft),
    color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-bounce),
    box-shadow var(--dur-base) var(--ease-soft);
  -webkit-tap-highlight-color:transparent;
}
.poco-iconbtn:active{ transform: scale(.92); }
.poco-iconbtn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:3px; }
.poco-iconbtn[disabled]{ opacity:.45; cursor:not-allowed; transform:none; }
.poco-iconbtn--sm{ width:36px; height:36px; }
.poco-iconbtn--md{ width:46px; height:46px; }
.poco-iconbtn--lg{ width:60px; height:60px; }
.poco-iconbtn--solid{ background:var(--poco-apricot); color:var(--poco-white); }
.poco-iconbtn--solid:hover{ background:var(--poco-apricot-600); }
.poco-iconbtn--pop{ background:var(--poco-violet); color:var(--poco-white); box-shadow:var(--shadow-pop); }
.poco-iconbtn--pop:hover{ background:var(--poco-violet-600); }
.poco-iconbtn--outline{ box-shadow: inset 0 0 0 2px currentColor; }
.poco-iconbtn--outline:hover{ background:var(--poco-ink); color:var(--poco-paper); }
.poco-iconbtn--ghost:hover{ background:var(--poco-cloud); }
/* pill (wide) for the brand's arrow affordance */
.poco-iconbtn--pill.poco-iconbtn--md{ width:auto; height:46px; padding:0 24px; }
.poco-iconbtn--pill.poco-iconbtn--lg{ width:auto; height:60px; padding:0 32px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'poco-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  close: 'M6 6l12 12M18 6L6 18',
  heart: 'M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.5 12 20 12 20z'
};

/**
 * Poco icon button — round (or wide-pill) affordance. The brand's signature
 * outline-pill-with-arrow lives here as variant="outline" shape="pill" icon="arrow".
 */
function IconButton({
  icon = 'arrow',
  children,
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  label,
  className = '',
  ...props
}) {
  const cls = ['poco-iconbtn', `poco-iconbtn--${variant}`, `poco-iconbtn--${size}`, shape === 'pill' ? 'poco-iconbtn--pill' : '', className].filter(Boolean).join(' ');
  const px = {
    sm: 18,
    md: 22,
    lg: 26
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, props), children || /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[icon] || ICONS.arrow
  })));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.poco-field{ display:flex; flex-direction:column; gap:8px; font-family:var(--font-body); }
.poco-field__label{ font-weight:var(--fw-semibold); font-size:14px; color:var(--poco-ink); }
.poco-field__hint{ font-size:13px; color:var(--text-muted); }
.poco-input{
  font-family:var(--font-body); font-size:16px; color:var(--poco-ink);
  background:var(--poco-white); border:1.5px solid var(--border-subtle);
  border-radius:var(--radius-md); padding:13px 16px; width:100%; box-sizing:border-box;
  transition: border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}
.poco-input::placeholder{ color:var(--text-muted); }
.poco-input:hover{ border-color:var(--poco-slate); }
.poco-input:focus{ outline:none; border-color:var(--poco-violet); box-shadow:0 0 0 3px var(--poco-violet-100); }
.poco-input[aria-invalid="true"]{ border-color:var(--poco-apricot); }
.poco-input[aria-invalid="true"]:focus{ box-shadow:0 0 0 3px var(--poco-apricot-100); }
.poco-input:disabled{ opacity:.5; cursor:not-allowed; }
textarea.poco-input{ resize:vertical; min-height:120px; line-height:1.55; }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-input-css')) {
  const s = document.createElement('style');
  s.id = 'poco-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Poco text field — rounded input with violet focus ring; supports label, hint, error, textarea.
 */
function Input({
  label,
  hint,
  error,
  multiline = false,
  id,
  className = '',
  ...props
}) {
  const fid = id || React.useId?.() || 'in' + Math.random().toString(36).slice(2, 7);
  const Tag = multiline ? 'textarea' : 'input';
  const field = /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    className: `poco-input ${className}`.trim(),
    "aria-invalid": error ? 'true' : undefined
  }, props));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("div", {
    className: "poco-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "poco-field__label",
    htmlFor: fid
  }, label), field, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "poco-field__hint",
    style: error ? {
      color: 'var(--poco-apricot-700)'
    } : undefined
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The brand mark: pink-pearl circle with two apricot lens shapes (top + bottom fingertip pads).
   Both lenses are identical; the lower is the upper rotated 180° around the circle centre.
   A thin pink-pearl waist (~8% of diameter) shows through the gap at y 46–54. */
const LENS = 'M 0,23 A 65.8,65.8 0 0 1 100,23 A 65.8,65.8 0 0 1 0,23 Z';
function Mark({
  size = 40,
  circle = 'var(--poco-apricot)',
  lens = 'var(--poco-pink)'
}) {
  const id = React.useId ? React.useId().replace(/:/g, '') : 'pm' + Math.random().toString(36).slice(2, 7);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: id
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "50"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${id})`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: circle
  }), /*#__PURE__*/React.createElement("path", {
    d: LENS,
    fill: lens
  }), /*#__PURE__*/React.createElement("path", {
    d: LENS,
    fill: lens,
    transform: "rotate(180,50,50)"
  })));
}
const SCHEMES = {
  primary: {
    circle: 'var(--poco-pink)',
    lens: 'var(--poco-apricot)',
    word: 'var(--poco-ink)'
  },
  violet: {
    circle: 'var(--poco-violet)',
    lens: 'var(--poco-pink)',
    word: 'var(--poco-white)'
  },
  onDark: {
    circle: 'var(--poco-paper)',
    lens: 'var(--poco-apricot)',
    word: 'var(--poco-white)'
  }
};

/**
 * Poco Studio logo — brand mark, optional "poco.studio" wordmark in League Spartan.
 */
function Logo({
  variant = 'full',
  scheme = 'primary',
  size = 40,
  className = '',
  style = {},
  ...props
}) {
  const s = SCHEMES[scheme] || SCHEMES.primary;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `poco-logo ${className}`.trim(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32,
      ...style
    }
  }, props), variant !== 'wordmark' && /*#__PURE__*/React.createElement(Mark, {
    size: size,
    circle: s.circle,
    lens: s.lens
  }), variant !== 'mark' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: s.word,
      fontSize: size * 0.82,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "poco", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--poco-apricot)'
    }
  }, "."), "studio"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Shape.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const C = {
  apricot: 'var(--poco-apricot)',
  pink: 'var(--poco-pink)',
  violet: 'var(--poco-violet)',
  cream: 'var(--poco-paper)',
  ink: 'var(--poco-ink)',
  white: '#fff'
};

/**
 * Poco brand shape — the lens (vesica) or circle motif, as inline SVG.
 * Recolourable, rotatable graphic punctuation.
 */
function Shape({
  shape = 'lens',
  color = 'apricot',
  size = 64,
  rotate = 0,
  className = '',
  style = {},
  ...props
}) {
  const fill = C[color] || color;
  const common = {
    className: `poco-shape ${className}`.trim(),
    style: {
      display: 'inline-block',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    },
    ...props
  };
  if (shape === 'circle') {
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 100 100"
    }, common, {
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "50",
      fill: fill
    }));
  }
  // lens (vesica). Default ratio ~2.04:1 like the manual.
  const h = Math.round(size * 0.49);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: h,
    viewBox: "0 0 844 414",
    preserveAspectRatio: "none"
  }, common, {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 207 A533.6 533.6 0 0 1 842 207 A533.6 533.6 0 0 1 2 207 Z",
    fill: fill
  }));
}
Object.assign(__ds_scope, { Shape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Shape.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.poco-tag{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  font-size:14px; line-height:1; color:var(--poco-ink);
  background:var(--poco-white); border:1px solid var(--border-subtle);
  border-radius:var(--radius-pill); padding:8px 14px;
}
.poco-tag--pink{ background:var(--poco-pink); border-color:transparent; color:var(--poco-ink); }
.poco-tag--apricot{ background:var(--poco-apricot); border-color:transparent; color:var(--poco-white); }
.poco-tag--violet{ background:var(--poco-violet); border-color:transparent; color:var(--poco-white); }
.poco-tag--cream{ background:var(--poco-pink-100); border-color:transparent; color:var(--poco-ink); }
`;
if (typeof document !== 'undefined' && !document.getElementById('poco-tag-css')) {
  const s = document.createElement('style');
  s.id = 'poco-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const BULLET = {
  pink: 'apricot',
  apricot: 'pink',
  violet: 'pink',
  cream: 'apricot',
  plain: 'apricot'
};

/**
 * Poco tag / chip — a pill label, optionally prefixed with a lens bullet.
 */
function Tag({
  children,
  color = 'plain',
  bullet = false,
  className = '',
  ...props
}) {
  const cls = ['poco-tag', color !== 'plain' ? `poco-tag--${color}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), bullet && /*#__PURE__*/React.createElement(__ds_scope.Shape, {
    shape: "lens",
    color: BULLET[color] || 'apricot',
    size: 16
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/Templates.jsx
try { (() => {
const {
  Logo,
  Shape,
  Tag
} = window.PocoStudioDesignSystem_17c7c8;

/* All templates render at native size inside a 1080-base square / 1080x1920 story.
   The gallery scales them down with CSS transform. */

const display = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  letterSpacing: '-0.025em',
  lineHeight: 0.95,
  margin: 0
};
const body = {
  fontFamily: 'var(--font-body)',
  margin: 0
};

/* 1 — Statement / quote post (violet) */
function PostQuote() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--poco-violet)',
      position: 'relative',
      overflow: 'hidden',
      padding: 90,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      right: -60
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "apricot",
    size: 340
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -120,
      left: -40
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "pink",
    size: 420,
    rotate: -16
  })), /*#__PURE__*/React.createElement(Logo, {
    scheme: "onDark",
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...display,
      color: '#fff',
      fontSize: 104,
      position: 'relative'
    }
  }, "d\u011Blej m\xED\u0148,", /*#__PURE__*/React.createElement("br", null), "ale s ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--poco-apricot)'
    }
  }, "l\xE1skou."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      color: 'var(--poco-pink)',
      fontSize: 34,
      fontWeight: 600,
      position: 'relative'
    }
  }, "@poco.studio"));
}

/* 2 — Service announcement (pink) */
function PostService() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--poco-pink)',
      position: 'relative',
      overflow: 'hidden',
      padding: 90,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 120,
      right: -120
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "violet",
    size: 520,
    rotate: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...body,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--poco-ink)'
    }
  }, "nov\xE1 slu\u017Eba")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "apricot",
    size: 120
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...display,
      color: 'var(--poco-ink)',
      fontSize: 120,
      marginTop: 30
    }
  }, "soci\xE1ln\xED", /*#__PURE__*/React.createElement("br", null), "s\xEDt\u011B"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      color: 'var(--poco-ink)',
      fontSize: 38,
      lineHeight: 1.5,
      marginTop: 36,
      maxWidth: 720,
      fontWeight: 500
    }
  }, "obsah, kter\xFD si lidi cht\u011Bj\xED ulo\u017Eit a poslat d\xE1l. ozvi se n\xE1m \u2197")));
}

/* 3 — Carousel cover (apricot) */
function PostCarousel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--poco-apricot)',
      position: 'relative',
      overflow: 'hidden',
      padding: 90,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      left: -60
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "pink",
    size: 300
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 80,
      right: 90
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "violet",
    size: 120
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...body,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: '#fff',
      position: 'relative'
    }
  }, "/ 5 tip\u016F"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...display,
      color: '#fff',
      fontSize: 132,
      marginTop: 24,
      position: 'relative'
    }
  }, "jak r\u016Fst", /*#__PURE__*/React.createElement("br", null), "na netu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...body,
      color: '#fff',
      fontSize: 34,
      fontWeight: 600
    }
  }, "swipni d\xE1l"), /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "pink",
    size: 70
  })));
}

/* 4 — Story template (vertical 1080x1920, cream) */
function StoryTemplate() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      background: 'var(--poco-paper)',
      position: 'relative',
      overflow: 'hidden',
      padding: 90,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      right: -80
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "apricot",
    size: 520,
    rotate: -20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -140,
      left: -60
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "pink",
    size: 460
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 60
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "violet",
    bullet: true
  }, "eventy"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...display,
      color: 'var(--poco-ink)',
      fontSize: 130,
      marginTop: 30
    }
  }, "launch", /*#__PURE__*/React.createElement("br", null), "p\xE1rty"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      color: 'var(--text-body)',
      fontSize: 42,
      lineHeight: 1.5,
      marginTop: 36,
      maxWidth: 760
    }
  }, "\u010Dtvrtek 19:00 \xB7 st\u0159echa Lucerny", /*#__PURE__*/React.createElement("br", null), "p\u0159ij\u010F, bude to z\xE1\u017Eitek.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      background: 'var(--poco-violet)',
      color: '#fff',
      borderRadius: 999,
      padding: '34px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40
    }
  }, "\u0165ukni pro v\xEDc \u2197"));
}
Object.assign(window, {
  PostQuote,
  PostService,
  PostCarousel,
  StoryTemplate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/Templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/About.jsx
try { (() => {
const {
  Avatar,
  Shape
} = window.PocoStudioDesignSystem_17c7c8;
const RULES = [{
  a: 'Autenticita',
  b: 'trendy'
}, {
  a: 'Dopad',
  b: 'dosah'
}, {
  a: 'Kvalita',
  b: 'kvantita'
}];
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "onas",
    style: {
      background: 'var(--poco-paper)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-apricot)',
      margin: '0 0 20px'
    }
  }, "/ kdo jsme"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Julie",
    color: "apricot",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: -16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Lucie",
    color: "violet",
    size: "xl",
    ring: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 20,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, "Julie & Lucie")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4.5vw,48px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.02,
      margin: '0 0 22px',
      color: 'var(--poco-ink)',
      maxWidth: 720
    }
  }, "dv\u011B kreativn\xED holky, co se na\u0161ly v tom, co jim jde nejv\xEDc"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 640,
      margin: '0 0 16px'
    }
  }, "Pracujeme jen na projektech, kter\xE9 n\xE1m d\xE1vaj\xED smysl. Tvo\u0159\xEDme socky a eventy s du\u0161\xED \u2014 a na\u0161e nejd\u016Fle\u017Eit\u011Bj\u0161\xED schopnost je naslouch\xE1n\xED."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 640,
      margin: 0
    }
  }, "Jsme r\xE1dy, kdy\u017E sd\xEDl\xEDte p\u0159edstavy \u2014 my z nich pak kouzl\xEDme n\xE1vrhy."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      borderLeft: '3px solid var(--poco-apricot)',
      paddingLeft: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,32px)',
      color: 'var(--poco-ink)',
      margin: 0,
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    }
  }, "Poco od v\xE1s, poco od n\xE1s."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, "\u0160petku od v\xE1s, \u0161petku od n\xE1s \u2014 tak vznikaj\xED v\u011Bci s du\u0161\xED."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-violet)',
      margin: '0 0 20px'
    }
  }, "/ na\u0161e 3 pravidla"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, RULES.map(({
    a,
    b
  }) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      flex: 1,
      minWidth: 200,
      background: 'var(--poco-pink)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "apricot",
    size: 24,
    rotate: -10
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--poco-ink)',
      letterSpacing: '-0.02em'
    }
  }, a)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingLeft: 34
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--poco-violet)',
      opacity: 0.7
    }
  }, "nad"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-body)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--poco-apricot)'
    }
  }, b))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Contact.jsx
try { (() => {
const {
  Input,
  Button,
  Shape
} = window.PocoStudioDesignSystem_17c7c8;
const {
  useState
} = React;
function Contact() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    style: {
      position: 'relative',
      background: 'var(--poco-violet)',
      overflow: 'hidden',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -60,
      left: -40
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "apricot",
    size: 200
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 30,
      right: 60
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "pink",
    size: 160,
    rotate: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 620,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-pink)',
      margin: '0 0 14px',
      textAlign: 'center'
    }
  }, "/ ozvi se"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,5vw,52px)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      margin: '0 0 14px',
      color: '#fff',
      textAlign: 'center'
    }
  }, "poj\u010Fme tvo\u0159it spolu"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.9)',
      margin: '0 0 36px',
      textAlign: 'center'
    }
  }, "Napi\u0161 n\xE1m p\xE1r v\u011Bt o tom, co chyst\xE1\u0161. Ozveme se ti do 24 hodin."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--poco-white)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 32px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "apricot",
    size: 64
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      margin: '14px 0 8px',
      color: 'var(--poco-ink)'
    }
  }, "d\xEDky! m\xE1me to."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Brzy se ti ozveme. Zat\xEDm se m\u011Bj kr\xE1sn\u011B. \u2661")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--poco-white)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Jak se jmenuje\u0161?",
    placeholder: "tvoje jm\xE9no",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "ahoj@firma.cz",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "O co jde?",
    multiline: true,
    placeholder: "napi\u0161 n\xE1m p\xE1r v\u011Bt\u2026",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    arrow: true
  }, "odeslat"))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Hero.jsx
try { (() => {
const {
  Button,
  Shape
} = window.PocoStudioDesignSystem_17c7c8;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      background: 'var(--poco-violet)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -40,
      right: -30
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "circle",
    color: "apricot",
    size: 220
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -70,
      right: 180
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "pink",
    size: 260,
    rotate: -18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 120,
      left: -50
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: "apricot",
    size: 170,
    rotate: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 980,
      margin: '0 auto',
      padding: '110px 32px 120px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--poco-pink)',
      margin: '0 0 22px'
    }
  }, "/ kreativn\xED studio \xB7 experience marketing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff',
      margin: 0,
      fontSize: 'clamp(44px, 8vw, 96px)',
      lineHeight: 0.94,
      letterSpacing: '-0.025em'
    }
  }, "postar\xE1me se", /*#__PURE__*/React.createElement("br", null), "o celou cestu", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--poco-apricot)'
    }
  }, "va\u0161eho z\xE1kazn\xEDka.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.9)',
      maxWidth: 580,
      margin: '28px 0 14px'
    }
  }, "Od vybudov\xE1n\xED brandu a nabr\xE1n\xED sleduj\xEDc\xEDch p\u0159es akvizici z\xE1kazn\xEDk\u016F a\u017E po eventy, kter\xE9 se zaryjou do pam\u011Bti."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--poco-apricot)',
      margin: '0 0 38px',
      letterSpacing: '-0.01em'
    }
  }, "\u0160petku od v\xE1s, \u0161petku od n\xE1s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    as: "a",
    href: "#kontakt"
  }, "poj\u010Fme do toho"), /*#__PURE__*/React.createElement(Button, {
    variant: "pink",
    size: "lg",
    as: "a",
    href: "#sluzby"
  }, "co d\u011Bl\xE1me"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Services.jsx
try { (() => {
const {
  Card,
  Shape,
  IconButton
} = window.PocoStudioDesignSystem_17c7c8;
const SERVICES = [{
  id: 'brand',
  tone: 'pink',
  shape: 'apricot',
  title: 'brand & sociální sítě',
  body: 'Vybudujeme vám značku od základů — vizuální identitu, hlas i komunitu. Tvoříme obsah, který si lidi chtějí uložit a poslat dál.',
  items: ['strategie & brand concept', 'tvorba obsahu na míru', 'správa sítí & komunity', 'spolupráce s tvůrci']
}, {
  id: 'events',
  tone: 'apricot',
  shape: 'pink',
  title: 'eventy & zážitky',
  body: 'Zážitky, na které se nezapomíná. Postaráme se o celý příběh — od prvního nápadu po poslední detail přímo na místě.',
  items: ['kreativní koncept eventu', 'produkce na klíč', 'launch, pop-up & brand akce', 'dosah & reportování']
}];
const FOR_WHOM = [{
  label: 'Kavárny & restaurace',
  icon: '☕'
}, {
  label: 'Vinařství & degustace',
  icon: '🍷'
}, {
  label: 'Salóny & wellness',
  icon: '✨'
}, {
  label: 'Cestovky & průvodci',
  icon: '🗺'
}, {
  label: 'Ubytování & hospitality',
  icon: '🏡'
}];
function ServiceCard({
  s
}) {
  const onDark = s.tone === 'apricot';
  return /*#__PURE__*/React.createElement(Card, {
    tone: s.tone,
    pad: "lg",
    interactive: true,
    style: {
      flex: 1,
      minWidth: 280,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: s.shape,
    size: 64
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow",
    variant: "outline",
    label: "více – " + s.title,
    style: onDark ? {
      color: '#fff'
    } : undefined
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      letterSpacing: '-0.02em',
      margin: '0 0 10px',
      color: onDark ? '#fff' : 'var(--poco-ink)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      margin: '0 0 18px',
      color: onDark ? 'rgba(255,255,255,0.92)' : 'var(--text-body)'
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: onDark ? '#fff' : 'var(--poco-ink)'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: "lens",
    color: onDark ? 'cream' : 'violet',
    size: 16
  }), " ", it))));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sluzby",
    style: {
      background: 'var(--poco-paper)',
      padding: '96px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-apricot)',
      margin: '0 0 14px'
    }
  }, "/ co d\u011Bl\xE1me"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,5vw,52px)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      margin: '0 0 12px',
      color: 'var(--poco-ink)',
      maxWidth: 640
    }
  }, "komplexn\xED bal\xED\u010Dek"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 560,
      margin: '0 0 40px'
    }
  }, "Ne\u0159e\u0161\xEDme jen jeden kus skl\xE1da\u010Dky. Postar\xE1me se o celou cestu va\u0161eho z\xE1kazn\xEDka \u2014 od prvn\xEDho dojmu po v\u011Brn\xFD fanclub."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 56
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    s: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-violet)',
      margin: '0 0 20px'
    }
  }, "/ pro koho tvo\u0159\xEDme"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 500,
      margin: '0 0 28px'
    }
  }, "Projekty bl\xEDzk\xE9 na\u0161emu srdci \u2014 hlavn\u011B m\xEDsta a lidi, kte\u0159\xED stav\xED na z\xE1\u017Eitku."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, FOR_WHOM.map(({
    label,
    icon
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--poco-white)',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--poco-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, icon), " ", label))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/SiteFooter.jsx
try { (() => {
const {
  Logo
} = window.PocoStudioDesignSystem_17c7c8;
function SiteFooter() {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--poco-slate)'
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      textDecoration: 'none'
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--poco-ink)',
      color: '#fff',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    scheme: "onDark",
    size: 34
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 18
    }
  }, "kreativn\xED studio se specializac\xED na experience marketing. dv\u011B holky, co to mysl\xED v\xE1\u017En\u011B (a s l\xE1skou).")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, col('studio', ['o nás', 'práce', 'služby']), col('sledujte', ['instagram', 'tiktok', 'linkedin']), col('napiš', ['ahoj@poco.studio', '+420 777 000 000']))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 poco.studio \xB7 vyrobeno s \u2661 v Praze"), /*#__PURE__*/React.createElement("span", null, "z\xE1sady soukrom\xED \xB7 cookies"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/SiteHeader.jsx
try { (() => {
const {
  Logo,
  Button
} = window.PocoStudioDesignSystem_17c7c8;
function SiteHeader({
  onNav
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav?.(id);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--poco-ink)',
      textDecoration: 'none'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(8px)',
      background: 'rgba(255,248,243,0.82)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav?.('top');
    },
    style: {
      marginRight: 'auto',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    },
    className: "poco-nav"
  }, link('sluzby', 'služby'), link('prace', 'práce'), link('onas', 'o nás')), /*#__PURE__*/React.createElement(Button, {
    variant: "pop",
    size: "sm",
    arrow: true,
    onClick: () => onNav?.('kontakt')
  }, "ozvi se")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Work.jsx
try { (() => {
const {
  Tag,
  Shape
} = window.PocoStudioDesignSystem_17c7c8;
const {
  useState
} = React;
const WORK = [{
  id: 1,
  client: 'Kafkafé',
  title: 'komunita kolem kávy',
  cat: 'social',
  bg: 'var(--poco-violet)',
  shape: ['lens', 'pink']
}, {
  id: 2,
  client: 'Vinařství Hora',
  title: 'degustační evening',
  cat: 'events',
  bg: 'var(--poco-apricot)',
  shape: ['circle', 'pink']
}, {
  id: 3,
  client: 'Studio Bloom',
  title: 'reels, co se sdílí',
  cat: 'social',
  bg: 'var(--poco-pink)',
  shape: ['lens', 'violet']
}, {
  id: 4,
  client: 'Nomad Trips',
  title: 'launch cestovní série',
  cat: 'events',
  bg: 'var(--poco-ink)',
  shape: ['lens', 'apricot']
}, {
  id: 5,
  client: 'Atelier Vela',
  title: 'brand & obsah salónu',
  cat: 'social',
  bg: 'var(--poco-apricot)',
  shape: ['circle', 'violet']
}, {
  id: 6,
  client: 'Penzion Na Kopci',
  title: 'zážitkový víkend',
  cat: 'events',
  bg: 'var(--poco-violet)',
  shape: ['lens', 'apricot']
}];
const CATS = [{
  id: 'all',
  label: 'vše'
}, {
  id: 'social',
  label: 'sociální sítě'
}, {
  id: 'events',
  label: 'eventy'
}];
function Tile({
  w
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#prace",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: 'none',
      display: 'block',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--poco-white)',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: w.bg,
      height: 180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Shape, {
    shape: w.shape[0],
    color: w.shape[1],
    size: w.shape[0] === 'circle' ? 120 : 160,
    rotate: w.shape[0] === 'lens' ? -10 : 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, w.client), /*#__PURE__*/React.createElement(Tag, {
    color: "cream"
  }, w.cat === 'social' ? 'sociální sítě' : 'eventy')), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.015em',
      margin: 0,
      color: 'var(--poco-ink)'
    }
  }, w.title)));
}
function Work() {
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? WORK : WORK.filter(w => w.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "prace",
    style: {
      background: 'var(--poco-pink-100)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--poco-violet)',
      margin: '0 0 14px'
    }
  }, "/ na\u0161e pr\xE1ce"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,5vw,52px)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      margin: 0,
      color: 'var(--poco-ink)'
    }
  }, "v\u011Bci, na kter\xE9 jsme hrd\xE9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      transition: 'all .15s',
      whiteSpace: 'nowrap',
      background: cat === c.id ? 'var(--poco-ink)' : 'transparent',
      color: cat === c.id ? 'var(--poco-paper)' : 'var(--poco-ink)',
      boxShadow: cat === c.id ? 'none' : 'inset 0 0 0 1.5px var(--border-subtle)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 24
    }
  }, list.map(w => /*#__PURE__*/React.createElement(Tile, {
    key: w.id,
    w: w
  })))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Shape = __ds_scope.Shape;

__ds_ns.Tag = __ds_scope.Tag;

})();
