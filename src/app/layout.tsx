import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/styles/main.scss";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio MS",
  description: "wow, wow, it's your portfolio?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monserrat.className}>{children}</body>
    </html>
  );
}
