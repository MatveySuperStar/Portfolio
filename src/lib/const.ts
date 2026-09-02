import type { StaticImageData } from 'next/image';
import type { AppConfig } from 'next-intl';
import abametDesktop from '@/public/projects/abamet-desktop.png';
import abametMobile from '@/public/projects/abamet-mobile.png';
import aefDesktop from '@/public/projects/aef-desktop.png';
import aefMobile from '@/public/projects/aef-mobile.png';
import atlantmDesktop from '@/public/projects/atlantm-desktop.png';
import atlantmMobile from '@/public/projects/atlantm-mobile.png';
import balmyDesktop from '@/public/projects/balmy-desktop.png';
import balmyMobile from '@/public/projects/balmy-mobile.png';
import bauntyDesktop from '@/public/projects/baunty-desktop.png';
import bauntyMobile from '@/public/projects/baunty-mobile.png';
import masterModDescktop from '@/public/projects/master-mod-desktop.png';
import masterModMobile from '@/public/projects/master-mod-mobile.png';
import royalDescktop from '@/public/projects/royal-desktop.png';
import royalMobile from '@/public/projects/royal-mobile.png';
import webSpaceDesktop from '@/public/projects/web-space-desktop.png';
import webSpaceMobile from '@/public/projects/web-space-mobile.png';

export const metatag = {
  type: 'website',
  openGraph: {
    images: [{ url: `${process.env.NEXT_PUBLIC_HOME_URL}/openGraphImage.png` }],
  },
  twitter: {
    images: [{ url: `${process.env.NEXT_PUBLIC_HOME_URL}/openGraphImage.png` }],
  },
};

type ProjectId = keyof AppConfig['Messages']['Projects'];

export const bestWorks: {
  id: ProjectId;
  title: string;
  images: StaticImageData[];
  href: string;
}[] = [
  {
    id: 'abamet',
    title: 'Abamet',
    images: [abametDesktop, abametMobile],
    href: 'https://www.abamet.ru/',
  },
  {
    id: 'atlantm',
    title: 'Atlant-M',
    images: [atlantmDesktop, atlantmMobile],
    href: 'https://atlantm.by/',
  },
  {
    id: 'royalSpa',
    title: 'Royal spa',
    images: [royalDescktop, royalMobile],
    href: 'https://royalthaispa.by/',
  },
  {
    id: 'masterMod',
    title: 'Master mod',
    images: [masterModDescktop, masterModMobile],
    href: 'https://mastermod.by/',
  },
  {
    id: 'bauntySpa',
    title: 'Baunty spa',
    images: [bauntyDesktop, bauntyMobile],
    href: 'https://bauntyspa.by/',
  },
  {
    id: 'webSpace',
    title: 'Web space',
    images: [webSpaceDesktop, webSpaceMobile],
    href: 'https://web-space.by',
  },
  {
    id: 'aes',
    title: 'AES',
    images: [aefDesktop, aefMobile],
    href: 'https://alfa-euro-stroy.vercel.app/',
  },
  {
    id: 'balmy',
    title: 'Balmy',
    images: [balmyDesktop, balmyMobile],
    href: 'https://balmy.by/',
  },
];
