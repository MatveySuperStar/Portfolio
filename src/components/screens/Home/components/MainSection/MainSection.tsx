"use client";
import { content } from "@/lib/const";
import React, { FC, useEffect, useRef } from "react";
import Typed from "typed.js";

const MainSection: FC<{ language: "eng" | "ru" }> = ({ language }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [content[language].home.mainSection],
      typeSpeed: 150,
      startDelay: 100,
    });

    return () => {
      typed.destroy();
    };
  }, [language]);

  return (
    <section>
      <div className="sm:min-h-[86px] min-h-[130px]">
        <h1>
          <span className="h1" ref={el}></span>
        </h1>
      </div>
    </section>
  );
};

export default MainSection;
