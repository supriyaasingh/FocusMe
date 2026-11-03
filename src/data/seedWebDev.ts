import { Topic } from '../types/syllabus.ts';

interface WebDevTopicMeta {
  module: string;
  name: string;
  importance: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedMinutes: number;
  subtopics: {
    name: string;
    tasks: string[];
  }[];
  notes: string;
  practiceQuestions: string[];
}

const WEBDEV_MODULES_RAW: WebDevTopicMeta[] = [
  // Module 1: Computer and Web Fundamentals (8 topics)
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'How the internet works',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Packet Switching & Global Routing', tasks: ['Understand TCP/IP 4-layer stack vs OSI 7-layer model', 'Trace packet transmission across optical fibers, IXPs, and ISPs'] },
      { name: 'IP Addressing & Subnets', tasks: ['Differentiate IPv4 vs IPv6 formats', 'Understand public vs private NAT subnet addressing'] }
    ],
    notes: 'The Internet is a decentralized packet-switched network operating primarily over TCP/IP protocol suites with BGP routing.',
    practiceQuestions: ['How does packet switching differ from circuit switching?', 'Explain how BGP (Border Gateway Protocol) routes packets between Autonomous Systems.']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'Client and server',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Client-Server Architecture', tasks: ['Identify client roles (browser, mobile, CLI)', 'Analyze server roles (web server, app server, reverse proxy)'] },
      { name: 'Stateless Protocol Paradigms', tasks: ['Understand statelessness of HTTP', 'Examine session state management via cookies/tokens'] }
    ],
    notes: 'Clients initiate requests; servers process, authorize, query storage, and respond. HTTP is stateless by specification.',
    practiceQuestions: ['What are the advantages of stateless server architectures for horizontal scaling?', 'How do clients maintain authenticated sessions over a stateless protocol?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'HTTP and HTTPS',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'HTTP Evolution (1.1, 2, 3/QUIC)', tasks: ['Compare HTTP/1.1 head-of-line blocking with HTTP/2 multiplexing', 'Understand HTTP/3 over UDP with QUIC protocol'] },
      { name: 'TLS Handshake & Encryption', tasks: ['Trace asymmetric key exchange (ECDHE) and symmetric session cipher (AES-GCM)', 'Understand SSL/TLS certificate chains and CA trust'] }
    ],
    notes: 'HTTPS operates HTTP over TLS (Transport Layer Security, port 443). HTTP/2 adds binary framing; HTTP/3 replaces TCP with UDP-based QUIC.',
    practiceQuestions: ['Diagram the steps of a TLS 1.3 handshake.', 'How does HTTP/2 multiplexing solve head-of-line blocking in the application layer?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'DNS',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'DNS Resolution Tree', tasks: ['Trace root server -> TLD server -> authoritative nameserver', 'Inspect recursive vs iterative DNS resolvers'] },
      { name: 'Record Types & TTL', tasks: ['Configure A, AAAA, CNAME, MX, TXT records', 'Analyze DNS caching layers and Time-to-Live semantics'] }
    ],
    notes: 'DNS translates human-readable hostnames to IP addresses. Caching occurs in browser, OS, router, and ISP recursive resolvers.',
    practiceQuestions: ['Explain the resolution journey when requesting a domain for the first time.', 'What is the purpose of CNAME vs ALIAS/ANAME records on root apex domains?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'Browser architecture',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Multi-Process Browser Model', tasks: ['Inspect Chromium process model: Browser, Renderer, GPU, Network processes', 'Understand site isolation and security sandboxing'] },
      { name: 'Critical Rendering Path', tasks: ['Trace HTML parsing -> DOM tree -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint -> Compositing', 'Identify composite-only properties (transform, opacity)'] }
    ],
    notes: 'Chromium isolates tabs into distinct sandboxed renderer processes. Layout changes trigger expensive reflows; transform/opacity bypass layout and paint.',
    practiceQuestions: ['Walk through the Critical Rendering Path from raw bytes to pixel on screen.', 'Why are transform and opacity the only zero-cost animated properties?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'Request and response',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'HTTP Request Anatomy', tasks: ['Inspect Method, URI, Protocol Version, Headers, Body', 'Learn common request headers (User-Agent, Accept, Authorization)'] },
      { name: 'HTTP Response & Status Codes', tasks: ['Categorize 2xx, 3xx, 4xx, 5xx status codes', 'Inspect Cache-Control, ETag, and Content-Type headers'] }
    ],
    notes: 'Status codes communicate outcome: 200 OK, 201 Created, 301 Moved Permanently, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error.',
    practiceQuestions: ['What is the exact semantic difference between 401 Unauthorized and 403 Forbidden?', 'How do ETag and If-None-Match headers implement conditional requests?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'Frontend and backend',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Separation of Concerns', tasks: ['Define client presentation vs server data orchestration', 'Compare CSR, SSR, and SSG rendering paradigms'] }
    ],
    notes: 'Frontend renders UI and captures user input in browser; backend manages database persistence, authentication, authorization, and business rules.',
    practiceQuestions: ['Compare CSR (Client-Side Rendering) vs SSR (Server-Side Rendering) for initial load and SEO.', 'Where should sensitive authentication secret keys reside and why?']
  },
  {
    module: 'Module 1: Computer and Web Fundamentals',
    name: 'Domain and hosting',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Domain Registration & ICANN', tasks: ['Understand registrars vs registries', 'Configure nameservers (NS records)'] },
      { name: 'Hosting Platforms & CDNs', tasks: ['Compare VPS, Serverless, Cloud Run, and Static Site CDNs', 'Understand edge caching with Cloudflare/Cloud CDN'] }
    ],
    notes: 'Edge CDNs cache static assets in geographic proximity to users, minimizing round-trip time (RTT).',
    practiceQuestions: ['How does a CDN Edge Server reduce Time to First Byte (TTFB)?', 'What is the role of an SSL certificate during domain deployment?']
  },

  // Module 2: HTML (11 topics)
  {
    module: 'Module 2: HTML',
    name: 'HTML structure',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Document Skeleton', tasks: ['Write <!DOCTYPE html>, <html>, <head>, <body>', 'Configure viewport meta tag for mobile responsiveness'] }
    ],
    notes: 'The <!DOCTYPE html> declaration triggers standards-compliant rendering mode in modern browsers.',
    practiceQuestions: ['What happens if the <!DOCTYPE html> declaration is omitted?', 'Explain the purpose of <meta name="viewport" content="width=device-width, initial-scale=1.0">.']
  },
  {
    module: 'Module 2: HTML',
    name: 'Elements and attributes',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Tag Anatomy & Void Elements', tasks: ['Understand opening, closing, and self-closing tags', 'Learn void tags (<img>, <input>, <br>, <meta>)'] },
      { name: 'Global Attributes', tasks: ['Use id, class, data-* attributes, tabindex, title, hidden', 'Inspect custom data-* attributes in JS'] }
    ],
    notes: 'IDs must be unique within an HTML document; classes can be shared across multiple elements.',
    practiceQuestions: ['Why must ID attributes be unique across a page?', 'How do you access HTML data-* attributes in JavaScript using element.dataset?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Headings and paragraphs',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Typographic Hierarchy', tasks: ['Structure content with h1 through h6 tags', 'Maintain single h1 per document for semantic outline'] }
    ],
    notes: 'Never skip heading levels (e.g. h1 to h3) to maintain accessible document outlines for screen readers.',
    practiceQuestions: ['Why is an unbroken heading hierarchy critical for accessibility screen readers?', 'Can multiple h1 elements exist on a page with section tags?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Lists',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 30,
    subtopics: [
      { name: 'Ordered, Unordered, & Description Lists', tasks: ['Implement <ul>, <ol>, <li>', 'Build definition lists with <dl>, <dt>, <dd>'] }
    ],
    notes: 'Use <nav> wrapping <ul> for semantic accessible navigation menus.',
    practiceQuestions: ['When should a <dl> description list be preferred over an unordered list?', 'How does a screen reader announce list element item counts?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Links and images',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Anchor Tags & Targets', tasks: ['Use href with relative, absolute, and anchor fragment URLs', 'Add rel="noopener noreferrer" on target="_blank" links for security'] },
      { name: 'Responsive Images', tasks: ['Configure <picture> with <source media="">', 'Use srcset and sizes attributes on <img> with loading="lazy"'] }
    ],
    notes: 'Always specify alt attributes on images for accessibility and width/height dimensions to prevent Cumulative Layout Shift (CLS).',
    practiceQuestions: ['Why is rel="noopener noreferrer" essential when opening links in target="_blank"?', 'How does srcset and sizes prevent serving oversized desktop images to mobile devices?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Tables',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Tabular Data Markup', tasks: ['Implement <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>', 'Use scope="col" and scope="row" attributes for accessibility'] }
    ],
    notes: 'Use tables strictly for tabular dataset representation, never for page layout.',
    practiceQuestions: ['What is the purpose of the scope attribute on <th> elements?', 'How do colspan and rowspan merge table cells?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Forms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Form Elements & Controls', tasks: ['Implement <form>, <label>, <input>, <textarea>, <select>', 'Explicitly link label to input via for="id" attribute'] },
      { name: 'Submission & Encoding', tasks: ['Configure action, method (GET/POST), and enctype="multipart/form-data" for file uploads'] }
    ],
    notes: 'Every interactive form field must have an associated <label> with a matching "for" attribute for screen reader accessibility.',
    practiceQuestions: ['Why is wrapping an input inside a label or using for/id essential for accessibility?', 'When must enctype="multipart/form-data" be used on a form?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Input types',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'HTML5 Form Controls', tasks: ['Use text, password, email, number, tel, date, file, checkbox, radio', 'Implement HTML5 validation attributes: required, pattern, min, max'] }
    ],
    notes: 'Native HTML5 inputs trigger appropriate soft keyboards on mobile devices (e.g. type="tel" triggers numeric keypad).',
    practiceQuestions: ['How do input types influence mobile device virtual keyboards?', 'Explain how the HTML5 "pattern" attribute enables regex validation without JS.']
  },
  {
    module: 'Module 2: HTML',
    name: 'Semantic HTML',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Structural Semantic Elements', tasks: ['Use <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>', 'Replace non-semantic <div> soups with semantic landmarks'] }
    ],
    notes: 'Semantic HTML conveys meaning to browsers, search engine web crawlers, and assistive technologies.',
    practiceQuestions: ['What is the semantic difference between <article> and <section>?', 'Why does Google search engine scoring favor semantic markup over plain div structures?']
  },
  {
    module: 'Module 2: HTML',
    name: 'Accessibility basics',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'ARIA & Keyboard Navigation', tasks: ['Understand ARIA roles, aria-label, aria-expanded, aria-hidden', 'Verify full tab-order keyboard navigability (focus-visible)'] }
    ],
    notes: 'First rule of ARIA: Do not use ARIA if a native HTML element with the required semantic behavior already exists.',
    practiceQuestions: ['What is the first rule of ARIA?', 'How does aria-live="polite" communicate dynamic updates to screen readers?']
  },
  {
    module: 'Module 2: HTML',
    name: 'HTML5',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Modern Media & Canvas', tasks: ['Implement <video> and <audio> with fallback captions', 'Use <dialog> element for accessible native modal overlays'] }
    ],
    notes: 'HTML5 introduced native audio/video playback, dialog elements, web storage, and drawing APIs without third-party plugins.',
    practiceQuestions: ['How does the native <dialog> element handle backdrop styling and focus trapping?', 'Explain how to provide accessibility captions in a <video> tag using <track>.']
  },

  // Module 3: CSS (16 topics)
  {
    module: 'Module 3: CSS',
    name: 'CSS syntax',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Rule Anatomy & Cascading Order', tasks: ['Understand selector, declaration block, property, value', 'Learn CSS Cascade, Specificity, and Inheritance hierarchy'] }
    ],
    notes: 'CSS (Cascading Style Sheets) calculates computed styles based on cascade origin, specificity, and source order.',
    practiceQuestions: ['How does the CSS cascade resolve conflicting property declarations?', 'What is the inheritance behavior of typography properties versus box-model properties?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Selectors',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Selector Specificity Math', tasks: ['Calculate specificity (Inline, IDs, Classes/Attributes/Pseudo-classes, Elements)', 'Avoid !important overrides'] },
      { name: 'Combinators & Modern Pseudo-Classes', tasks: ['Use child (>), descendant ( ), adjacent (+), general sibling (~)', 'Master :is(), :where(), :has() relational selector'] }
    ],
    notes: ':has() is CSS\'s parent selector. :where() has zero specificity, making it ideal for base resets.',
    practiceQuestions: ['Calculate the specificity of: "div.card:hover > button#primary".', 'How does :where() differ from :is() in specificity calculation?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Colors and backgrounds',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Modern Color Spaces', tasks: ['Use sRGB, hex, rgb(), hsl(), and modern oklch() for perceptual uniformity', 'Implement linear and radial CSS gradients'] }
    ],
    notes: 'Prefer oklch() in modern CSS for predictable perceptual contrast and smooth gradient interpolation.',
    practiceQuestions: ['Why is oklch() superior to RGB and HSL for generating accessible color palettes?', 'How do you create an accessible text overlay on a background image?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Typography',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Font Properties & Web Fonts', tasks: ['Configure font-family, font-weight, font-size with clamp()', 'Set line-height (1.5-1.7 for prose) and letter-spacing'] },
      { name: 'Tabular Numerals & Font Loading', tasks: ['Use font-variant-numeric: tabular-nums', 'Optimize web font loading with font-display: swap'] }
    ],
    notes: 'Enforce tabular-nums for numeric columns to prevent layout shift. Keep body line-length around 65-75 characters (ch).',
    practiceQuestions: ['What does font-display: swap do during initial page rendering?', 'Why is line-height: 1.5 recommended for long-form reading legibility?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Box model',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Box Model Mechanics', tasks: ['Understand content, padding, border, margin', 'Apply universal box-sizing: border-box'] }
    ],
    notes: 'With box-sizing: border-box, padding and border are included within the declared width and height, preventing layout breakage.',
    practiceQuestions: ['Diagram standard content-box vs border-box calculations.', 'What is the standard universal CSS reset for box-sizing?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Margin and padding',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Spacing Systems', tasks: ['Apply consistent spatial scale (4px/8px increments)', 'Analyze vertical margin collapsing behavior'] }
    ],
    notes: 'Adjacent vertical margins collapse to the maximum of the two values; padding never collapses.',
    practiceQuestions: ['Under what conditions do CSS margins collapse?', 'How do modern flex and grid gap properties eliminate margin collapsing headaches?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Display',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Display Types', tasks: ['Compare block, inline, inline-block, none, flex, grid', 'Understand display: contents semantics'] }
    ],
    notes: 'display: none removes the element entirely from the accessibility tree; visibility: hidden hides it while preserving layout space.',
    practiceQuestions: ['Contrast display: none vs visibility: hidden vs opacity: 0.', 'What does display: contents do to an element\'s box?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Positioning',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Position Schemes', tasks: ['Master static, relative, absolute, fixed, sticky', 'Manage z-index and Stacking Context creation'] }
    ],
    notes: 'An absolute element positions relative to its nearest positioned ancestor (non-static). Stacking contexts control z-index isolation.',
    practiceQuestions: ['What CSS properties trigger the creation of a new Stacking Context?', 'How does position: sticky behave when its parent container ends?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Flexbox',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: '1D Axis Layout', tasks: ['Understand main axis vs cross axis', 'Master justify-content, align-items, flex-direction, flex-wrap'] },
      { name: 'Flex Sizing Math', tasks: ['Understand flex-grow, flex-shrink, and flex-basis (flex: 1 1 0%)'] }
    ],
    notes: 'Flexbox is designed for 1-dimensional layouts (row or column). flex: 1 1 auto differs from flex: 1 1 0 in baseline calculation.',
    practiceQuestions: ['Explain the exact mathematical calculation behind flex-grow and flex-shrink.', 'How do you center an element vertically and horizontally with Flexbox?']
  },
  {
    module: 'Module 3: CSS',
    name: 'CSS Grid',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: '2D Layout System', tasks: ['Define grid-template-columns with fr units', 'Use repeat(auto-fit, minmax(250px, 1fr)) for responsive grids'] },
      { name: 'Grid Lines & Areas', tasks: ['Position items with grid-column and grid-row', 'Use named grid-template-areas'] }
    ],
    notes: 'CSS Grid is designed for 2-dimensional layouts (rows and columns simultaneously). Auto-fit and minmax create responsive grids without media queries.',
    practiceQuestions: ['Explain the difference between auto-fill and auto-fit in CSS Grid.', 'How do you name and map grid areas using grid-template-areas?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Responsive design',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Fluid Layout Strategies', tasks: ['Design mobile-first layouts', 'Use fluid units (%, rem, vw, vh, clamp(), min(), max())'] }
    ],
    notes: 'Mobile-first design styles the narrow screen baseline first, using min-width media queries for larger viewports.',
    practiceQuestions: ['Why is mobile-first design preferred over desktop-first in modern engineering?', 'How does clamp(1rem, 2.5vw, 2rem) create fluid responsive typography?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Media queries',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Breakpoint Engineering', tasks: ['Use standard breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)', 'Implement prefers-color-scheme and prefers-reduced-motion'] }
    ],
    notes: 'Always respect @media (prefers-reduced-motion: reduce) for vestibular disorder accessibility by disabling non-essential motion.',
    practiceQuestions: ['Write a media query that disables CSS animations if the user has requested reduced motion.', 'What is the syntax for CSS range media queries (e.g. 600px <= width <= 900px)?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Transitions',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Smooth State Changes', tasks: ['Configure transition-property, transition-duration, transition-timing-function', 'Use cubic-bezier curves for natural settling'] }
    ],
    notes: 'Only transition compositor properties (transform, opacity). Keep micro-interaction durations under 200ms.',
    practiceQuestions: ['Why should transitions on height and width be avoided?', 'What does cubic-bezier(0.16, 1, 0.3, 1) achieve compared to linear?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Animations',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Keyframe Animations', tasks: ['Define @keyframes with percentage steps', 'Configure animation-fill-mode, iteration-count, and will-change'] }
    ],
    notes: 'Use will-change sparingly to promote elements to dedicated GPU compositor layers before animating.',
    practiceQuestions: ['What are the performance implications of overusing will-change: transform?', 'Explain animation-fill-mode: forwards.']
  },
  {
    module: 'Module 3: CSS',
    name: 'CSS variables',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Custom Properties (--var)', tasks: ['Declare design tokens on :root', 'Implement runtime dynamic theming with var(--color-bg, fallback)'] }
    ],
    notes: 'CSS custom properties are reactive and cascade down the DOM tree, allowing instant theme switching via JavaScript.',
    practiceQuestions: ['How do CSS custom properties differ from preprocessor (SASS) variables?', 'How do you update a CSS variable at runtime using element.style.setProperty?']
  },
  {
    module: 'Module 3: CSS',
    name: 'Tailwind CSS',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Utility-First Paradigm', tasks: ['Compose interfaces with utility classes', 'Understand Tailwind v4 @import "tailwindcss" compilation'] },
      { name: 'Responsive & State Variants', tasks: ['Use sm:, md:, lg:, dark:, hover:, focus-visible: variants', 'Maintain clean markup without unnecessary custom CSS files'] }
    ],
    notes: 'Tailwind CSS generates minimal production CSS through automated static analysis. Use arbitrary values [12px] sparingly.',
    practiceQuestions: ['What are the maintainability advantages of utility-first CSS over class-name naming conventions like BEM?', 'How does Tailwind CSS v4 handle dark mode variants with @custom-variant dark?']
  },

  // Module 4: JavaScript (25 topics)
  {
    module: 'Module 4: JavaScript',
    name: 'Variables',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'let, const, and var', tasks: ['Understand block scope vs function scope', 'Analyze Temporal Dead Zone (TDZ) and hoisting'] }
    ],
    notes: 'Prefer const by default; use let only when reassignment is strictly required. Never use var in modern JavaScript.',
    practiceQuestions: ['What is the Temporal Dead Zone (TDZ) for let and const?', 'Why does var leak outside of if blocks and for loops?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Data types',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Primitives vs Objects', tasks: ['Identify string, number, bigint, boolean, undefined, symbol, null', 'Understand pass-by-value for primitives vs pass-by-reference for objects'] }
    ],
    notes: 'typeof null returns "object" due to a historical JavaScript bug. Use Object.is() for precise equality checks.',
    practiceQuestions: ['Why does typeof null evaluate to "object"?', 'Explain the difference between primitive stack values and object heap references.']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Operators',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Coercion & Strict Equality', tasks: ['Differentiate == (abstract equality) vs === (strict equality)', 'Use Nullish Coalescing (??) vs Logical OR (||)'] }
    ],
    notes: 'Always use ===. Nullish coalescing (??) checks strictly for null or undefined, unlike || which coerces 0 and "" to false.',
    practiceQuestions: ['What is the difference between null ?? "default" and false || "default"?', 'Why is [] == false true, but [] ? true : false evaluates to true?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Conditions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Control Flow & Ternaries', tasks: ['Write readable if-else ladders and ternaries', 'Use switch-case statements with strict equality matching'] }
    ],
    notes: 'Avoid deeply nested ternary operators: limit ternaries to simple two-way assignments.',
    practiceQuestions: ['How can switch-case statements be replaced with object lookup tables?', 'What values are falsy in JavaScript?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Loops',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Iteration Paradigms', tasks: ['Master for, while, do-while', 'Differentiate for...of (iterables) vs for...in (object keys)'] }
    ],
    notes: 'Use for...of for arrays, sets, and maps; use for...in only for plain object key enumeration (with hasOwnProperty check).',
    practiceQuestions: ['What is the difference between for...in and for...of?', 'How does the break and continue statement operate inside nested loops with labels?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Functions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Declarations, Expressions, & Arrows', tasks: ['Compare function declarations (hoisted) vs arrow functions', 'Understand lexical "this" binding in arrow functions'] }
    ],
    notes: 'Arrow functions do not have their own "this", "arguments", or "super" bindings; they capture "this" lexically from their enclosing scope.',
    practiceQuestions: ['Why should arrow functions not be used as object prototype methods that need "this"?', 'What happens when calling a hoisted function declaration before its code line?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Arrays',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Array Operations & Mutation', tasks: ['Understand push, pop, shift, unshift, splice', 'Use non-mutating equivalents: slice, concat, toSpliced (ES2023)'] }
    ],
    notes: 'React state requires immutable array updates: prefer non-mutating methods like map, filter, or spread.',
    practiceQuestions: ['Which array methods mutate the original array and which return a new array?', 'How does Array.from() convert array-like objects into true arrays?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Objects',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Object Literals & Prototypes', tasks: ['Use computed property names {[key]: val}', 'Inspect Object.keys, Object.values, Object.entries'] }
    ],
    notes: 'Objects store key-value mappings. Object keys are coerced to strings or Symbols.',
    practiceQuestions: ['How do you clone an object deeply in modern JS using structuredClone()?', 'What is the prototype chain and how does property lookup work?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Array methods',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Functional Iterators', tasks: ['Master map, filter, reduce, forEach, find, some, every', 'Chain functional array transformations without intermediate arrays'] }
    ],
    notes: 'reduce() transforms an array into a single accumulated result (e.g. number, object, grouped map).',
    practiceQuestions: ['Implement a groupBy function using Array.prototype.reduce().', 'Why should forEach be avoided when returning values or chaining transformations?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'String methods',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'String Processing', tasks: ['Use slice, split, trim, replace, replaceAll, includes, startsWith', 'Write multi-line template literals with ${interpolations}'] }
    ],
    notes: 'Strings are immutable primitives in JavaScript. Every string method returns a new string.',
    practiceQuestions: ['How do template literals support Tagged Templates?', 'Explain the difference between String.prototype.slice() and substring().']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Scope',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Scope Chain & Lexical Scope', tasks: ['Trace global scope, function scope, and block scope', 'Analyze variable lookup along the lexical scope chain'] }
    ],
    notes: 'JavaScript uses lexical (static) scoping: function scope is determined where the function was declared in code, not where it is invoked.',
    practiceQuestions: ['What is lexical scope and how is it resolved during code execution?', 'Demonstrate how block scoping prevents loop index leakage.']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Closures',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Closure Mechanics', tasks: ['Inspect retained outer scope variables after outer function returns', 'Implement function currying and private variable factories'] }
    ],
    notes: 'A closure is the combination of a function and the lexical environment within which that function was declared.',
    practiceQuestions: ['Write a function that generates auto-incrementing IDs using a closure.', 'How can unintended closures cause memory leaks in single-page applications?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'DOM manipulation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'DOM Tree Traversal & Mutation', tasks: ['Use querySelector and querySelectorAll', 'Create elements with document.createElement and appendChild/replaceChildren'] }
    ],
    notes: 'Batch DOM mutations or use DocumentFragment to minimize browser reflows and repaints.',
    practiceQuestions: ['What is the difference between innerHTML, textContent, and innerText?', 'How does DocumentFragment optimize bulk DOM insertions?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Events',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Event Listeners & Dispatch', tasks: ['Use addEventListener with options { once, passive, capture }', 'Understand event.preventDefault() and event.stopPropagation()'] }
    ],
    notes: 'Use { passive: true } on touch and wheel listeners to prevent scrolling jank.',
    practiceQuestions: ['Explain the three phases of DOM event propagation: Capturing, Target, and Bubbling.', 'Why does marking scroll listeners as passive improve performance?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Event delegation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Delegation Pattern', tasks: ['Attach single listener to parent container', 'Use event.target.closest("selector") to identify clicked children'] }
    ],
    notes: 'Event delegation leverages event bubbling to handle events for hundreds of child nodes or dynamically added elements with one listener.',
    practiceQuestions: ['Why is event delegation more memory-efficient than binding listeners to every list item?', 'How does element.closest() reliably match targets inside delegated events?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'ES6+',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Modern ECMAScript Features', tasks: ['Use optional chaining (?.) and nullish coalescing (??)', 'Learn Symbol, BigInt, Set, and Map collections'] }
    ],
    notes: 'Optional chaining (user?.profile?.avatar) short-circuits to undefined without throwing TypeError if an intermediate property is nullish.',
    practiceQuestions: ['What are the advantages of using Map over plain Objects for key-value stores?', 'How does the Symbol primitive ensure unique object property keys?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Destructuring',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Array & Object Destructuring', tasks: ['Unpack values with const { id, name = "Guest" } = user', 'Destructure nested objects and rename keys with { oldKey: newKey }'] }
    ],
    notes: 'Destructuring provides concise syntax for extracting properties and setting default fallback values in function parameters.',
    practiceQuestions: ['How do you swap two variables in JavaScript without a temporary variable using array destructuring?', 'Write a function signature that destructures an options object with defaults.']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Spread and rest',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Spread (...) vs Rest (...) Syntax', tasks: ['Use spread to shallow clone arrays [...arr] and objects {...obj}', 'Use rest parameter (...args) in functions'] }
    ],
    notes: 'Rest collects elements into an array; spread expands an iterable into individual elements.',
    practiceQuestions: ['Explain the difference between rest parameters and the legacy "arguments" object.', 'Why is object spread a shallow copy and what are the implications for nested objects?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Modules',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'ES Modules (ESM)', tasks: ['Use named exports and default exports', 'Understand static import vs dynamic import() expressions'] }
    ],
    notes: 'ES Modules are statically analyzed at compile time, enabling tree-shaking by modern bundlers like Vite and Rollup.',
    practiceQuestions: ['Compare ES Modules (import/export) with CommonJS (require/module.exports).', 'What is tree-shaking and why does it require ES Modules?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Promises',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Promise Lifecycle & Combinators', tasks: ['Create new Promise((resolve, reject) => ...)', 'Master Promise.all, Promise.allSettled, Promise.race, Promise.any'] }
    ],
    notes: 'A Promise has 3 states: Pending, Fulfilled, Rejected. Promise.all fails fast if any promise rejects; Promise.allSettled waits for all.',
    practiceQuestions: ['What is the difference between Promise.all and Promise.allSettled?', 'Write a custom timeout wrapper that rejects if a promise takes longer than N ms.']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Async and await',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Syntactic Sugar for Promises', tasks: ['Write async functions returning promises', 'Execute sequential vs parallel async requests'] }
    ],
    notes: 'Async/await makes asynchronous code read like synchronous code. Always wrap in try/catch to handle rejections.',
    practiceQuestions: ['What does the async keyword return under the hood?', 'How do you run two independent async calls concurrently with async/await?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Fetch API',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Making HTTP Requests', tasks: ['Call fetch(url, options) with GET and POST headers', 'Handle response.ok and response.json()'] },
      { name: 'Cancellation with AbortController', tasks: ['Cancel in-flight requests on component unmount with AbortController signal'] }
    ],
    notes: 'fetch() does NOT reject on HTTP 404 or 500 errors; it only rejects on network failures. Always check response.ok.',
    practiceQuestions: ['Why does fetch() not reject when the server responds with a 404 or 500 error?', 'How do you abort an ongoing fetch request using AbortController?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'Error handling',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Try/Catch/Finally', tasks: ['Handle synchronous and asynchronous exceptions', 'Throw custom Error instances with Error.cause'] }
    ],
    notes: 'The finally block executes unconditionally regardless of whether an exception was thrown or caught.',
    practiceQuestions: ['When does a finally block execute?', 'How does Error cause chaining help debug nested error contexts in production?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'LocalStorage',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Client-Side Key-Value Storage', tasks: ['Use setItem, getItem, removeItem, clear', 'Compare localStorage (persistent), sessionStorage (tab lifetime), and cookies'] }
    ],
    notes: 'LocalStorage is synchronous and capped around 5MB per origin. Values must be serialized as strings.',
    practiceQuestions: ['What are the security risks of storing sensitive JWT auth tokens in localStorage?', 'What happens when quota limit is exceeded in localStorage?']
  },
  {
    module: 'Module 4: JavaScript',
    name: 'JSON',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Serialization & Parsing', tasks: ['Use JSON.stringify(obj, replacer, space)', 'Use JSON.parse(str, reviver) with safe try-catch wrapper'] }
    ],
    notes: 'JSON.stringify ignores undefined, function, and Symbol properties, and serializes NaN to null.',
    practiceQuestions: ['What data types cannot be serialized by JSON.stringify?', 'How do you use the replacer and reviver parameters in JSON methods?']
  },

  // Module 5: TypeScript (10 topics)
  {
    module: 'Module 5: TypeScript',
    name: 'Introduction',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Static Typing for JavaScript', tasks: ['Understand compiler compilation model (tsc, esbuild)', 'Configure tsconfig.json (strict: true, target: ES2022)'] }
    ],
    notes: 'TypeScript is a typed superset of JavaScript that compiles down to plain JavaScript, catching type mismatches at compile time.',
    practiceQuestions: ['What is the runtime performance overhead of TypeScript type annotations?', 'Why should "strict: true" always be enabled in tsconfig.json?']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Types',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Type Annotations & Inferences', tasks: ['Annotate string, number, boolean, arrays, tuples', 'Understand any vs unknown vs never'] }
    ],
    notes: 'Prefer "unknown" over "any" when type is not predetermined. "unknown" enforces type narrowing before property access.',
    practiceQuestions: ['Why is unknown type-safe while any disables the type-checker entirely?', 'What is the "never" type and where is it used?']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Interfaces',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Object Shape Contracts', tasks: ['Define interface with required, optional (?), and readonly properties', 'Extend interfaces with "extends" keyword'] }
    ],
    notes: 'Interfaces can be declaration-merged by defining the same interface name multiple times, useful for library augmentations.',
    practiceQuestions: ['What is declaration merging in TypeScript interfaces?', 'How do optional properties (?) and readonly modifiers work on interfaces?']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Type aliases',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Type Definitions & Unions', tasks: ['Define type aliases for unions ("light" | "dark")', 'Create intersection types (A & B)'] }
    ],
    notes: 'Interfaces are preferred for public API object shapes; type aliases are required for unions, tuples, and primitives.',
    practiceQuestions: ['When should you choose a type alias over an interface in TypeScript?', 'Explain the difference between union types (|) and intersection types (&).']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Functions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Function Type Signatures', tasks: ['Annotate parameter and return types', 'Define function overloading signatures'] }
    ],
    notes: 'Explicitly typing function return types ensures changes to function implementation do not accidentally break calling code.',
    practiceQuestions: ['How do you type a callback function parameter in TypeScript?', 'Write an overloaded function signature in TypeScript.']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Generics',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Parameterized Types', tasks: ['Write generic function <T>(arg: T): T', 'Add generic constraints: <T extends { id: string }>'] },
      { name: 'Utility Types', tasks: ['Master Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, T>'] }
    ],
    notes: 'Generics allow creating reusable components and functions that work across multiple types while preserving type safety.',
    practiceQuestions: ['How does Pick<T, K> differ from Omit<T, K>?', 'Write a generic function that takes an array of items and returns a Record keyed by a specified property.']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Classes',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Class Modifiers & Implements', tasks: ['Use public, private, protected, readonly parameter properties in constructors', 'Implement interfaces with "class Car implements Vehicle"'] }
    ],
    notes: 'TypeScript private modifiers are compile-time only; JavaScript private fields (#field) enforce true runtime privacy.',
    practiceQuestions: ['What is the difference between TypeScript "private" and JavaScript "#private" fields?', 'How does parameter property shorthand simplify constructor boilerplate?']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Type narrowing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Type Guards & Discriminated Unions', tasks: ['Use typeof, instanceof, and "in" operator guards', 'Write custom type guard functions: (val is User)'] },
      { name: 'Discriminated Unions', tasks: ['Define union sharing a common literal discriminator tag (type: "success" | "error")', 'Use exhaustive switch check with never'] }
    ],
    notes: 'Discriminated unions are the cleanest way to model state machines in TypeScript with compile-time exhaustive checks.',
    practiceQuestions: ['Implement an exhaustive switch check using the "never" type.', 'Write a user-defined type guard function (isApiResponse).']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'Modules',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Type Only Imports', tasks: ['Use import type { User } from "./types"', 'Understand ambient module declarations (.d.ts)'] }
    ],
    notes: 'Always use "import type" for types to allow the bundler to strip type-only imports completely from JavaScript output.',
    practiceQuestions: ['Why does "import type" prevent circular dependency bundling issues?', 'What is the role of a .d.ts ambient declaration file?']
  },
  {
    module: 'Module 5: TypeScript',
    name: 'React with TypeScript',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Typing Components & Props', tasks: ['Type props with React.FC or destructured interfaces', 'Type event handlers: React.MouseEvent<HTMLButtonElement>, React.ChangeEvent<HTMLInputElement>'] },
      { name: 'Typing Hooks', tasks: ['Type useState<User | null>(null), useRef<HTMLInputElement>(null)', 'Type generic custom hooks'] }
    ],
    notes: 'Always type useRef with initial null for DOM elements: useRef<HTMLDivElement>(null).',
    practiceQuestions: ['How do you type children props using React.ReactNode?', 'What is the proper type for a form onSubmit event in React with TypeScript?']
  },

  // Module 6: React (20 topics)
  {
    module: 'Module 6: React',
    name: 'React fundamentals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Declarative UI & Virtual DOM', tasks: ['Understand UI as a pure function of state: UI = f(state)', 'Analyze React Fiber reconciler and diffing algorithm'] }
    ],
    notes: 'React builds an in-memory Virtual DOM representation and calculates minimal mutations to apply to the real DOM.',
    practiceQuestions: ['How does React Virtual DOM diffing achieve O(N) reconciliation instead of O(N^3)?', 'What is the component lifecycle in modern functional React?']
  },
  {
    module: 'Module 6: React',
    name: 'JSX',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'JavaScript XML Syntax', tasks: ['Embed JavaScript expressions inside {curly braces}', 'Understand className, htmlFor, style objects, and fragment <> syntax'] }
    ],
    notes: 'JSX is syntax sugar for React.createElement() calls compiled by Babel or SWC.',
    practiceQuestions: ['Why must React components return a single root element or Fragment?', 'How does JSX prevent Cross-Site Scripting (XSS) by default?']
  },
  {
    module: 'Module 6: React',
    name: 'Components',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Functional Components', tasks: ['Build reusable, modular UI components', 'Compose complex page layouts from atomic components'] }
    ],
    notes: 'Component names must start with a capital letter so React distinguishes them from native HTML tags.',
    practiceQuestions: ['Why must React component names start with an uppercase letter?', 'What are the architectural benefits of dumb/presentational vs smart/container components?']
  },
  {
    module: 'Module 6: React',
    name: 'Props',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Unidirectional Data Flow', tasks: ['Pass read-only data from parent to child', 'Provide default prop values with destructuring defaults'] }
    ],
    notes: 'Props are strictly immutable from the child component\'s perspective.',
    practiceQuestions: ['Why should a child component never mutate its own props directly?', 'How do you pass callback functions via props to communicate upwards?']
  },
  {
    module: 'Module 6: React',
    name: 'State',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Component Memory & Re-rendering', tasks: ['Understand state vs props distinction', 'Trigger re-renders via state updates'] }
    ],
    notes: 'State changes trigger re-rendering of the component and all its children unless optimized.',
    practiceQuestions: ['How does React state differ from a regular JavaScript local variable?', 'What happens during React re-rendering?']
  },
  {
    module: 'Module 6: React',
    name: 'Events',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'SyntheticEvent System', tasks: ['Handle onClick, onChange, onSubmit', 'Understand cross-browser SyntheticEvent wrapper normalization'] }
    ],
    notes: 'React wraps native browser events in cross-browser SyntheticEvent objects pooled for efficiency.',
    practiceQuestions: ['What is React SyntheticEvent and why does React use it?', 'How do you pass arguments to an event handler without triggering it immediately?']
  },
  {
    module: 'Module 6: React',
    name: 'Conditional rendering',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Rendering Branches', tasks: ['Use if/else, ternary operators, and logical AND (&&)', 'Avoid "0" rendering bug with count > 0 && <Component />'] }
    ],
    notes: 'Beware of {count && <Component />}: if count is 0, React renders "0" to the screen. Use {count > 0 && ...} instead.',
    practiceQuestions: ['Why does {items.length && <List />} print 0 when items is empty?', 'Show three different ways to conditionally render in React.']
  },
  {
    module: 'Module 6: React',
    name: 'Lists and keys',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'List Rendering & Key Stability', tasks: ['Map arrays to JSX with items.map()', 'Assign stable, unique keys (item.id)'] }
    ],
    notes: 'Never use array indices as keys if the list can be reordered, filtered, or mutated: it causes state misattribution bugs in child components.',
    practiceQuestions: ['What bugs occur when array index is used as a React key?', 'How does React use keys during Virtual DOM reconciliation?']
  },
  {
    module: 'Module 6: React',
    name: 'useState',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'State Hook Mechanics', tasks: ['Declare const [state, setState] = useState(initial)', 'Use functional state updates: setState(prev => prev + 1)'] },
      { name: 'Lazy Initial State', tasks: ['Pass initializer function useState(() => computeHeavyDefault())'] }
    ],
    notes: 'State updates are batched asynchronously. Always use functional updates when new state depends on previous state.',
    practiceQuestions: ['Why should you use setState(prev => prev + 1) instead of setState(state + 1)?', 'What is lazy initial state in useState?']
  },
  {
    module: 'Module 6: React',
    name: 'useEffect',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Synchronizing with External Systems', tasks: ['Manage dependency array [dep1, dep2]', 'Implement cleanup return functions (removeEventListener, clearInterval)'] },
      { name: 'Infinite Loop Traps', tasks: ['Prevent infinite loops caused by unstable object/function dependencies'] }
    ],
    notes: 'Effects run after render and paint. Always return a cleanup function to prevent memory leaks and cancel timers or subscriptions.',
    practiceQuestions: ['Explain the three modes of the dependency array: no array, empty array [], and dependencies [a, b].', 'Why does React 18 Strict Mode run effects twice in development?']
  },
  {
    module: 'Module 6: React',
    name: 'useRef',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Mutable References & DOM Nodes', tasks: ['Access DOM elements directly (inputRef.current.focus())', 'Store mutable instance variables without triggering re-render'] }
    ],
    notes: 'Mutating ref.current does NOT trigger a re-render. Perfect for timers, previous values, and raw DOM nodes.',
    practiceQuestions: ['Contrast useRef vs useState in terms of re-rendering and persistence.', 'How do you store the previous value of a prop using useRef?']
  },
  {
    module: 'Module 6: React',
    name: 'useMemo',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Expensive Computation Memoization', tasks: ['Memoize calculated values: useMemo(() => compute(a), [a])', 'Preserve referential identity of objects passed to children'] }
    ],
    notes: 'Do not overuse useMemo: the overhead of checking dependency arrays can exceed simple computations. Profile before memoizing.',
    practiceQuestions: ['When is useMemo genuinely beneficial versus unnecessary overhead?', 'How does referential inequality trigger child re-renders?']
  },
  {
    module: 'Module 6: React',
    name: 'useCallback',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Function Reference Stability', tasks: ['Memoize callback references: useCallback(fn, deps)', 'Pair with React.memo on child components to skip re-renders'] }
    ],
    notes: 'useCallback(fn, deps) is identical to useMemo(() => fn, deps). Only useful when passing callbacks to optimized memoized children.',
    practiceQuestions: ['Why is useCallback useless on its own without React.memo on the child component?', 'Show the relationship between useMemo and useCallback.']
  },
  {
    module: 'Module 6: React',
    name: 'Context API',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Prop Drilling Elimination', tasks: ['Create context with createContext() and Provider', 'Consume context with useContext() hook'] },
      { name: 'Context Optimization', tasks: ['Split state and dispatch contexts to prevent unnecessary re-renders of consuming components'] }
    ],
    notes: 'All components consuming a context re-render whenever the context value changes. Split large contexts into smaller domain contexts.',
    practiceQuestions: ['How do you avoid unnecessary re-renders when using React Context?', 'Compare React Context with external state managers like Zustand or Redux.']
  },
  {
    module: 'Module 6: React',
    name: 'React Router',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Client-Side Routing', tasks: ['Configure createBrowserRouter, Routes, Route, Outlet', 'Implement dynamic params (useParams), query strings (useSearchParams), and programmatic navigation (useNavigate)'] }
    ],
    notes: 'React Router intercepts link clicks to swap components client-side without performing full browser page reloads.',
    practiceQuestions: ['How does client-side routing preserve application state compared to standard page transitions?', 'What is the role of <Outlet /> in nested routing?']
  },
  {
    module: 'Module 6: React',
    name: 'Forms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Controlled vs Uncontrolled Forms', tasks: ['Implement controlled components with value and onChange', 'Implement uncontrolled forms using FormData and useRef'] },
      { name: 'Form Validation', tasks: ['Validate forms using schema libraries like Zod'] }
    ],
    notes: 'Controlled components synchronize form input state with React state; uncontrolled components let the DOM handle form state natively.',
    practiceQuestions: ['Compare controlled components with uncontrolled components for high-frequency input fields.', 'How does native FormData simplify form submission in React?']
  },
  {
    module: 'Module 6: React',
    name: 'Custom hooks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Hook Composition & Reusability', tasks: ['Extract stateful logic into useLocalStorage, useWindowSize, useDebounce', 'Enforce Rules of Hooks (only call at top level)'] }
    ],
    notes: 'Custom hooks allow extracting stateful logic without duplicating component trees. Hook names must begin with "use".',
    practiceQuestions: ['Write a useDebounce custom hook that delays updating a search term.', 'What are the two mandatory Rules of Hooks enforced by React ESLint?']
  },
  {
    module: 'Module 6: React',
    name: 'State management',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Global State Architecture', tasks: ['Evaluate Zustand, Redux Toolkit, and Jotai', 'Implement a simple, lightweight Zustand store'] }
    ],
    notes: 'Modern React prefers lightweight selector-based state managers (Zustand) over heavy legacy boilerplate.',
    practiceQuestions: ['How does Zustand achieve fine-grained component re-rendering using selectors?', 'When is component-local state preferred over global state?']
  },
  {
    module: 'Module 6: React',
    name: 'API integration',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Data Fetching & Cache Management', tasks: ['Handle Loading, Success, Error states cleanly', 'Understand TanStack Query (React Query) caching, background refetching, and mutations'] }
    ],
    notes: 'Avoid manual data fetching in raw useEffect: use TanStack Query for caching, deduplication, retry logic, and background synchronization.',
    practiceQuestions: ['What are the dangers of fetching data directly inside useEffect without deduplication?', 'How does TanStack Query handle stale-while-revalidate caching?']
  },
  {
    module: 'Module 6: React',
    name: 'React project development',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Full Component Architecture', tasks: ['Structure scalable folders (components, hooks, services, types)', 'Implement complete responsive UI with state and API synchronization'] }
    ],
    notes: 'Maintain strict component modularity, separation of business logic into hooks, and explicit TypeScript prop interfaces.',
    practiceQuestions: ['Design the file and folder architecture for an enterprise React application.', 'How do you handle global error boundaries in React using componentDidCatch?']
  },

  // Module 7: Next.js (11 topics)
  {
    module: 'Module 7: Next.js',
    name: 'Introduction',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The React Framework for Production', tasks: ['Understand hybrid rendering: SSR, SSG, ISR, Client Components', 'Inspect Turbopack build system and Next.js advantages'] }
    ],
    notes: 'Next.js provides full-stack capabilities, automated code-splitting, image optimization, server-side rendering, and API routes.',
    practiceQuestions: ['What problems does Next.js solve compared to a raw Vite React SPA?', 'Explain Incremental Static Regeneration (ISR).']
  },
  {
    module: 'Module 7: Next.js',
    name: 'App Router',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Directory-Based Architecture', tasks: ['Structure app/ folder with page.tsx, layout.tsx, loading.tsx, error.tsx', 'Understand colocation of private components in route folders'] }
    ],
    notes: 'In Next.js App Router, routes are defined by directories containing a page.tsx file.',
    practiceQuestions: ['How does App Router differ fundamentally from the legacy Pages Router?', 'What special files exist in an App Router route segment?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Routing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Dynamic & Parallel Routes', tasks: ['Implement dynamic segments app/blog/[slug]/page.tsx', 'Use route groups (group) to organize without altering URL paths'] }
    ],
    notes: 'Route groups wrapped in parentheses (marketing) organize files without adding path segments to the browser URL.',
    practiceQuestions: ['How do catch-all segments [...slug] and [[...slug]] differ in Next.js?', 'What are route groups used for in App Router?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Layouts',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Nested Layout Hierarchies', tasks: ['Build root layout with <html> and <body>', 'Create nested sub-layouts that preserve state on route changes'] }
    ],
    notes: 'Layouts do NOT unmount or re-render when navigating between sibling routes, preserving client-side UI state.',
    practiceQuestions: ['Why do layouts preserve scroll position and component state during navigation?', 'What is the difference between a layout.tsx and a template.tsx?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Server components',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'React Server Components (RSC)', tasks: ['Understand default server execution (zero client JavaScript bundle)', 'Fetch databases and secure credentials directly inside RSC'] }
    ],
    notes: 'By default, all components inside App Router are React Server Components. They cannot use useState, useEffect, or browser APIs.',
    practiceQuestions: ['What are the performance advantages of React Server Components?', 'Can a Server Component import and render a Client Component? Can the reverse happen?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Client components',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: '"use client" Directive', tasks: ['Place "use client" boundary at the top of interactive files', 'Push client boundaries down to leaf nodes to maximize server rendering'] }
    ],
    notes: '"use client" marks the boundary where code is included in the client JavaScript bundle. Keep client components as small leaf components.',
    practiceQuestions: ['Why should you push "use client" directives as far down the component tree as possible?', 'Does a Client Component execute exclusively on the client? (Hint: initial SSR).']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Data fetching',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Native Async Components & Caching', tasks: ['Fetch data with async function Page() using extended fetch()', 'Control cache with fetch(url, { next: { revalidate: 3600 } })'] }
    ],
    notes: 'Server Components support async/await natively for data fetching directly in the component body without hooks.',
    practiceQuestions: ['How does Next.js extend the standard Web Fetch API for caching?', 'Explain on-demand revalidation using revalidatePath and revalidateTag.']
  },
  {
    module: 'Module 7: Next.js',
    name: 'API routes',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Route Handlers (route.ts)', tasks: ['Export named functions: GET, POST, PUT, DELETE, PATCH', 'Return Response.json(data) with appropriate status codes'] }
    ],
    notes: 'Route handlers replace legacy API routes in App Router and execute in a Node.js or Edge runtime.',
    practiceQuestions: ['How do Route Handlers handle different HTTP methods in route.ts?', 'How do you switch a route handler to run on Edge runtime instead of Node?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Authentication',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Session & Auth Architecture', tasks: ['Implement NextAuth / Auth.js or OAuth sessions', 'Protect routes using Next.js Middleware (middleware.ts)'] }
    ],
    notes: 'Middleware runs at the edge before route matching, enabling instant authentication redirection without rendering pages.',
    practiceQuestions: ['How does Next.js middleware intercept requests for authentication protection?', 'Why should JWT verification in middleware use lightweight Web Crypto APIs?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Metadata and SEO',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Dynamic Metadata & Social Cards', tasks: ['Export const metadata: Metadata object in layout/page', 'Generate dynamic metadata with generateMetadata({ params })'] }
    ],
    notes: 'Next.js automatically renders <title>, <meta description>, OpenGraph, and Twitter cards server-side for maximum search indexing.',
    practiceQuestions: ['How do you generate dynamic OpenGraph image previews in Next.js using ImageResponse?', 'What is the precedence of metadata in nested layout and page hierarchies?']
  },
  {
    module: 'Module 7: Next.js',
    name: 'Deployment',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Vercel, Docker, & Cloud Run', tasks: ['Build standalone output with output: "standalone" in next.config.js', 'Deploy containerized Next.js on Google Cloud Run'] }
    ],
    notes: 'standalone mode copies only essential node_modules, reducing production Docker container image sizes from 1GB to <100MB.',
    practiceQuestions: ['How does "output: standalone" optimize Next.js Docker images?', 'What environment variables are required during build time versus runtime in Next.js?']
  },

  // Module 8: Backend Development (14 topics)
  {
    module: 'Module 8: Backend Development',
    name: 'Node.js',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'V8 Engine & Event Loop', tasks: ['Trace Event Loop phases: Timers, Pending Callbacks, Poll, Check (setImmediate), Close', 'Understand non-blocking asynchronous I/O and worker threads'] }
    ],
    notes: 'Node.js uses a single-threaded event loop with libuv handling background file and network I/O through thread pools.',
    practiceQuestions: ['Diagram the phases of the Node.js Event Loop.', 'Why should CPU-intensive operations not run directly on the main Node.js event loop thread?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'npm',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Package Management & SemVer', tasks: ['Understand semantic versioning (Major.Minor.Patch)', 'Inspect package-lock.json and difference between dependencies and devDependencies'] }
    ],
    notes: 'Always commit package-lock.json to version control to guarantee deterministic, reproducible dependency trees across environments.',
    practiceQuestions: ['What is the difference between ~ (tilde) and ^ (caret) in package.json version ranges?', 'Why is "npm ci" preferred over "npm install" in CI/CD build pipelines?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Express.js',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Minimalist Web Framework', tasks: ['Initialize app = express()', 'Configure listen(PORT) and app.use() pipeline'] }
    ],
    notes: 'Express is an unopinionated routing and middleware web framework for Node.js.',
    practiceQuestions: ['What is the execution order of Express middleware functions?', 'How does Express handle 404 routes and uncaught exceptions?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'REST APIs',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Resource-Oriented Design', tasks: ['Design pluralized resource URIs: /api/v1/users/:id/orders', 'Maintain stateless, predictable RESTful conventions'] }
    ],
    notes: 'REST treats everything as resources identified by URIs and operated on via standard HTTP verbs.',
    practiceQuestions: ['Explain the 6 architectural constraints of REST.', 'Why is /getUsers an anti-pattern in RESTful design?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'HTTP methods',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'CRUD Mapping & Idempotency', tasks: ['Map GET (Read), POST (Create), PUT (Replace), PATCH (Partial Update), DELETE (Remove)', 'Understand idempotent vs safe HTTP methods'] }
    ],
    notes: 'GET, PUT, and DELETE are idempotent (calling them multiple times yields the same state); POST is non-idempotent.',
    practiceQuestions: ['What does idempotency mean in HTTP methods?', 'Compare PUT vs PATCH for updating a user entity.']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Routing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Modular Express Routers', tasks: ['Create express.Router() modules', 'Mount sub-routers with app.use("/api/v1/products", productRouter)'] }
    ],
    notes: 'Separate concerns by dividing endpoints into individual router files for each domain resource.',
    practiceQuestions: ['How does express.Router() enable modular application architecture?', 'How do route parameter validators work in Express?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Middleware',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Request/Response Interceptors', tasks: ['Write custom (req, res, next) functions', 'Understand express.json(), cors(), and helmet()'] }
    ],
    notes: 'Always invoke next() in custom middleware unless terminating the request with res.send() / res.json().',
    practiceQuestions: ['What happens if a custom middleware forgets to call next()? ', 'How do error-handling middleware signatures differ from standard middleware in Express?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Authentication',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Credential Verification', tasks: ['Hash passwords using bcrypt / argon2 with cryptographic salt', 'Prevent timing attacks on password verification'] }
    ],
    notes: 'Never store plain text passwords. Always use modern salted hashing algorithms like Argon2 or bcrypt with high work factors.',
    practiceQuestions: ['Why is MD5 or SHA-256 unsuitable for storing user passwords?', 'What is a salt and how does it prevent rainbow table attacks?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Authorization',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Role-Based Access Control (RBAC)', tasks: ['Enforce user roles (admin, manager, member)', 'Implement permission-checking middleware before protected routes'] }
    ],
    notes: 'Authentication verifies WHO you are; Authorization determines WHAT you are allowed to do.',
    practiceQuestions: ['Distinguish between RBAC (Role-Based) and ABAC (Attribute-Based) access control.', 'Write an Express middleware to guard routes for users with "admin" role.']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'JWT',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'JSON Web Tokens', tasks: ['Inspect Header.Payload.Signature structure', 'Implement short-lived access tokens and httpOnly refresh tokens'] }
    ],
    notes: 'JWTs are signed, not encrypted (payload is easily base64-decoded). Store refresh tokens in httpOnly, Secure, SameSite=Strict cookies.',
    practiceQuestions: ['Why is JWT payload readable by anyone with the token?', 'How does the refresh token rotation pattern prevent replay attacks?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Input validation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Schema Validation', tasks: ['Validate incoming request bodies using Zod schemas', 'Sanitize and reject malicious unexpected input parameters'] }
    ],
    notes: 'Never trust client input. Validate request payload against strict schemas before hitting database or business logic.',
    practiceQuestions: ['How does schema-based validation prevent parameter injection attacks?', 'Write an Express middleware validating a user registration body with Zod.']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'Error handling',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Centralized Error Middleware', tasks: ['Implement 4-parameter error middleware: (err, req, res, next)', 'Normalize error JSON responses and suppress stack traces in production'] }
    ],
    notes: 'Never leak database query errors or stack traces to clients in production: log internally and return user-friendly messages.',
    practiceQuestions: ['Why must Express error-handling middleware declare all 4 parameters: (err, req, res, next)?', 'How do you handle unhandled promise rejections globally in Node.js?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'File uploads',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Multipart Form Handling', tasks: ['Configure multer middleware for file upload processing', 'Validate file mime-type, size limits, and stream to Cloud Storage buckets'] }
    ],
    notes: 'Do not save file uploads to the local container disk in production; stream them directly to Google Cloud Storage or S3.',
    practiceQuestions: ['Why should uploaded files not be stored on ephemeral cloud container filesystems?', 'How do you validate file types safely beyond checking the file extension?']
  },
  {
    module: 'Module 8: Backend Development',
    name: 'API security',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Hardening & Rate Limiting', tasks: ['Configure helmet for security headers (HSTS, CSP, X-Frame-Options)', 'Implement IP-based rate limiting with express-rate-limit'] }
    ],
    notes: 'Apply CORS policies, rate limiting, secure HTTP headers, and body size limits to prevent Denial of Service (DoS).',
    practiceQuestions: ['What security headers does Helmet configure and what attacks do they prevent?', 'How does rate limiting mitigate brute-force and DDoS attacks?']
  },

  // Module 9: Databases (13 topics)
  {
    module: 'Module 9: Databases',
    name: 'Database fundamentals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'ACID Properties & DBMS Architecture', tasks: ['Understand Atomicity, Consistency, Isolation, Durability', 'Compare Relational (RDBMS) vs Non-Relational (NoSQL)'] }
    ],
    notes: 'ACID guarantees database transaction reliability despite system failures, power outages, and concurrency.',
    practiceQuestions: ['Explain the four ACID properties with a bank transaction example.', 'What is the CAP theorem and what tradeoffs does it describe for distributed databases?']
  },
  {
    module: 'Module 9: Databases',
    name: 'SQL',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Structured Query Language', tasks: ['Write SELECT, INSERT, UPDATE, DELETE queries', 'Use WHERE, ORDER BY, GROUP BY, HAVING, and aggregate functions (COUNT, SUM, AVG)'] }
    ],
    notes: 'WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY.',
    practiceQuestions: ['What is the difference between WHERE and HAVING in SQL?', 'Write a SQL query finding users who placed more than 5 orders.']
  },
  {
    module: 'Module 9: Databases',
    name: 'PostgreSQL',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Advanced Open-Source RDBMS', tasks: ['Leverage JSONB columns for flexible semi-structured data', 'Configure sequences, UUID primary keys, and ENUM types'] }
    ],
    notes: 'PostgreSQL is known for strict SQL standards compliance, robust concurrency (MVCC), and JSONB indexing.',
    practiceQuestions: ['How does JSONB in PostgreSQL provide the flexibility of NoSQL inside a relational database?', 'What is Multi-Version Concurrency Control (MVCC) in PostgreSQL?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Tables',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Schema Definition (DDL)', tasks: ['Create tables with CREATE TABLE', 'Enforce column constraints: PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK'] }
    ],
    notes: 'Use UUID or BigInt for primary keys. Apply CHECK constraints to enforce business rules directly at the database layer.',
    practiceQuestions: ['What are the advantages of UUID v4 or v7 primary keys over auto-incrementing integer IDs?', 'How does a CHECK constraint enforce data validation in PostgreSQL?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Relationships',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Data Cardinality', tasks: ['Model One-to-One, One-to-Many, Many-to-Many', 'Configure FOREIGN KEY with ON DELETE CASCADE or ON DELETE RESTRICT'] }
    ],
    notes: 'Many-to-Many relationships require a join/junction table containing foreign keys referencing both primary tables.',
    practiceQuestions: ['How is a Many-to-Many relationship modeled in a relational database?', 'What is the difference between ON DELETE CASCADE and ON DELETE SET NULL?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Joins',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Combining Datasets', tasks: ['Master INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN', 'Avoid accidental Cartesian products (CROSS JOIN)'] }
    ],
    notes: 'INNER JOIN returns only rows with matches in both tables; LEFT JOIN preserves all rows from the left table.',
    practiceQuestions: ['Compare INNER JOIN vs LEFT JOIN with a customers and orders example.', 'Write a query returning all customers who have never placed an order.']
  },
  {
    module: 'Module 9: Databases',
    name: 'Indexes',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'B-Tree & Query Optimization', tasks: ['Create B-Tree indexes on frequently filtered columns', 'Analyze query plans with EXPLAIN ANALYZE'] }
    ],
    notes: 'Indexes speed up SELECT queries from O(N) sequential scans to O(log N), but add overhead to INSERT and UPDATE operations.',
    practiceQuestions: ['Why does an index speed up reads but slow down writes?', 'How do composite indexes work and what is the leftmost prefix rule?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Normalization',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Database Normal Forms', tasks: ['Apply First Normal Form (1NF: atomic values)', 'Apply 2NF (no partial dependencies) and 3NF (no transitive dependencies)'] }
    ],
    notes: 'Normalization eliminates redundant duplicate data and prevents update anomalies. Denormalization is applied intentionally for read speed.',
    practiceQuestions: ['Define 1NF, 2NF, and 3NF.', 'When is intentional denormalization justified in production?']
  },
  {
    module: 'Module 9: Databases',
    name: 'CRUD',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Data Manipulation (DML)', tasks: ['Execute Create, Read, Update, Delete queries safely with parameterized statements'] }
    ],
    notes: 'Always use parameterized queries ($1, $2) to eliminate SQL injection vulnerabilities completely.',
    practiceQuestions: ['Why does string concatenation in SQL queries lead to SQL injection?', 'How do parameterized queries protect against injection attacks?']
  },
  {
    module: 'Module 9: Databases',
    name: 'MongoDB',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Document-Oriented Database', tasks: ['Understand BSON document model and collections', 'Perform CRUD with find(), insertOne(), updateOne(), deleteOne()'] }
    ],
    notes: 'MongoDB stores JSON-like BSON documents without rigid schema constraints, making it flexible for rapidly changing schemas.',
    practiceQuestions: ['What are the architectural differences between MongoDB and PostgreSQL?', 'What is the MongoDB Aggregation Pipeline?']
  },
  {
    module: 'Module 9: Databases',
    name: 'NoSQL',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Non-Relational Categories', tasks: ['Compare Document (MongoDB), Key-Value (Redis), Columnar (Cassandra), Graph (Neo4j)', 'Select appropriate storage engine by access patterns'] }
    ],
    notes: 'Use NoSQL when horizontal scaling, flexible document schemas, or high-throughput caching (Redis) are paramount.',
    practiceQuestions: ['When should Redis be selected as an in-memory database or cache?', 'What are the trade-offs of BASE consistency vs ACID?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Schema design',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Data Modeling & ER Diagrams', tasks: ['Draw Entity-Relationship diagrams', 'Balance normalization vs query access pattern performance'] }
    ],
    notes: 'Design relational schemas around business relationships, while designing NoSQL schemas around specific query access patterns.',
    practiceQuestions: ['Design the relational database schema for an e-commerce platform with products, orders, items, and users.', 'How do you decide between embedding vs referencing in MongoDB?']
  },
  {
    module: 'Module 9: Databases',
    name: 'Database integration',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'ORMs & Connection Pooling', tasks: ['Integrate Prisma or Drizzle ORM in TypeScript', 'Manage database connection pools to prevent connection starvation'] }
    ],
    notes: 'Connection pools maintain a pool of reusable database connections, preventing the high overhead of establishing a new TCP connection on every request.',
    practiceQuestions: ['Why is connection pooling critical in serverless architectures?', 'Compare type-safe query builders (Drizzle) with heavyweight ORMs (Prisma).']
  },

  // Module 10: Developer Tools (9 topics)
  {
    module: 'Module 10: Developer Tools',
    name: 'Git',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Core Git Mechanics', tasks: ['Understand commit graphs, staging area, and HEAD pointer', 'Master git status, git diff, git commit, git branch'] }
    ],
    notes: 'Git is a distributed content-addressable version control system tracking snapshots of file trees.',
    practiceQuestions: ['Explain the three areas in Git: Working Directory, Staging Area, Repository.', 'What is the HEAD pointer in Git?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'GitHub',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Collaborative Workflows', tasks: ['Configure remotes, branches, pull requests', 'Set up GitHub Actions CI/CD workflows and branch protection rules'] }
    ],
    notes: 'Protect main branches by requiring pull request reviews and passing CI checks before merging.',
    practiceQuestions: ['How do GitHub branch protection rules prevent defective code from reaching production?', 'What is a GitHub Actions workflow and how is it triggered?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'VS Code',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Developer Productivity', tasks: ['Configure ESLint, Prettier, and Tailwind CSS IntelliSense', 'Configure multi-cursor shortcuts and launch.json debugging'] }
    ],
    notes: 'Automate code formatting on save with Prettier to eliminate code style debates during reviews.',
    practiceQuestions: ['How do you configure VS Code to format on save with Prettier?', 'What are the top three VS Code extensions for professional web development?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'Terminal',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Command-Line Fluency', tasks: ['Navigate file trees, manage processes, and chain commands', 'Use bash aliases, history expansion, and environment exports'] }
    ],
    notes: 'CLI speed directly translates to engineering productivity: master terminal navigation without touching the mouse.',
    practiceQuestions: ['What is the difference between stdout (1) and stderr (2) redirection in bash?', 'How do you create a persistent bash alias in ~/.bashrc?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'Linux',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Server Operating System Foundations', tasks: ['Understand file permissions (chmod, chown)', 'Inspect server memory, CPU, and disk usage with free, top, df'] }
    ],
    notes: 'Almost all cloud containers and servers run Linux: understanding permissions and process signals is essential.',
    practiceQuestions: ['What do octal permissions 755 and 644 mean?', 'How do you kill a background process hanging on port 3000?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'Browser DevTools',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Inspection & Performance Profiling', tasks: ['Inspect DOM & CSS in Elements tab', 'Analyze network requests, waterfall timing, and headers in Network tab', 'Profile JavaScript execution and memory leaks in Performance tab'] }
    ],
    notes: 'Use the Network tab to debug slow TTFB, uncompressed assets, and excessive payload sizes.',
    practiceQuestions: ['How do you simulate throttled 3G network conditions in Browser DevTools?', 'What does the Performance tab flame graph show during a slow animation?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'npm and package management',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Dependency Governance', tasks: ['Audit security vulnerabilities with npm audit', 'Understand npx execution and pnpm hard-link optimization'] }
    ],
    notes: 'pnpm uses hard links from a global content-addressable store to save disk space and accelerate installs.',
    practiceQuestions: ['How does pnpm differ from npm in storage and installation speed?', 'What does npx do and why does it not permanently install packages?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'Environment variables',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Secret & Configuration Management', tasks: ['Manage .env files with dotenv', 'Differentiate client-exposed (VITE_*, NEXT_PUBLIC_*) vs secret server variables'] }
    ],
    notes: 'Never prefix private secret keys (database URLs, API keys) with VITE_ or NEXT_PUBLIC_: this bakes them into public client bundles!',
    practiceQuestions: ['Why must private secrets never be prefixed with NEXT_PUBLIC_ or VITE_?', 'What is the purpose of committing a .env.example file to git?']
  },
  {
    module: 'Module 10: Developer Tools',
    name: 'Debugging',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Methodical Troubleshooting', tasks: ['Use breakpoints and debugger statements in VS Code and DevTools', 'Inspect call stacks, scope variables, and conditional breakpoints'] }
    ],
    notes: 'Replace console.log with interactive breakpoints to inspect live state and step through execution line by line.',
    practiceQuestions: ['How do conditional breakpoints save time when debugging large loops?', 'What does the "debugger;" statement do in browser JavaScript?']
  },

  // Module 11: Testing (8 topics)
  {
    module: 'Module 11: Testing',
    name: 'Testing fundamentals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The Testing Pyramid', tasks: ['Compare Unit Tests, Integration Tests, and E2E Tests', 'Evaluate testing ROI and test coverage metrics'] }
    ],
    notes: 'The Testing Pyramid prioritizes many fast unit tests, fewer integration tests, and a focused suite of high-confidence E2E tests.',
    practiceQuestions: ['Diagram the Testing Pyramid and explain why unit tests should outnumber E2E tests.', 'What is the risk of having 100% test coverage that tests only implementation details?']
  },
  {
    module: 'Module 11: Testing',
    name: 'Unit testing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Testing Isolated Units', tasks: ['Write tests for pure functions and utility algorithms', 'Follow Arrange-Act-Assert (AAA) pattern'] }
    ],
    notes: 'Unit tests verify that a single module or function behaves correctly in isolation with external dependencies mocked.',
    practiceQuestions: ['Explain the Arrange-Act-Assert (AAA) testing pattern.', 'Why are pure functions the easiest units of code to test?']
  },
  {
    module: 'Module 11: Testing',
    name: 'Integration testing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Testing Interacting Modules', tasks: ['Test API endpoints with supertest', 'Verify database queries and middleware chains together'] }
    ],
    notes: 'Integration tests catch mismatches at module boundaries where individual unit tests passed.',
    practiceQuestions: ['How do you test an Express API endpoint using supertest?', 'Should integration tests use an in-memory database or a real test database container?']
  },
  {
    module: 'Module 11: Testing',
    name: 'End-to-end testing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Simulating User Journeys', tasks: ['Automate real browser flows from login to checkout', 'Run headless tests in continuous integration pipelines'] }
    ],
    notes: 'E2E tests simulate genuine user interactions in headless browsers, providing the highest confidence of system integrity.',
    practiceQuestions: ['What are the trade-offs of E2E tests in terms of speed, flakiness, and maintenance?', 'How do you handle authentication in E2E tests without logging in on every test case?']
  },
  {
    module: 'Module 11: Testing',
    name: 'Jest or Vitest',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Modern Test Runners', tasks: ['Write test suites: describe(), test(), it()', 'Use assertions: expect().toBe(), toEqual(), toThrow()'] }
    ],
    notes: 'Vitest shares Vite\'s pipeline and configuration, executing ESM tests up to 10x faster than legacy Jest without Babel transformation.',
    practiceQuestions: ['Why is Vitest significantly faster than Jest in Vite projects?', 'What is the difference between toBe() and toEqual() in Vitest/Jest?']
  },
  {
    module: 'Module 11: Testing',
    name: 'React Testing Library',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'User-Centric Component Testing', tasks: ['Query elements by accessible role: screen.getByRole("button")', 'Simulate user typing and clicks with userEvent'] }
    ],
    notes: '"The more your tests resemble the way your software is used, the more confidence they can give you." Never test internal state or implementation details.',
    practiceQuestions: ['Why does React Testing Library prioritize getByRole over test-ids?', 'How do you test asynchronous state changes in RTL using waitFor() or findBy* queries?']
  },
  {
    module: 'Module 11: Testing',
    name: 'Playwright',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Cross-Browser E2E Automation', tasks: ['Automate Chromium, Firefox, WebKit tests in parallel', 'Use Playwright Codegen and trace viewer to debug test failures'] }
    ],
    notes: 'Playwright automatically waits for elements to be actionable before performing clicks, eliminating arbitrary sleep timeouts.',
    practiceQuestions: ['How does Playwright auto-waiting eliminate flaky tests?', 'What is the Playwright Trace Viewer and how does it help debug CI failures?']
  },
  {
    module: 'Module 11: Testing',
    name: 'Debugging and test coverage',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Coverage Reports & Flake Elimination', tasks: ['Generate Istanbul/c8 coverage reports', 'Identify un-tested branches and eradicate test flakiness'] }
    ],
    notes: 'Focus test coverage on critical business paths, financial logic, and security authorization rather than trivial UI getters.',
    practiceQuestions: ['What does branch coverage measure compared to line coverage?', 'What are the main causes of test flakiness in web test suites?']
  },

  // Module 12: Professional Web Development (15 topics)
  {
    module: 'Module 12: Professional Web Development',
    name: 'Web accessibility',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'WCAG 2.2 AA Compliance', tasks: ['Ensure color contrast meets 4.5:1 for body and 3:1 for large text', 'Provide visible focus rings and skip-to-content links'] }
    ],
    notes: 'Accessibility is a legal and ethical requirement: ensure every interactive flow is fully operable via keyboard alone.',
    practiceQuestions: ['What is the purpose of a "Skip to Content" accessibility link?', 'How do you test WCAG color contrast programmatically?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Responsive design',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Adaptive Breakpoint Architecture', tasks: ['Support mobile, tablet, desktop, and ultrawide viewports seamlessly', 'Test touch targets are at least 44x44px on mobile'] }
    ],
    notes: 'Touch targets must be >= 44x44px with adequate spacing to prevent accidental mis-taps on mobile touchscreens.',
    practiceQuestions: ['Why does WCAG require touch targets to be at least 44x44 CSS pixels?', 'How do you handle horizontal scrolling data tables gracefully on small viewports?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Performance optimization',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Runtime & Load Optimization', tasks: ['Implement code-splitting and dynamic import()', 'Minify assets, compress with Brotli, and eliminate layout thrashing'] }
    ],
    notes: 'Code-splitting divides large bundles into smaller chunks loaded on-demand, reducing initial JavaScript parse and execution time.',
    practiceQuestions: ['What is layout thrashing and how can batching DOM reads and writes prevent it?', 'How does Brotli compression compare to Gzip for web assets?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Core Web Vitals',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Google Performance Metrics', tasks: ['Optimize LCP (Largest Contentful Paint < 2.5s)', 'Optimize INP (Interaction to Next Paint < 200ms)', 'Optimize CLS (Cumulative Layout Shift < 0.1)'] }
    ],
    notes: 'Google uses Core Web Vitals (LCP, INP, CLS) as direct search ranking signals. Reserve aspect ratio space for images to eliminate CLS.',
    practiceQuestions: ['Explain the three Google Core Web Vitals and their acceptable thresholds.', 'What causes high Cumulative Layout Shift (CLS) and how is it fixed?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'SEO',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Search Engine Optimization', tasks: ['Generate sitemap.xml and robots.txt', 'Configure OpenGraph tags, canonical URLs, and JSON-LD structured data'] }
    ],
    notes: 'JSON-LD structured data enables rich search results (snippets, ratings, breadcrumbs) in Google Search.',
    practiceQuestions: ['What is the purpose of a rel="canonical" link tag?', 'Write a minimal JSON-LD Schema.org markup for an article or product.']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Web security',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'OWASP Top 10 Defenses', tasks: ['Review OWASP Top 10 vulnerabilities', 'Enforce Content Security Policy (CSP) headers to block untrusted scripts'] }
    ],
    notes: 'Content Security Policy (CSP) restricts what external origins can load scripts, styles, or iframes on your domain.',
    practiceQuestions: ['What is Content Security Policy (CSP) and how does it prevent script injection?', 'What are the top three vulnerabilities in the OWASP Top 10?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'XSS',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Cross-Site Scripting Defenses', tasks: ['Differentiate Stored, Reflected, and DOM-based XSS', 'Sanitize HTML input using DOMPurify before rendering'] }
    ],
    notes: 'React escapes strings by default; never use dangerouslySetInnerHTML without passing user input through DOMPurify.',
    practiceQuestions: ['Explain Stored vs Reflected vs DOM-based XSS.', 'Why is dangerouslySetInnerHTML dangerous in React without sanitization?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'CSRF',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Cross-Site Request Forgery Defenses', tasks: ['Configure SameSite=Strict / Lax cookie attributes', 'Implement anti-CSRF synchronizer tokens for state-changing POST requests'] }
    ],
    notes: 'SameSite=Lax/Strict cookies prevent browsers from sending session cookies along with cross-site third-party requests.',
    practiceQuestions: ['How does a CSRF attack trick a browser into executing unauthorized actions?', 'How does SameSite=Strict cookie policy mitigate CSRF?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'SQL injection',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Injection Vulnerability Remediation', tasks: ['Identify vulnerable concatenated SQL queries', 'Enforce prepared statements and ORM abstraction layers'] }
    ],
    notes: 'Parameterized queries compile the SQL command structure before binding parameters as literals, making injection impossible.',
    practiceQuestions: ['Demonstrate how \' OR \'1\'=\'1 bypasses naive authentication SQL.', 'Why are parameterized statements completely immune to SQL injection?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Authentication security',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Modern Auth Protection', tasks: ['Implement Multi-Factor Authentication (MFA / TOTP)', 'Enforce password complexity, account lockout policies, and session revoking'] }
    ],
    notes: 'Store TOTP secret seeds securely and provide one-time recovery backup codes for two-factor authentication.',
    practiceQuestions: ['How does Time-based One-Time Password (TOTP) algorithm work (RFC 6238)?', 'How do you implement account lockout to prevent brute-force credential stuffing?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Progressive Web Apps',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'PWA Standards', tasks: ['Create web app manifest (manifest.json) with icons', 'Register Service Worker for offline asset caching (Cache API)'] }
    ],
    notes: 'PWAs allow web applications to be installed on home screens and work offline through service worker caching.',
    practiceQuestions: ['What are the requirements for a web app to trigger the browser PWA install prompt?', 'Explain the service worker lifecycle: Register, Install, Activate.']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'CI/CD',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Automated Delivery Pipelines', tasks: ['Configure GitHub Actions pipeline: Lint -> Test -> Build -> Deploy', 'Configure branch protection and deployment environments'] }
    ],
    notes: 'Continuous Integration verifies that code passes linting, tests, and builds on every pull request before merging.',
    practiceQuestions: ['What is the difference between Continuous Delivery and Continuous Deployment?', 'Write a GitHub Actions YAML workflow that runs linting and automated unit tests.']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Deployment',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Production Hosting Strategies', tasks: ['Deploy single-page apps to Cloud Run, Netlify, or Vercel', 'Configure custom domains, SSL certificates, and zero-downtime rolling deploys'] }
    ],
    notes: 'Rolling deployments launch new container instances before draining traffic from old instances, achieving zero downtime.',
    practiceQuestions: ['What is blue-green deployment and how does it prevent deployment downtime?', 'How do SPA fallback rules (redirect 404 to index.html) work on static hosting?']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Cloud fundamentals',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Google Cloud Platform & AWS', tasks: ['Understand Compute (Cloud Run, Compute Engine), Storage (Cloud Storage), Database (Cloud SQL)', 'Learn IAM permissions and service accounts'] }
    ],
    notes: 'Cloud Run provides fully managed serverless containers that automatically scale to zero when idle, saving costs.',
    practiceQuestions: ['What are the advantages of containerized serverless hosting (Cloud Run)?', 'Explain the principle of least privilege in Cloud IAM service accounts.']
  },
  {
    module: 'Module 12: Professional Web Development',
    name: 'Documentation',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Technical Communication', tasks: ['Write comprehensive README.md with setup instructions', 'Document REST APIs with OpenAPI / Swagger specifications'] }
    ],
    notes: 'Great software with poor documentation will not be used. Provide minimal, copy-pasteable setup steps.',
    practiceQuestions: ['What are the essential sections of a professional software repository README?', 'What is the OpenAPI specification and how does Swagger UI visualize it?']
  },

  // Module 13: Computer Science for Software Engineering (11 topics)
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Data structures',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Fundamental Structures', tasks: ['Review Arrays, Hash Tables, Linked Lists, Trees, Graphs, Stacks, Queues', 'Select optimal structure based on time/space tradeoffs'] }
    ],
    notes: 'Know the operational time complexity of every fundamental structure for search, insertion, and deletion.',
    practiceQuestions: ['Compare the lookup, insertion, and deletion time complexity of an Array vs a Hash Table.', 'When is a Trie preferred over a Hash Table for string prefix lookups?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Algorithms',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 80,
    subtopics: [
      { name: 'Algorithmic Paradigms', tasks: ['Master Two Pointers, Sliding Window, BFS, DFS, Binary Search, Dynamic Programming'] }
    ],
    notes: 'Recognizing algorithmic patterns (e.g. sliding window for contiguous subarrays) is the key to solving interview problems.',
    practiceQuestions: ['How do you recognize whether a problem should be solved via Dynamic Programming versus Greedy?', 'Explain the Two Pointers pattern with a sorted array problem.']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Complexity analysis',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Asymptotic Math', tasks: ['Calculate Big O time and space complexity of code snippets', 'Analyze recursive call stack memory limits'] }
    ],
    notes: 'Always state both time and space complexity clearly before writing code in engineering interviews.',
    practiceQuestions: ['What is the time and space complexity of traversing a binary tree of N nodes?', 'Why is an algorithm with O(1) auxiliary space called an in-place algorithm?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Operating systems',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'OS Concepts', tasks: ['Understand Processes vs Threads, Context Switching, Deadlocks', 'Learn Virtual Memory, Paging, and Memory Thrashing'] }
    ],
    notes: 'Threads within the same process share memory space; separate processes have isolated virtual address spaces.',
    practiceQuestions: ['What is the difference between a process and a thread?', 'What are the four necessary conditions for a deadlock to occur?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Computer networks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Networking Protocols', tasks: ['Trace TCP 3-way handshake and 4-way termination', 'Compare TCP (reliable, ordered) vs UDP (low latency, connectionless)'] }
    ],
    notes: 'TCP guarantees reliable, ordered packet delivery with congestion control; UDP delivers packets with minimum latency without guarantees.',
    practiceQuestions: ['Diagram the TCP 3-way handshake (SYN, SYN-ACK, ACK).', 'Why do video conferencing and gaming protocols prefer UDP over TCP?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Database management systems',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Storage Engines & Transactions', tasks: ['Understand Write-Ahead Logging (WAL) and B-Tree disk layout', 'Analyze isolation levels (Read Committed, Repeatable Read, Serializable)'] }
    ],
    notes: 'Databases append mutations to a Write-Ahead Log (WAL) on disk before updating in-memory pages to guarantee durability.',
    practiceQuestions: ['What is Write-Ahead Logging (WAL) and how does it guarantee durability?', 'Explain dirty reads, non-repeatable reads, and phantom reads.']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Object-oriented design',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'SOLID Principles & Design Patterns', tasks: ['Apply Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion', 'Implement Factory, Singleton, Strategy, Observer patterns'] }
    ],
    notes: 'SOLID principles guide object-oriented design to make software maintainable, extensible, and testable over time.',
    practiceQuestions: ['Explain the Dependency Inversion Principle with a concrete code example.', 'How does the Strategy pattern replace complex if-else conditional trees?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Software engineering principles',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Engineering Philosophy', tasks: ['Apply DRY (Don\'t Repeat Yourself), KISS (Keep It Simple), YAGNI (You Aren\'t Gonna Need It)', 'Practice Boy Scout Rule (leave code cleaner than you found it)'] }
    ],
    notes: 'Premature abstraction is worse than duplicate code. Wait until a pattern repeats three times (Rule of Three) before abstracting.',
    practiceQuestions: ['Why is premature optimization considered the root of all evil in software engineering?', 'Explain the YAGNI principle with an architectural example.']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'System design fundamentals',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 80,
    subtopics: [
      { name: 'High-Level Architecture', tasks: ['Understand Load Balancers, Reverse Proxies (Nginx), Stateless App Servers', 'Learn Database Replication (Primary/Replica) and Caching layers (Redis)'] }
    ],
    notes: 'System design starts with clarifying requirements, estimating scale (QPS, storage), and designing high-level block diagrams.',
    practiceQuestions: ['How does a Load Balancer distribute traffic using round-robin vs least-connections?', 'What is the difference between a forward proxy and a reverse proxy?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'API design',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Production API Contracts', tasks: ['Design consistent error responses: { error: { code, message } }', 'Implement cursor-based vs offset-based pagination'] }
    ],
    notes: 'Cursor-based pagination (using created_at or id cursor) prevents duplicate items during concurrent insertions, unlike offset pagination.',
    practiceQuestions: ['Why is cursor-based pagination superior to offset/limit pagination for large dynamic feeds?', 'What makes an API idempotent and why are idempotency keys used in payment APIs?']
  },
  {
    module: 'Module 13: Computer Science for Software Engineering',
    name: 'Scalability basics',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Scaling from 1 to 10M Users', tasks: ['Compare Vertical Scaling (bigger machine) vs Horizontal Scaling (more machines)', 'Understand Database Sharding and Consistent Hashing'] }
    ],
    notes: 'Horizontal scaling achieves high availability by adding commodity nodes behind load balancers rather than upgrading a single server.',
    practiceQuestions: ['How does Consistent Hashing minimize key redistribution when nodes are added or removed?', 'What is database sharding and what are its main challenges?']
  },

  // Module 14: Portfolio Projects (7 topics)
  {
    module: 'Module 14: Portfolio Projects',
    name: 'Personal portfolio',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 90,
    subtopics: [
      { name: 'Portfolio Architecture', tasks: ['Build responsive showcase with Next.js/Tailwind', 'Feature interactive case studies, clean typography, live project links, and contact form'] }
    ],
    notes: 'Treat your portfolio as your primary engineering artifact: fast load time, zero broken links, and accessible navigation.',
    practiceQuestions: ['What metrics should a case study include to substantiate engineering achievements?', 'How do you optimize portfolio images for 100/100 Lighthouse performance?']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'Task management application',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Kanban & Drag-and-Drop Workflow', tasks: ['Implement columns with drag-and-drop task reordering', 'Persist task state with optimistic UI updates and local storage'] }
    ],
    notes: 'Demonstrates complex UI state management, accessible keyboard controls, and persistent synchronization.',
    practiceQuestions: ['How do you implement optimistic UI updates so user interactions feel instantaneous?', 'What data structure represents reordered items efficiently without rewriting all indexes?']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'E-commerce application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 180,
    subtopics: [
      { name: 'Product Catalog & Cart Checkout', tasks: ['Build searchable catalog with filter tags and pagination', 'Implement persistent cart state, checkout validation, and order management'] }
    ],
    notes: 'Demonstrates real-world domain complexity: inventory tracking, price calculations, and checkout states.',
    practiceQuestions: ['How do you synchronize cart state across multiple browser tabs?', 'Why should price calculations always occur on the backend server?']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'Authentication application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'Complete Auth Flow', tasks: ['Implement Sign Up, Login, Forgot Password, Reset Password, MFA TOTP', 'Secure session cookies and manage refresh token rotation'] }
    ],
    notes: 'Demonstrates deep security hygiene: rate limiting, password hashing, and protected route middleware.',
    practiceQuestions: ['How do you prevent email enumeration during forgot-password workflows?', 'Diagram the token refresh cycle between client and server.']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'Full-stack application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 180,
    subtopics: [
      { name: 'End-to-End Enterprise System', tasks: ['Integrate React frontend, Express/Node backend, PostgreSQL database', 'Containerize with Docker and deploy to Google Cloud Run'] }
    ],
    notes: 'Demonstrates the full software engineering lifecycle from database schema design to automated cloud deployment.',
    practiceQuestions: ['Write a multi-stage Dockerfile that builds and runs a production full-stack application.', 'How do you configure health check probes for container orchestration?']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'Real-time application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'WebSocket / Event Streaming', tasks: ['Implement real-time collaboration or chat using WebSockets / Socket.io', 'Handle reconnects, presence indicators, and message delivery guarantees'] }
    ],
    notes: 'WebSockets maintain a persistent full-duplex TCP connection, allowing the server to push updates instantly.',
    practiceQuestions: ['Compare WebSockets vs Server-Sent Events (SSE) vs Long Polling.', 'How do you scale WebSocket connections across multiple server instances using Redis pub/sub?']
  },
  {
    module: 'Module 14: Portfolio Projects',
    name: 'AI-powered web application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'LLM & Generative AI Integration', tasks: ['Integrate Gemini API with streaming text responses', 'Implement structured JSON output, grounding, and system prompts'] }
    ],
    notes: 'Always proxy AI API keys through server-side routes; stream chunked responses using Server-Sent Events (SSE).',
    practiceQuestions: ['How do you stream LLM completions to a web frontend without waiting for full generation?', 'How does structured output schema enforcement guarantee valid JSON responses from models?']
  },

  // Module 15: Google Job Preparation (11 topics)
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Understand Google job descriptions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Google Software Engineering Levels', tasks: ['Analyze SWE II (L3), SWE III (L4), Senior SWE (L5) requirements', 'Map Google Engineering Core Competencies (Coding, System Design, Leadership, Googlyness)'] }
    ],
    notes: 'Google evaluates candidates on four pillars: General Cognitive Ability, Role-Related Knowledge, Leadership, and "Googlyness" (culture & collaboration).',
    practiceQuestions: ['What are the four core interview pillars evaluated in Google software engineering loops?', 'What distinguishes an L3 junior engineer from an L4/L5 senior engineer at Google?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Resume preparation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Google "XYZ" Resume Formula', tasks: ['Apply Google formula: "Accomplished [X] as measured by [Y], by doing [Z]"', 'Keep resume to 1 clean page, quantified metrics, zero buzzword fluff'] }
    ],
    notes: 'Use the XYZ formula: "Increased page load speed by 42% as measured by Lighthouse, by implementing dynamic code-splitting and Redis caching."',
    practiceQuestions: ['Rewrite a vague resume bullet point into Google\'s XYZ formula with concrete metrics.', 'What technical sections should be highlighted at the top of a SWE resume?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'GitHub portfolio',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Showcasing Engineering Standards', tasks: ['Pin 3-4 exceptional repositories with live demos and architecture diagrams', 'Demonstrate clean commits, PR reviews, CI passing badges, and test coverage'] }
    ],
    notes: 'Recruiters and hiring managers spend 30 seconds reviewing GitHub: ensure live demo links and visual architecture diagrams are prominently featured in the README.',
    practiceQuestions: ['What makes an open-source repository look production-grade to a Google engineering manager?', 'How do you design a GitHub profile README that highlights core engineering strengths?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'DSA practice',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 90,
    subtopics: [
      { name: 'Targeted LeetCode Practice', tasks: ['Solve Blind 75 and Grind 169 curated problems', 'Master Array/Hash Table, Two Pointers, Trees, Graphs, DP, and Heaps'] }
    ],
    notes: 'Focus on understanding algorithmic patterns and invariant proofs rather than memorizing individual problem solutions.',
    practiceQuestions: ['What are the top 5 algorithmic patterns tested in Google coding interviews?', 'How should you pace DSA practice across 12 weeks leading up to interviews?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Coding interviews',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Google Interview Environment', tasks: ['Practice writing clean, compilable code without IDE autocomplete in Google Docs or whiteboard', 'Think out loud continuously while developing solutions'] }
    ],
    notes: 'Always clarify constraints, test edge cases (empty inputs, single element, negatives, overflow), and analyze complexity before coding.',
    practiceQuestions: ['What should you do immediately upon receiving a coding problem before writing any code?', 'How do you recover if you get stuck during a live technical interview?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Technical interviews',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Deep Web Domain Knowledge', tasks: ['Explain browser internals, event loop, security headers, and network performance under scrutiny', 'Demonstrate deep mastery of JavaScript execution internals'] }
    ],
    notes: 'Be prepared to explain the low-level mechanics behind any technology on your resume.',
    practiceQuestions: ['Explain what happens under the hood when a user types "google.com" and hits Enter.', 'How would you architect a zero-latency autocomplete search bar?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Behavioural interviews',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Googlyness & Leadership Evaluation', tasks: ['Demonstrate intellectual humility, bias for action, psychological safety, and thriving in ambiguity', 'Prepare stories of resolving team conflicts and learning from failures'] }
    ],
    notes: 'Google values candidates who admit what they don\'t know, welcome constructive feedback, and prioritize team success over individual ego.',
    practiceQuestions: ['How do you answer: "Tell me about a time you made a major engineering mistake in production"?', 'What does "Googlyness" mean in practical day-to-day team engineering?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'STAR interview method',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Structured Storytelling', tasks: ['Situation: 15% of answer context', 'Task: 15% role and challenge', 'Action: 50% specific technical and leadership actions taken by YOU', 'Result: 20% quantifiable outcome and lessons learned'] }
    ],
    notes: 'Focus on "I", not "we", when describing the Action section of your STAR stories so the interviewer evaluates your personal contribution.',
    practiceQuestions: ['Structure a STAR response to: "Tell me about a time you had a technical disagreement with a senior engineer."', 'Why is quantifying the Result section essential in the STAR method?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Problem-solving communication',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Collaborative Problem Solving', tasks: ['Treat the interviewer as a team collaborator', 'Communicate trade-offs explicitly: "We could use approach A with O(N) space, or approach B with O(1) space but slower time"'] }
    ],
    notes: 'Never code in silence. Articulate your thought process so the interviewer can redirect you before you write dead-end code.',
    practiceQuestions: ['How do you ask clarifying questions to uncover hidden problem constraints?', 'What phrase should you use to check in with the interviewer before proceeding with an approach?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Mock interviews',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 90,
    subtopics: [
      { name: 'Simulation Under Time Pressure', tasks: ['Conduct 45-minute timed mock interviews with peers on Pramp or Interviewing.io', 'Record yourself and review clarity, pace, and body language'] }
    ],
    notes: 'Mock interviews build adrenaline tolerance and help eliminate filler words under time pressure.',
    practiceQuestions: ['How many mock interviews should you conduct before attempting your first real interview loop?', 'What feedback metrics should you ask your mock interview partner to evaluate?']
  },
  {
    module: 'Module 15: Google Job Preparation',
    name: 'Application tracking',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Systematic Pipeline Management', tasks: ['Track job IDs, application dates, referral contacts, interview stages, and follow-ups in a structured spreadsheet', 'Secure employee referrals before applying directly'] }
    ],
    notes: 'Securing an internal employee referral increases resume review rates tenfold compared to blind portal submissions.',
    practiceQuestions: ['How do you politely request an employee referral on LinkedIn with an engineering contact?', 'What follow-up cadence is appropriate after completing a technical interview?']
  }
];

