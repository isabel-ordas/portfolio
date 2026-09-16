/* @ds-bundle: {"format":4,"namespace":"IsabelBrandSystem_b8d40d","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"de47f8dff75a","components/brand/Logo.jsx":"98c03a13369d","components/content/ProjectCard.jsx":"74cb0792a46c","components/content/PullQuote.jsx":"445a8e327740","components/core/Button.jsx":"f82ae5742bf5","components/core/Divider.jsx":"f89303bac02e","components/core/Tag.jsx":"a5302fc995d3","components/data/BarChart.jsx":"ac33ff9883c4","components/data/LineChart.jsx":"7a28b78ba4be","doc-page.js":"f52ae9c02fca","slides/Slides.jsx":"c00d6cf4f14e","ui_kits/portfolio/About.jsx":"47520bcdd721","ui_kits/portfolio/CaseStudy.jsx":"d2b79fd9c8a7","ui_kits/portfolio/Chrome.jsx":"4f59b71eb0d8","ui_kits/portfolio/Home.jsx":"71826d9cd54a"},"inlinedExternals":[],"unexposedExports":[{"name":"iconUrl","sourcePath":"components/brand/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.IsabelBrandSystem_b8d40d = window.IsabelBrandSystem_b8d40d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Resolve where the icon SVGs live. Set window.__dsIconBase once per page
 * (e.g. '../../assets/icons/') when the page is not at the project root.
 */
function iconUrl(name) {
  const base = typeof window !== 'undefined' && window.__dsIconBase || './assets/icons/';
  return base + name + '.svg';
}
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};

