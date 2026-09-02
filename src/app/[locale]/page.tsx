import { Metadata } from 'next';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import Home from '@/components/screens/Home';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return createPageMetadata({
    locale,
    title: t('homeTitle'),
    description: t('homeDescription'),
    imageAlt: t('ogImageAlt'),
    siteName: t('siteName'),
  });
}

export default function HomePage(): React.ReactElement {
  return <Home />;
}
