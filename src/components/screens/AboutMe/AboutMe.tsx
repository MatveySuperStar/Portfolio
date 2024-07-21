import Navbar from "@/components/Navbar";
import { content } from "@/lib/const";
import React, { FC } from "react";
import InfoCV from "./components/InfoCV";

const AboutMe: FC<{ language: "ru" | "eng" }> = ({ language }) => {
  return (
    <>
      <Navbar
        secondLink={{
          href: `/${language}/`,
          title: content[language].system.navigation.HomeinAbout,
        }}
        language={language}
      />
      <main>
        <InfoCV language={language} />
      </main>
    </>
  );
};

export default AboutMe;
