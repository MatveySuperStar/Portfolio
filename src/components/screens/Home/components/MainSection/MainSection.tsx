'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Typed from 'typed.js';

const MainSection = (): React.ReactElement => {
  const t = useTranslations('Home');
  const el = useRef(null);
  const text = t('mainSection');

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 150,
      startDelay: 100,
    });

    return (): void => {
      typed.destroy();
    };
  }, [text]);

  return (
    <section>
      <div className="min-h-[130px] sm:min-h-[86px]">
        <h1>
          <span className="h1" ref={el}></span>
        </h1>
      </div>
    </section>
  );
};

export default MainSection;
