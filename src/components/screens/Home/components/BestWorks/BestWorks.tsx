"use client";
import CardProduct from "@/components/CardProduct";
import { bestWorks } from "@/lib/const";
import React, {
  createRef,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./bestWorks.module.scss";

const BestWorks: FC<{ language: "ru" | "eng" }> = ({ language }) => {
  const lastItem = createRef<ReactNode>();
  const observerLoader = useRef<any>(null);
  const [indexTrigger, setIndexTrigger] = useState(-1);

  const actionInSight = useCallback(
    async (entries: any) => {
      if (entries[0].isIntersecting && indexTrigger < bestWorks.length) {
        setTimeout(() => setIndexTrigger((state) => state + 1), 700);
      }
    },
    [indexTrigger]
  );

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }

    return () => {
      if (observerLoader.current) {
        observerLoader.current.disconnect();
      }
    };
  }, [lastItem, actionInSight]);

  useEffect(() => {
    setTimeout(() => setIndexTrigger(0), 900);
  }, [setIndexTrigger]);

  const viewProjects = bestWorks.map((item, index) => {
    const setting = {
      ...item,
      alt: item.title,
      description: item[language].description,
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
        className={index < indexTrigger ? styles.visible : ""}
      />
    );
  });

  return (
    <section>
      <div className={styles.works}>{viewProjects}</div>
    </section>
  );
};

export default BestWorks;
