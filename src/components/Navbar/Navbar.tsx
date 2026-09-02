'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import SelectLanguages from '../SelectLanguages';
import styles from './navbar.module.scss';

const Navbar = (): React.ReactElement => {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const isAbout = pathname === '/about';

  return (
    <header className={styles.header}>
      <div>
        <nav className="flex justify-between py-5">
          <Link href="/" className="h4 navbarLink">
            {t('home')}
          </Link>
          <div className="flex gap-5 lg:gap-10">
            <SelectLanguages />
            <Link className="h4 navbarLink" href={isAbout ? '/' : '/about'}>
              {t(isAbout ? 'works' : 'aboutMe')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
