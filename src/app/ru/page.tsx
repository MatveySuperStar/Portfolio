import Home from "@/components/screens/Home";
import { metatag } from "@/lib/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porfolio MS",
  description: "Лол, это твое порфолио?",
  ...metatag,
};

export default function HomePage() {
  return <Home language="ru" />;
}
