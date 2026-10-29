import type { APIRoute } from 'astro';
import { site } from '../config';
import { canonicalUrl } from '../utils';

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = astroSite ?? site.url;
  const sitemapHref = canonicalUrl('/sitemap.xml', origin);

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapHref}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
