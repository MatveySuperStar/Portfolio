import Home from "@/components/screens/Home";
import { metatag } from "@/lib/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porfolio MS",
  description: "wow, wow, it's your portfolio?",
  ...metatag,
};

export default function HomePage() {
  return <Home language="eng" />;
}
