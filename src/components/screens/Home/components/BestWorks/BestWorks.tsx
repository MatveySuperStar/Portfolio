"use client";
import CardProduct from "@/components/CardProduct";
import { bestWorks } from "@/lib/const";
import React, {
  createRef,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./bestWorks.module.scss";
import {
  IScrollContext,
  ScrollContext,
} from "@/components/Providers/ScrollContextProvider/ScrollContextProvider";

const BestWorks: FC<{ language: "ru" | "eng" }> = ({ language }) => {
  const lastItem = createRef<HTMLAnchorElement>();
  const [indexTrigger, setIndexTrigger] = useState(-1);
  const { setVisibleHobby } = useContext<IScrollContext>(ScrollContext);

  useEffect(() => {
    setTimeout(() => {
      setIndexTrigger(0);
      if (window.innerWidth >= 768) {
        setTimeout(() => setIndexTrigger(1), 500);
      }
    }, 900);
  }, [setIndexTrigger]);

  const scrollHandler = useCallback(() => {
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
        if (indexTrigger + 1 >= bestWorks.length) {
          setVisibleHobby(true);
        }
      }
    }
  }, [indexTrigger, setIndexTrigger, setVisibleHobby, lastItem]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

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
