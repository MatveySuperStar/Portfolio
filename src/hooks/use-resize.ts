import { useSyncExternalStore } from 'react';

export const SCREEN_SM = 576;
export const SCREEN_MD = 768;
export const SCREEN_LG = 992;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;

const subscribe = (onStoreChange: () => void): (() => void) => {
  window.addEventListener('resize', onStoreChange);
  return (): void => {
    window.removeEventListener('resize', onStoreChange);
  };
};

const getSnapshot = (): number => window.innerWidth;
const getServerSnapshot = (): number => 0;

export const useResize = (): {
  width: number;
  isScreenSm: boolean;
  isScreenMd: boolean;
  isScreenLg: boolean;
  isScreenXl: boolean;
  isScreenXxl: boolean;
} => {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
