const DEFAULT_ORIGIN = 'https://clashtuijian.cc';

/**
 * Resolve a local asset path from /public into a normalized root-relative path.
 */
export const asset = (path: string): string => {
  const clean = path.trim();
  if (/^(https?:)?\/\//i.test(clean) || clean.startsWith('data:')) {
    return clean;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const normalizedPath = clean.replace(/^\/+/, '');
  return `${base}/${normalizedPath}`;
};

/**
 * Build a clean, absolute canonical URL for SEO metadata, OpenGraph, Sitemap, and JSON-LD.
 */
export const canonicalUrl = (pathOrUrl: string = '/', siteOrigin?: URL | string): string => {
  const origin = siteOrigin ? new URL(siteOrigin.toString()).origin : DEFAULT_ORIGIN;
  const url = new URL(pathOrUrl, origin);
  url.hash = '';
  url.search = '';
  if (url.pathname === '/index.html') {
    url.pathname = '/';
  } else if (url.pathname.endsWith('/index.html')) {
    url.pathname = url.pathname.slice(0, -'/index.html'.length) || '/';
  } else if (url.pathname.endsWith('.html')) {
    url.pathname = url.pathname.slice(0, -'.html'.length) || '/';
  }
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
  }
  return url.href;
};

/**
 * Split a display brand name around the ampersand for accent typography.
 */
export const splitAmp = (name: string): string[] => name.split('&');
