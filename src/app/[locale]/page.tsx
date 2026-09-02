import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { metatag } from '@/lib/const';
import Home from '@/components/screens/Home';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    ...metatag,
  };
}

export default function HomePage(): React.ReactElement {
  return <Home />;
}
