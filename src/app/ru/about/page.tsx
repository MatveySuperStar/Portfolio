import AboutMe from "@/components/screens/AboutMe/AboutMe";
import { metatag } from "@/lib/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MS",
  description: "Немного информации обо мне",
  ...metatag,
};

export default function AboutPage() {
  return <AboutMe language="ru" />;
}
