import React, { FC } from "react";
import BestWorks from "./components/BestWorks";
import MainSection from "./components/MainSection";
import Navbar from "@/components/Navbar";
import { content } from "@/lib/const";
import Hobby from "./components/Hobby";
import ScrollContextProvider from "@/components/Providers/ScrollContextProvider";

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
        <ScrollContextProvider>
          <MainSection language={language} />
          <BestWorks language={language} />
          <Hobby language={language} />
        </ScrollContextProvider>
      </main>
    </>
  );
};

export default Home;
