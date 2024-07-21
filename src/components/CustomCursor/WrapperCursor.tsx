"use client";
import { useResize } from "@/hooks/use-resize";
import dynamic from "next/dynamic";
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

const WrapperCursor = () => {
  const { isScreenLg } = useResize();

  return isScreenLg && <CustomCursor />;
};

export default WrapperCursor;
