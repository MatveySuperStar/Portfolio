'use client';

import dynamic from 'next/dynamic';
import { useResize } from '@/hooks/use-resize';

const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });

const WrapperCursor = (): React.ReactNode => {
  const { isScreenLg } = useResize();

  return isScreenLg && <CustomCursor />;
};

export default WrapperCursor;
