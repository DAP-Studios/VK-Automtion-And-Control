import { useEffect } from 'react';
import { siteConfig } from '../lib/siteConfig';

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  type?: 'website' | 'article';
  structuredData?: StructuredData;
  noIndex?: boolean;
  keywords?: string;
}

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => meta?.setAttribute(key, value));
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

export default function Seo({
  title,
  description = siteConfig.defaultDescription,
  pathname = '/',
  type = 'website',
  structuredData,
  noIndex = false,
  keywords,
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.defaultTitle;
    const baseUrl = window.location.origin;
    const canonicalUrl = new URL(pathname, baseUrl).toString();

    document.title = pageTitle;
    document.documentElement.lang = 'en';

    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    if (keywords) upsertMeta('meta[name="keywords"]', { name: 'keywords' }, keywords);

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, pageTitle);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteConfig.name);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, siteConfig.ogImage);
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width' }, '1200');
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height' }, '630');
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, siteConfig.name);
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'en_IN');

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, pageTitle);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, siteConfig.ogImage);
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, siteConfig.name);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'structured-data');
      document.head.appendChild(script);
    }

    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      description,
      url: canonicalUrl,
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.addressLines[0],
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        postalCode: '396195',
        addressCountry: siteConfig.country,
      },
    };

    script.textContent = JSON.stringify(structuredData ?? defaultStructuredData);
  }, [description, noIndex, pathname, structuredData, title, type]);

  return null;
}