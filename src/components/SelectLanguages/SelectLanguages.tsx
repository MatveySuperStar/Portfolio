'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import Select from '@/ui/Select';

const SelectLanguages = (): React.ReactElement => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const options = [
    { label: 'Ru', value: 'ru' },
    { label: 'Eng', value: 'eng' },
  ];

  const changeLanguage = (val: string): void => {
    if (!routing.locales.includes(val as (typeof routing.locales)[number])) {
      return;
    }

    router.replace(pathname, {
      locale: val as (typeof routing.locales)[number],
    });
  };

  return <Select options={options} value={locale} onChange={changeLanguage} />;
};

export default SelectLanguages;
