import { content } from "@/lib/const";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./navbar.module.scss";
import Select from "@/ui/Select";
import SelectLanguages from "../SelectLanguages";

const Navbar: FC<{
  secondLink: { href: string; title: string };
  language: "ru" | "eng";
}> = ({ secondLink, language }) => {
  return (
    <header className={styles.header}>
      <div>
        <nav className="flex justify-between   py-5">
          <Link href={`/${language}`} className="h4 navbarLink">
            {content[language].system.navigation.home}
          </Link>
          <div className="flex lg:gap-10 gap-5">
            <SelectLanguages value={language} />
            <Link className="h4 navbarLink" href={secondLink.href}>
              {secondLink.title}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