export const INITIAL_WEBDEV_TOPICS: Topic[] = WEBDEV_MODULES_RAW.map((raw, index) => {
  const seq = index + 1;
  const id = `webdev_topic_${seq}`;
  return {
    id,
    learningAreaId: 'la_webdev',
    learningAreaName: 'Web Development — Google-Oriented Software Engineering Roadmap',
    subjectId: 'sub_web_frontend',
    subjectName: 'Frontend & Full-Stack Software Engineering',
    module: raw.module,
    name: raw.name,
    sequenceNumber: seq,
    importance: raw.importance,
    difficulty: raw.difficulty,
    estimatedMinutes: raw.estimatedMinutes,
    status: 'Not Started',
    notes: raw.notes,
    practiceQuestions: raw.practiceQuestions.map((q, qIdx) => ({
      id: `${id}_q_${qIdx + 1}`,
      question: q,
      completed: false,
    })),
    completionDate: null,
    revisionStatus: 'Not Reviewed',
    revisionCount: 0,
    nextRevisionDate: null,
    subtopics: raw.subtopics.map((sub, sIdx) => ({
      id: `${id}_sub_${sIdx + 1}`,
      name: sub.name,
      sequenceNumber: sIdx + 1,
      importance: raw.importance,
      difficulty: raw.difficulty,
      estimatedMinutes: Math.round(raw.estimatedMinutes / raw.subtopics.length),
      status: 'Not Started',
      notes: '',
      practiceQuestions: [],
      completionDate: null,
      revisionStatus: 'Not Reviewed',
      tasks: sub.tasks.map((taskTitle, tIdx) => ({
        id: `${id}_sub_${sIdx + 1}_task_${tIdx + 1}`,
        title: taskTitle,
        completed: false,
      })),
    })),
  };
});
