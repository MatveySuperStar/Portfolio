"use client";
import React, { createContext, FC, ReactNode, useMemo, useState } from "react";

export interface IScrollContext {
  visibleHobby: boolean;
  setVisibleHobby: (val: boolean) => void;
}

export const ScrollContext = createContext<IScrollContext>({
  visibleHobby: false,
  setVisibleHobby: () => {},
});

const ScrollContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [visibleHobby, setVisibleHobby] = useState(false);

  const contextValue = useMemo(
    () => ({
      visibleHobby,
      setVisibleHobby,
    }),
    [visibleHobby, setVisibleHobby]
  );

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
