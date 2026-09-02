import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { metatag } from '@/lib/const';
import AboutMe from '@/components/screens/AboutMe/AboutMe';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    ...metatag,
  };
}

export default function AboutPage(): React.ReactElement {
  return <AboutMe />;
}
