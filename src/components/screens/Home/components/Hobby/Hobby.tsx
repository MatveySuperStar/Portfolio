"use client";
import {
  IScrollContext,
  ScrollContext,
} from "@/components/Providers/ScrollContextProvider/ScrollContextProvider";
import { content, hobby } from "@/lib/const";
import React, { FC, useContext } from "react";

const Hobby: FC<{ language: "ru" | "eng" }> = ({ language }) => {
  const { visibleHobby } = useContext<IScrollContext>(ScrollContext);

  const viewHobby = hobby.map((item) => (
    <div key={item}>
      <iframe
        src={item}
        className="w-full h-[300px] lg:h-[400px] rounded-xl"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  ));

  return (
    <section
      className={`${
        visibleHobby ? "visible opacity-100" : "invisible opacity-0"
      } duration-500 delay-500`}
    >
      <div className="pb-[200px]">
        <h2 className="mb-10 text-center">
          {content[language].home.hobbyTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{viewHobby}</div>
      </div>
    </section>
  );
};

export default Hobby;
