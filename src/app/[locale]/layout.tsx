import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import '@/styles/main.scss';
import { routing } from '@/i18n/routing';
import '../globals.css';

const monserrat = Montserrat({ subsets: ['latin'] });

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const htmlLang = locale === 'eng' ? 'en' : locale;

  return (
    <html lang={htmlLang}>
      <body className={monserrat.className}>
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <CustomCursor />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
