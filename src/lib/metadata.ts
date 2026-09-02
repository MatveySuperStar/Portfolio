import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const FALLBACK_SITE_URL = 'https://portfolio-kappa-topaz-23.vercel.app';

const OG_IMAGE = {
  url: '/openGraphImage.png',
  width: 1536,
  height: 1024,
} as const;

function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_HOME_URL ?? FALLBACK_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  return new URL(withProtocol);
}

function toOpenGraphLocale(locale: Locale): string {
  return locale === 'ru' ? 'ru_RU' : 'en_US';
}

function toHtmlLang(locale: Locale): string {
  return locale === 'eng' ? 'en' : locale;
}

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  imageAlt: string;
  siteName: string;
};

export function createPageMetadata({
  locale,
  title,
  description,
  path = '',
  imageAlt,
  siteName,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const pathname = `/${locale}${path}`;
  const pageUrl = new URL(pathname, siteUrl).toString();
  const image = {
    ...OG_IMAGE,
    alt: imageAlt,
  };

  return {
    metadataBase: siteUrl,
    title,
    description,
    applicationName: siteName,
    authors: [{ name: 'Matvey Sergeev', url: siteUrl.toString() }],
    creator: 'Matvey Sergeev',
    publisher: 'Matvey Sergeev',
    keywords: [
      'Matvey Sergeev',
      'Frontend Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Portfolio',
    ],
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.png',
      apple: '/apple-icon.png',
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        en: new URL(`/eng${path}`, siteUrl).toString(),
        ru: new URL(`/ru${path}`, siteUrl).toString(),
        'x-default': new URL(`/eng${path}`, siteUrl).toString(),
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: pageUrl,
      siteName,
      locale: toOpenGraphLocale(locale),
      alternateLocale: locale === 'ru' ? ['en_US'] : ['ru_RU'],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export { getSiteUrl, toHtmlLang };
