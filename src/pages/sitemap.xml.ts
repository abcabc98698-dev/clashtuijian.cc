import type { APIRoute } from 'astro';
import { site } from '../config';
import { canonicalUrl } from '../utils';
import { brands } from '../data/brands';

interface DiscoveredPageMod {
  noindex?: boolean;
  draft?: boolean;
  lastmod?: string;
  frontmatter?: {
    noindex?: boolean;
    draft?: boolean;
    updatedDate?: string;
    pubDate?: string;
  };
}

export const GET: APIRoute = () => {
  const origin = site.url;
  const defaultLastMod = '2026-10-29';

  const pageModules = import.meta.glob<DiscoveredPageMod>('./**/*.{astro,md,mdx}', {
    eager: true,
  });

  const entriesMap = new Map<
    string,
    { loc: string; lastmod: string; changefreq: string; priority: string }
  >();

  for (const [relFile, mod] of Object.entries(pageModules)) {
    // Skip dynamic route templates (handled below) and private partials
    if (relFile.includes('[') || relFile.includes('/_') || relFile.startsWith('./_')) {
      continue;
    }

    // Skip pages marked noindex or draft
    if (
      mod?.noindex === true ||
      mod?.draft === true ||
      mod?.frontmatter?.noindex === true ||
      mod?.frontmatter?.draft === true
    ) {
      continue;
    }

    let routePath = relFile
      .replace(/^\./, '')
      .replace(/\.(astro|md|mdx)$/i, '')
      .replace(/\/index$/i, '');

    if (routePath === '') routePath = '/';

    // Exclude 404, admin, draft, test, search routes
    if (/^\/(?:404|admin|draft|drafts|test|search)(?:\/|$)/i.test(routePath)) {
      continue;
    }

    const loc = canonicalUrl(routePath, origin);
    const modDate =
      mod?.lastmod ?? mod?.frontmatter?.updatedDate ?? mod?.frontmatter?.pubDate ?? defaultLastMod;

    let priority = '0.85';
    let changefreq = 'weekly';
    if (routePath === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (routePath === '/brands') {
      priority = '0.95';
    } else if (routePath.startsWith('/guides')) {
      priority = '0.92';
    } else if (routePath === '/about') {
      priority = '0.80';
      changefreq = 'monthly';
    }

    entriesMap.set(loc, { loc, lastmod: modDate, changefreq, priority });
  }

  // Expand dynamic /brands/[slug] database pages
  for (const b of brands) {
    const loc = canonicalUrl(`/brands/${b.slug}`, origin);
    const priority = b.isPrimaryPick ? '0.95' : b.isTopTen ? '0.85' : '0.75';
    entriesMap.set(loc, {
      loc,
      lastmod: b.updatedDate || defaultLastMod,
      changefreq: 'weekly',
      priority,
    });
  }

  // Sort deterministically: homepage first, then high priority, then alphabetical
  const sortedEntries = [...entriesMap.values()].sort((a, b) => {
    if (a.loc === canonicalUrl('/', origin)) return -1;
    if (b.loc === canonicalUrl('/', origin)) return 1;
    const pDiff = Number(b.priority) - Number(a.priority);
    if (pDiff !== 0) return pDiff;
    return a.loc.localeCompare(b.loc);
  });

  const urlNodes = sortedEntries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
