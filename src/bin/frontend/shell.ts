const EXTRA_HEAD_TAGS = `<meta name="robots" content="index,follow">
<meta name="theme-color" content="#0f0f0f">
<link rel="icon" type="image/svg+xml" media="(prefers-color-scheme: light)" href="/favicon-dark.svg">
<link rel="icon" type="image/svg+xml" media="(prefers-color-scheme: dark)" href="/favicon-light.svg">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">`;

export function withExtraHeadTags(html: string): string {
  return html.replace("</head>", `${EXTRA_HEAD_TAGS}\n</head>`);
}
