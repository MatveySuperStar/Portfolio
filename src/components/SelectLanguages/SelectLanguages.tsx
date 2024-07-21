"use client";
import Select from "@/ui/Select";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

const SelectLanguages: FC<{ value: "ru" | "eng" }> = ({ value }) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const options = [
    { label: "Ru", value: "ru" },
    { label: "Eng", value: "eng" },
  ];

  const changeLanguage = (val: string) => {
    const [firstPath, _secondPath, ...other] = pathname.split("/");

    push(`${firstPath}/${val}${!!other.length ? `/${other.join("/")}` : ""}`);
  };

  return <Select options={options} value={value} onChange={changeLanguage} />;
};

export default SelectLanguages;
