'use client';

import { createRef, useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { bestWorks } from '@/lib/const';
import CardProduct from '@/components/CardProduct';
import styles from './bestWorks.module.scss';

const BestWorks = (): React.ReactElement => {
  const t = useTranslations('Projects');
  const lastItem = createRef<HTMLAnchorElement>();
  const [indexTrigger, setIndexTrigger] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setIndexTrigger(0);
      if (window.innerWidth >= 768) {
        setTimeout(() => setIndexTrigger(1), 500);
      }
    }, 900);
  }, [setIndexTrigger]);

  const scrollHandler = useCallback((): void => {
    if (!!lastItem?.current) {
      const additionalDistance =
        window.innerWidth >= 768
          ? (indexTrigger + 1) % 2 === 0
            ? 0
            : -200
          : 0;

      if (
        lastItem.current?.offsetTop + additionalDistance - window.scrollY <=
        0
      ) {
        setIndexTrigger((state) => state + 1);
      }
    }
  }, [indexTrigger, setIndexTrigger, lastItem]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return (): void => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const viewProjects = bestWorks.map((item, index) => {
    const setting = {
      ...item,
      alt: item.title,
      description: t(item.id),
    };

    if (index === indexTrigger) {
      return (
        <CardProduct
          key={item.title}
          {...setting}
          refLink={lastItem}
          className={styles.visible}
        />
      );
    }

    return (
      <CardProduct
        key={item.title}
        {...setting}
        className={index < indexTrigger ? styles.visible : ''}
      />
    );
  });

  return (
    <section>
      <div className={`${styles.works} pb-[200px]`}>{viewProjects}</div>
    </section>
  );
};

export default BestWorks;
