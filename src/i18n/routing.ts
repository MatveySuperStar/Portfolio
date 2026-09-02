import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['eng', 'ru'],
  defaultLocale: 'eng',
  localePrefix: 'always',
});
