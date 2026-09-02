import { Metadata } from 'next';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import AboutMe from '@/components/screens/AboutMe/AboutMe';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return createPageMetadata({
    locale,
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    path: '/about',
    imageAlt: t('ogImageAlt'),
    siteName: t('siteName'),
  });
}

export default function AboutPage(): React.ReactElement {
  return <AboutMe />;
}