/* Inlined SVG source is cached per URL so each glyph is fetched once. */
const CACHE = typeof window !== 'undefined' ? window.__dsIconCache = window.__dsIconCache || {
  markup: {},
  pending: {}
} : {
  markup: {},
  pending: {}
};
function useIconMarkup(url) {
  const [markup, setMarkup] = React.useState(() => CACHE.markup[url] || null);
  React.useEffect(() => {
    if (CACHE.markup[url]) {
      setMarkup(CACHE.markup[url]);
      return;
    }
    let live = true;
    const req = CACHE.pending[url] || (CACHE.pending[url] = fetch(url).then(r => r.ok ? r.text() : '').then(t => {
      // Strip the fixed width/height so the wrapper controls the size.
      const cleaned = t.replace(/<svg([^>]*)>/, (m, attrs) => '<svg' + attrs.replace(/\s(width|height)="[^"]*"/g, '') + ' width="100%" height="100%">');
      CACHE.markup[url] = cleaned;
      return cleaned;
    }).catch(() => ''));
    req.then(t => {
      if (live) setMarkup(t);
    });
    return () => {
      live = false;
    };
  }, [url]);
  return markup;
}
function Icon({
  name,
  size = 24,
  active = false,
  accent = 'green',
  color,
  title,
  style,
  ...rest
}) {
  const url = iconUrl(name);
  const markup = useIconMarkup(url);
  const tint = color || (active ? ACCENTS[accent] : 'currentColor');
  const box = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    flex: '0 0 auto',
    color: tint,
    transition: 'var(--transition-color)',
    ...style
  };
  if (markup) {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      role: title ? 'img' : undefined,
      "aria-label": title,
      "aria-hidden": title ? undefined : 'true',
      style: box,
      dangerouslySetInnerHTML: {
        __html: markup
      }
    }));
  }
  /* Until the source arrives, an <img> renders correctly everywhere (including
     DOM-rerender capture pipelines); it just can't take the accent tint. */
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : 'true',
    style: box
  }), /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "",
    width: size,
    height: size,
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }));
}
Object.assign(__ds_scope, { iconUrl, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FULL = ['var(--accent-green)', 'var(--accent-yellow)', 'var(--accent-blue)', 'var(--accent-brown)'];

/**
 * The mark: 2×2 grid of two squares (green–brown diagonal) and two circles (yellow–blue),
 * gap = 1/10 of a shape's width, always inside a perfect square. Minimum 32px on screen.
 */
function Logo({
  variant = 'full',
  size = 48,
  wordmark = false,
  subtitle,
  style,
  ...rest
}) {
  const px = Math.max(32, size);
  const colors = variant === 'full' ? FULL : [null, null, null, null].map(() => variant === 'white' ? 'var(--paper-white)' : 'var(--ink-black)');
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 21 21",
    width: px,
    height: px,
    role: "img",
    "aria-label": "Isabel",
    style: {
      display: 'block',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "10",
    height: "10",
    fill: colors[0]
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "5",
    r: "5",
    fill: colors[1]
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "16",
    r: "5",
    fill: colors[2]
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "10",
    height: "10",
    fill: colors[3]
  }));
  if (!wordmark) return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-block',
      ...style
    }
  }), mark);
  const ink = variant === 'white' ? 'var(--paper-white)' : 'var(--ink-black)';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-semibold) ${Math.round(px * 0.5)}px/1.05 var(--font-display)`,
      letterSpacing: 'var(--tracking-heading)',
      color: ink
    }
  }, "Isabel"), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: ink,
      opacity: variant === 'white' ? 0.8 : 0.72
    }
  }, subtitle) : null));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};
function PullQuote({
  children,
  attribution,
  accent,
  size = 'md',
  style,
  ...rest
}) {
  const font = size === 'lg' ? 'var(--text-h1)' : 'var(--text-h2)';
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: 'flex',
      gap: 'var(--space-3)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 2,
      background: accent ? ACCENTS[accent] : 'var(--ink-black)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font,
      letterSpacing: 'var(--tracking-heading)',
      textWrap: 'pretty'
    }
  }, "\u201C", children, "\u201D"), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, attribution) : null));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: ['var(--accent-green)', 'var(--accent-green-hover)', 'var(--text-inverse)'],
  yellow: ['var(--accent-yellow)', 'var(--accent-yellow-hover)', 'var(--text-on-yellow)'],
  blue: ['var(--accent-blue)', 'var(--accent-blue-hover)', 'var(--text-inverse)'],
  brown: ['var(--accent-brown)', 'var(--accent-brown-hover)', 'var(--text-inverse)'],
  black: ['var(--ink-black)', 'var(--gray-900)', 'var(--text-inverse)']
};
const SIZES = {
  sm: {
    padding: '8px 16px',
    font: 'var(--text-caption)',
    gap: 8,
    icon: 16
  },
  md: {
    padding: '16px 24px',
    font: 'var(--text-label)',
    gap: 8,
    icon: 20
  },
  lg: {
    padding: '16px 32px',
    font: 'var(--weight-medium) var(--size-body)/1.2 var(--font-body)',
    gap: 16,
    icon: 24
  }
};
function Button({
  children,
  variant = 'primary',
  accent = 'black',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const [fill, fillHover, on] = ACCENTS[accent] || ACCENTS.black;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    font: s.font,
    letterSpacing: size === 'sm' ? 'var(--tracking-caption)' : 'var(--tracking-body)',
    textTransform: size === 'sm' ? 'uppercase' : 'none',
    borderRadius: 'var(--radius-none)',
    boxShadow: 'var(--shadow-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 'var(--disabled-opacity)' : 1,
    transition: 'var(--transition-color)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? fillHover : fill,
      color: on,
      border: '1px solid transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--ink-black)' : 'transparent',
      color: hover && !disabled ? 'var(--text-inverse)' : 'var(--text-body)',
      border: 'var(--border-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? fill : 'var(--text-body)',
      border: '1px solid transparent',
      padding: size === 'sm' ? '4px 0' : '8px 0'
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href && !disabled ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }), icon && iconPosition === 'left' ? /*#__PURE__*/React.createElement(IconSlot, {
    name: icon,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? /*#__PURE__*/React.createElement(IconSlot, {
    name: icon,
    size: s.icon
  }) : null);
}
function IconSlot({
  name,
  size
}) {
  if (typeof name !== 'string') return name;
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};
function Divider({
  variant = 'hairline',
  accent,
  width = 64,
  spacing = 'var(--space-3)',
  style,
  ...rest
}) {
  if (variant === 'rule') {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      role: "separator",
      style: {
        width,
        height: 2,
        background: accent ? ACCENTS[accent] : 'var(--ink-black)',
        margin: `${spacing} 0`,
        ...style
      }
    }));
  }
  if (variant === 'marker') {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: `${spacing} 0`,
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: accent ? ACCENTS[accent] : 'var(--ink-black)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 'var(--radius-circle)',
        background: accent ? ACCENTS[accent] : 'var(--ink-black)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        borderTop: 'var(--border-subtle)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "separator",
    style: {
      borderTop: 'var(--border-subtle)',
      margin: `${spacing} 0`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};
function Tag({
  children,
  accent,
  active = false,
  as = 'span',
  style,
  ...rest
}) {
  const Tag_ = as;
  const color = DOTS[accent];
  return /*#__PURE__*/React.createElement(Tag_, _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      border: active ? '1px solid var(--ink-black)' : 'var(--border-subtle)',
      background: active ? 'var(--ink-black)' : 'transparent',
      color: active ? 'var(--text-inverse)' : 'var(--text-body)',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-none)',
      transition: 'var(--transition-color)',
      ...style
    }
  }), color ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-circle)',
      background: color,
      flex: '0 0 auto'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};
function ProjectCard({
  eyebrow = 'Case study',
  title,
  description,
  tags = [],
  accent = 'green',
  image,
  imageAlt = '',
  href,
  cta = 'View project',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const line = ACCENTS[accent] || ACCENTS.green;
  const Root = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Root, _extends({}, rest, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-none)',
      textDecoration: 'none',
      color: 'var(--text-body)',
      transition: 'var(--transition-color)',
      cursor: href || onClick ? 'pointer' : 'default',
      boxSizing: 'border-box',
      ...style
    }
  }), image ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: 'var(--border-hairline)',
      background: 'var(--gray-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      filter: 'grayscale(1)'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      background: line
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-paragraph)',
      color: 'var(--text-muted)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 'var(--space-1)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))) : null, cta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 'var(--space-1)',
      font: 'var(--text-label)',
      color: hover ? line : 'var(--text-body)',
      transition: 'var(--transition-color)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? 'translateX(4px)' : 'none',
      transition: `transform var(--duration-base) var(--ease-standard)`
    }
  })) : null));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};

/**
 * Grayscale bars, sharp corners, one highlighted bar carrying the takeaway.
 */
function BarChart({
  data = [],
  highlightIndex = -1,
  accent = 'green',
  height = 220,
  valueFormat = v => String(v),
  showValues = true,
  gridLines = 4,
  style,
  ...rest
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  const hi = ACCENTS[accent] || ACCENTS.green;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-2)'
    }
  }, Array.from({
    length: gridLines
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: `${(i + 1) / gridLines * 100}%`,
      borderTop: '1px solid var(--chart-gridline)'
    }
  })), data.map((d, i) => {
    const on = i === highlightIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: d.label,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        gap: 8,
        position: 'relative',
        height: '100%'
      }
    }, showValues ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-caption)',
        color: on ? hi : 'var(--text-muted)',
        textAlign: 'center'
      }
    }, valueFormat(d.value)) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: `${d.value / max * 100}%`,
        background: on ? hi : 'var(--chart-series)',
        borderRadius: 'var(--radius-none)',
        transition: `height var(--duration-slow) var(--ease-out)`
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      borderTop: '1px solid var(--ink-black)',
      paddingTop: 8
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: d.label,
    style: {
      flex: 1,
      font: 'var(--text-caption)',
      textAlign: 'center',
      color: i === highlightIndex ? 'var(--text-body)' : 'var(--text-muted)'
    }
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};

/**
 * Grayscale line series plus one accent series. SVG, sharp joins, no fills or shadows.
 */
function LineChart({
  series = [],
  labels = [],
  accent = 'blue',
  height = 220,
  gridLines = 4,
  showDots = true,
  style,
  ...rest
}) {
  const W = 640;
  const H = height;
  const pad = {
    t: 8,
    r: 8,
    b: 24,
    l: 8
  };
  const all = series.flatMap(s => s.values);
  const max = Math.max(...all, 1);
  const min = Math.min(...all, 0);
  const span = max - min || 1;
  const n = Math.max(...series.map(s => s.values.length), 2);
  const x = i => pad.l + i / (n - 1) * (W - pad.l - pad.r);
  const y = v => pad.t + (1 - (v - min) / span) * (H - pad.t - pad.b);
  const hi = ACCENTS[accent] || ACCENTS.blue;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: H,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, Array.from({
    length: gridLines
  }).map((_, i) => {
    const gy = pad.t + i / (gridLines - 1) * (H - pad.t - pad.b);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: pad.l,
      x2: W - pad.r,
      y1: gy,
      y2: gy,
      stroke: "var(--chart-gridline)",
      strokeWidth: "1"
    });
  }), series.map((s, si) => {
    const on = !!s.highlight;
    const d = s.values.map((v, i) => `${i ? 'L' : 'M'}${x(i)} ${y(v)}`).join(' ');
    return /*#__PURE__*/React.createElement("g", {
      key: s.name || si
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: on ? hi : 'var(--chart-series)',
      strokeWidth: on ? 2 : 1.62,
      strokeLinejoin: "miter",
      strokeLinecap: "butt"
    }), showDots && on ? s.values.map((v, i) => /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x(i) - 2,
      y: y(v) - 2,
      width: "4",
      height: "4",
      fill: hi
    })) : null);
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: l,
    x: x(i),
    y: H - 4,
    textAnchor: i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle',
    style: {
      font: 'var(--text-caption)',
      fill: 'var(--text-muted)'
    }
  }, l))), series.some(s => s.name) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, series.map((s, si) => /*#__PURE__*/React.createElement("span", {
    key: s.name || si,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-caption)',
      color: s.highlight ? 'var(--text-body)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 2,
      background: s.highlight ? hi : 'var(--chart-series)'
    }
  }), s.name))) : null);
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
const {
  Logo,
  Tag,
  Divider,
  BarChart,
  LineChart,
  PullQuote,
  Icon
} = window.IsabelBrandSystem_b8d40d;
const ACC = {
  green: 'var(--accent-green)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  brown: 'var(--accent-brown)'
};

/** 1280×720 frame. 96px margins, left-aligned — never centered text. */
function Slide({
  children,
  dark = false,
  logo = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: dark ? 'var(--ink-black)' : 'var(--paper-white)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      padding: '96px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, children, logo ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      bottom: 48
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: dark ? 'white' : 'black',
    size: 32
  })) : null);
}
function SlideEyebrow({
  accent = 'green',
  dark = false,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      font: 'var(--weight-medium) 16px/1.2 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 10,
      height: 10,
      background: ACC[accent]
    }
  }), children);
}
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    logo: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 96,
      top: 96,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) 16px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Isabel \xA0\xB7\xA0 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    accent: "green",
    style: {
      alignSelf: 'flex-start',
      padding: '10px 18px',
      font: 'var(--weight-medium) 14px/1 var(--font-body)'
    }
  }, "Case study"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--weight-semibold) 112px/1.02 var(--font-display)',
      letterSpacing: '-0.025em',
      margin: 0
    }
  }, "Home in Order"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 28px/1.4 var(--font-body)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 820
    }
  }, "A product case study on household mental load")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      borderTop: '1px solid var(--ink-black)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--weight-medium) 16px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Product management \xB7 Circular economy"), /*#__PURE__*/React.createElement("span", null, "Barbastro, Somontano")));
}
function ContentSlide() {
  const points = [['62%', 'of users under-report time spent on invisible chores', true], ['2×', 'weekly check-ins doubled task completion in week one', false], ['18', 'households interviewed before a line of code was written', false]];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(SlideEyebrow, {
    accent: "green"
  }, "Discovery \xB7 Week 3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 64px/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: '24px 0 0'
    }
  }, "Key findings"), /*#__PURE__*/React.createElement(Divider, {
    variant: "rule",
    width: 96,
    spacing: "48px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, points.map(([n, t, hi]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 48,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 72px/1 var(--font-display)',
      color: hi ? 'var(--accent-green)' : 'var(--ink-black)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) 28px/1.4 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, t)))));
}
function ChartSlide() {
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(SlideEyebrow, {
    accent: "blue"
  }, "Outcome"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 56px/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: '24px 0 48px'
    }
  }, "Task completion after weekly check-ins"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 64,
      alignItems: 'start',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    height: 320,
    accent: "blue",
    labels: ['W0', 'W1', 'W2', 'W3', 'W4'],
    series: [{
      name: 'Control',
      values: [20, 22, 21, 24, 25]
    }, {
      name: 'Weekly check-in',
      values: [20, 41, 48, 56, 61],
      highlight: true
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      borderLeft: '1px solid var(--stroke-subtle)',
      paddingLeft: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 88px/1 var(--font-display)',
      color: 'var(--accent-blue)'
    }
  }, "2\xD7"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 24px/1.45 var(--font-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Completion in the check-in cohort, sustained through week four."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-medium) 14px/1.3 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "n = 18 households"))));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 'auto',
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 2,
      background: 'var(--accent-yellow)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--weight-semibold) 56px/1.2 var(--font-display)',
      letterSpacing: 'var(--tracking-heading)',
      textWrap: 'pretty'
    }
  }, "\u201CDesigning product means deciding which problem deserves our time.\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--weight-medium) 16px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.72)'
    }
  }, "Isabel \u2014 product notes")))));
}
function ComparisonSlide() {
  const cols = [['Before', 'Chores tracked in someone\'s head. No shared record, no agreement on the split.', '--gray-500'], ['After', 'One shared log, one weekly check-in, and a number both people can see.', '--accent-brown']];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(SlideEyebrow, {
    accent: "brown"
  }, "Before / after"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 56px/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: '24px 0 48px'
    }
  }, "What changed for the household"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      flex: 1
    }
  }, cols.map(([t, d, c]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: `2px solid var(${c})`,
      paddingTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) 16px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 30px/1.35 var(--font-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 24,
      height: 200
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    accent: "brown",
    highlightIndex: 3,
    height: 180,
    valueFormat: v => v + '%',
    style: {
      flex: 1
    },
    data: [{
      label: 'W1',
      value: 24
    }, {
      label: 'W2',
      value: 38
    }, {
      label: 'W3',
      value: 31
    }, {
      label: 'W4',
      value: 62
    }]
  })));
}
function SectionSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      font: 'var(--weight-medium) 16px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.72)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--accent-green)'
    }
  }), "Section 02"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 96px/1.05 var(--font-display)',
      letterSpacing: '-0.025em',
      margin: 0
    }
  }, "Findings"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 24px/1.45 var(--font-body)',
      color: 'rgba(255,255,255,.72)',
      margin: 0,
      maxWidth: 700
    }
  }, "Eighteen households, three weeks, one shared log.")));
}
Object.assign(window, {
  Slide,
  SlideEyebrow,
  TitleSlide,
  ContentSlide,
  ChartSlide,
  QuoteSlide,
  ComparisonSlide,
  SectionSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const {
  Button,
  Divider,
  Tag,
  Icon,
  Logo
} = window.IsabelBrandSystem_b8d40d;
function About({
  go
}) {
  const roles = [['2023 — now', 'Product lead, climate tech', 'Household energy and reuse products. Discovery, roadmap, and the team that builds them.'], ['2018 — 2023', 'Senior product manager', 'Marketplace and payments. Grew weekly retention from 31% to 48% over two years.'], ['2013 — 2018', 'Product manager', 'B2B SaaS. First product hire; built the discovery practice the team still uses.'], ['2010 — 2013', 'Business analyst', 'Where I learned that the requirement is never the problem.']];
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: "blue"
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      margin: 0,
      maxWidth: '26ch',
      textWrap: 'pretty'
    }
  }, "I put fifteen years of product craft to work on climate and social impact."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '58ch',
      textWrap: 'pretty'
    }
  }, "I work from Barbastro, in the Somontano, and I like problems that are boring on the surface and structural underneath \u2014 packaging that never comes back, energy bills nobody can read, chores nobody counts."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '58ch',
      textWrap: 'pretty'
    }
  }, "I build with the people who will use the thing, and with the people who will maintain it. Both matter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    accent: "blue",
    icon: "download",
    iconPosition: "left"
  }, "Download CV"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "mail",
    iconPosition: "left"
  }, "hello@isabel.work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-hairline)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-100)',
      aspectRatio: '4 / 5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 24,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Portrait \u2014 B&W, blue accent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), "Barbastro, Somontano \u2014 Arag\xF3n, Spain"))), /*#__PURE__*/React.createElement(Divider, {
    variant: "marker",
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 7fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0
    }
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, roles.map(([when, what, detail]) => /*#__PURE__*/React.createElement("div", {
    key: when,
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 'var(--space-3)',
      borderTop: 'var(--border-subtle)',
      padding: 'var(--space-3) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, when), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)'
    }
  }, what), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, detail)))))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 7fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0
    }
  }, "What I work on"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, ['Product discovery', 'Circular economy', 'Climate tech', 'Research ops', 'Talent development', 'Roadmapping', 'Analytics', 'Service design'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))));
}
function Writing({
  go
}) {
  const posts = [['Mar 2026', 'The requirement is never the problem', 'On discovery as an act of translation, not transcription.', 'green'], ['Jan 2026', 'Four colors, one gesture', 'Why the recycling bin is the most universal interface in Europe.', 'yellow'], ['Nov 2025', 'Counting invisible work', 'What household chore logs taught me about product metrics.', 'blue']];
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: "brown"
  }, "Writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      margin: 'var(--space-2) 0 0'
    }
  }, "Notes on product and impact"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, posts.map(([when, title, blurb, accent]) => /*#__PURE__*/React.createElement("a", {
    key: title,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr auto',
      gap: 'var(--space-3)',
      alignItems: 'center',
      borderTop: 'var(--border-subtle)',
      padding: 'var(--space-3) 0',
      textDecoration: 'none',
      border: 0,
      borderTop: '1px solid var(--stroke-subtle)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, when), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      display: 'block'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, blurb)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20
  })))));
}
Object.assign(window, {
  About,
  Writing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  Button,
  Tag,
  Divider,
  PullQuote,
  BarChart,
  LineChart,
  Icon
} = window.IsabelBrandSystem_b8d40d;
function CaseStudy({
  go
}) {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: () => go('home')
  }, "All work"), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'end',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Case study \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0
    }
  }, "Home in Order"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 20px/1.5 var(--font-body)',
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, "A product on household mental load. I ran discovery, defined the first release and measured what changed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    accent: "green"
  }, "Circular economy"), /*#__PURE__*/React.createElement(Tag, null, "Research"), /*#__PURE__*/React.createElement(Tag, null, "Product discovery"))), /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)',
      margin: 0,
      borderTop: 'var(--border-hairline)',
      paddingTop: 'var(--space-2)'
    }
  }, [['Role', 'Product lead'], ['Duration', '6 weeks'], ['Team', '4 people'], ['Outcome', '−23% drop-off']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '4px 0 0',
      font: 'var(--text-label)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      border: 'var(--border-hairline)',
      background: 'var(--gray-100)',
      height: 360,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 24,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Hero image \u2014 B&W product shot, one accent max")), /*#__PURE__*/React.createElement(Divider, {
    variant: "marker",
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 7fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0
    }
  }, "The problem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      maxWidth: '62ch'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Households track chores in their heads. The work is invisible, unevenly split, and nobody agrees on how much of it there is."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "I interviewed 18 households over three weeks. Everyone described the same gap between what they thought they did and what a shared record showed."))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 7fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0
    }
  }, "Key findings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: "green"
  }, "Self-reported vs logged hours"), /*#__PURE__*/React.createElement(BarChart, {
    height: 180,
    accent: "green",
    highlightIndex: 3,
    valueFormat: v => v + '%',
    data: [{
      label: 'Cooking',
      value: 38
    }, {
      label: 'Laundry',
      value: 44
    }, {
      label: 'Admin',
      value: 51
    }, {
      label: 'Planning',
      value: 62
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "62% under-report time spent on invisible chores.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: "green"
  }, "Task completion after weekly check-ins"), /*#__PURE__*/React.createElement(LineChart, {
    height: 180,
    accent: "green",
    labels: ['W0', 'W1', 'W2', 'W3', 'W4'],
    series: [{
      name: 'Control',
      values: [20, 22, 21, 24, 25]
    }, {
      name: 'Weekly check-in',
      values: [20, 41, 48, 56, 61],
      highlight: true
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Check-ins doubled completion in week one.")))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement(PullQuote, {
    accent: "green",
    attribution: "Participant 12 \u2014 discovery interview"
  }, "I did not know I was keeping a list until someone asked me to write it down."), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '4fr 7fr',
      gap: 'var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0
    }
  }, "What changed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, [['−23%', 'Onboarding drop-off, six weeks after release.'], ['2×', 'Weekly task completion in the check-in cohort.'], ['18', 'Households interviewed before a line of code.']].map(([n, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'baseline',
      borderTop: 'var(--border-subtle)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 40px/1 var(--font-display)',
      minWidth: 120
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, d))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-right",
    onClick: () => go('home')
  }, "Next project")))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
const {
  Logo,
  Icon,
  Button,
  Divider
} = window.IsabelBrandSystem_b8d40d;
function Header({
  route,
  go
}) {
  const nav = [['home', 'Work'], ['about', 'About'], ['writing', 'Writing']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--paper-white)',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      padding: '24px var(--page-margin-desktop)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      border: 0,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "black",
    size: 36,
    wordmark: true
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: 'var(--text-label)',
      textDecoration: 'none',
      color: 'var(--text-body)',
      borderBottom: route === id ? '2px solid var(--accent-green)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "mail",
    iconPosition: "left",
    onClick: () => go('about')
  }, "Contact"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--border-hairline)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--page-margin-desktop)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "black",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Barbastro, Somontano \u2014 Arag\xF3n, Spain")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      border: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 20,
    title: "LinkedIn"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      border: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20,
    title: "Email"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('about');
    },
    style: {
      font: 'var(--text-label)'
    }
  }, "Download CV"))));
}
function Page({
  children
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--page-margin-desktop) 0'
    }
  }, children);
}
function Eyebrow({
  accent = 'green',
  children
}) {
  const c = {
    green: 'var(--accent-green)',
    yellow: 'var(--accent-yellow)',
    blue: 'var(--accent-blue)',
    brown: 'var(--accent-brown)'
  }[accent];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      background: c
    }
  }), children);
}
Object.assign(window, {
  Header,
  Footer,
  Page,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ProjectCard,
  Button,
  Tag,
  Divider,
  PullQuote,
  BarChart
} = window.IsabelBrandSystem_b8d40d;
const PROJECTS = [{
  id: 'home-in-order',
  eyebrow: 'Case study',
  title: 'Home in Order',
  accent: 'green',
  description: 'A product on household mental load — who tracks what, and what it costs.',
  tags: ['Product discovery', 'Research']
}, {
  id: 'reuse-loops',
  eyebrow: 'Case study',
  title: 'Reuse loops',
  accent: 'brown',
  description: 'Mapping where returnable packaging breaks down between shop and shelf.',
  tags: ['Circular economy', 'Operations']
}, {
  id: 'grid-signals',
  eyebrow: 'Case study',
  title: 'Grid signals',
  accent: 'blue',
  description: 'Turning household energy data into a decision one person can act on.',
  tags: ['Climate tech', 'Data']
}, {
  id: 'talent-paths',
  eyebrow: 'Internal',
  title: 'Talent paths',
  accent: 'yellow',
  description: 'A career framework built with the team it was written for.',
  tags: ['Talent development']
}];
function Home({
  go
}) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Circular economy', 'Climate tech', 'Research', 'Talent development'];
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Product management \xB7 Circular economy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Product with purpose"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 20px/1.5 var(--font-body)',
      color: 'var(--text-muted)',
      maxWidth: '46ch',
      textWrap: 'pretty'
    }
  }, "I build digital products. For fifteen years that meant shipping software; now it means putting that craft to work on climate and social impact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-right",
    onClick: () => go('case')
  }, "View project"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download",
    iconPosition: "left",
    onClick: () => go('about')
  }, "Download CV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-hairline)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: "yellow"
  }, "The number that matters"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      background: 'var(--accent-yellow)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 64px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "23%")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-paragraph)',
      color: 'var(--text-muted)'
    }
  }, "Onboarding drop-off cut in six weeks on Home in Order."), /*#__PURE__*/React.createElement(Divider, {
    variant: "rule",
    width: 48,
    spacing: "var(--space-1)"
  }), /*#__PURE__*/React.createElement(BarChart, {
    height: 96,
    accent: "yellow",
    highlightIndex: 3,
    showValues: false,
    data: [{
      label: 'W1',
      value: 31
    }, {
      label: 'W2',
      value: 28
    }, {
      label: 'W3',
      value: 24
    }, {
      label: 'W4',
      value: 8
    }]
  }))), /*#__PURE__*/React.createElement(Divider, {
    variant: "marker",
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      margin: 0
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    as: "button",
    active: filter === f,
    onClick: () => setFilter(f),
    style: {
      cursor: 'pointer',
      border: filter === f ? '1px solid var(--ink-black)' : 'var(--border-subtle)'
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--grid-gutter)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('case');
    }
  })))), !shown.length ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Nothing filed under \u201C", filter, "\u201D yet.") : null), /*#__PURE__*/React.createElement(Divider, {
    variant: "marker",
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--grid-gutter)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "lg",
    accent: "blue",
    attribution: "Isabel \u2014 product notes"
  }, "Designing product means deciding which problem deserves our time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, [['Empowerment & talent development', 'Building with and for people, not only for the product.'], ['Ethics, equity & sustainability', 'Decisions that distribute value fairly and respect the planet\'s limits.'], ['Technology for positive impact', 'Technology as a tool in service of a real problem.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: 'var(--border-subtle)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, d))))));
}
Object.assign(window, {
  Home,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.LineChart = __ds_scope.LineChart;

})();
