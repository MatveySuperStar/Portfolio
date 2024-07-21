import React, { FC } from "react";
import BestWorks from "./components/BestWorks";
import MainSection from "./components/MainSection";
import Navbar from "@/components/Navbar";
import { content } from "@/lib/const";

const Home: FC<{ language?: "ru" | "eng" }> = ({ language = "eng" }) => {
  return (
    <>
      <Navbar
        secondLink={{
          href: `/${language}/about`,
          title: content[language].system.navigation.aboutMe,
        }}
        language={language}
      />
      <main>
        <MainSection language={language} />
        <BestWorks language={language} />
      </main>
    </>
  );
};

export default Home;
