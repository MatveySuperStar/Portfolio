// import balmy from "@/public/projects/balmy.png";
// import baunty from "@/public/projects/baunty.png";

import royalDescktop from "@/public/projects/royal-desktop.png";
import royalMobile from "@/public/projects/royal-mobile.png";

import masterModDescktop from "@/public/projects/master-mod-desktop.png";
import masterModMobile from "@/public/projects/master-mod-mobile.png";

import webSpaceDesktop from "@/public/projects/web-space-desktop.png";
import webSpaceMobile from "@/public/projects/web-space-mobile.png";

import bauntyDesktop from "@/public/projects/baunty-desktop.png";
import bauntyMobile from "@/public/projects/baunty-mobile.png";

import aefDesktop from "@/public/projects/aef-desktop.png";
import aefMobile from "@/public/projects/aef-mobile.png";

import prokatchikDesktop from "@/public/projects/prokatchik-desktop.png";
import prokatchikMobile from "@/public/projects/prokatchik-mobile.png";

import balmyDesktop from "@/public/projects/balmy-desktop.png";
import balmyMobile from "@/public/projects/balmy-mobile.png";

// import prokatchik from "@/public/projects/prokatchik.png";
// import aef from "@/public/projects/aef.png";
// import sauletta from "@/public/projects/sauletta.png";
// import monument from "@/public/projects/monument.png";
// import amp from "@/public/projects/amp.png";
// import remontStolin from "@/public/projects/remont-stolin.png";
// import luxHome from "@/public/projects/lux-home.png";
// import filmPro from "@/public/projects/film-pro.png";
// import myvision from "@/public/projects/my-vision.png";

export const metatag = {
  type: "website",
  openGraph: {
    images: [{ url: `${process.env.NEXT_PUBLIC_HOME_URL}/openGraphImage.png` }],
  },
  twitter: {
    images: [{ url: `${process.env.NEXT_PUBLIC_HOME_URL}/openGraphImage.png` }],
  },
};

export const bestWorks = [
  {
    title: "Royal spa",
    images: [royalDescktop, royalMobile],
    href: "https://royalthaispa.by/",
    ru: { description: "Веб сайт спа салона в Минске" },
    eng: {
      description: "Website of a spa salon in Minsk",
    },
  },
  {
    title: "Master mod",
    images: [masterModDescktop, masterModMobile],
    href: "https://master-mod.vercel.app/",
    ru: { description: "Интернет магазин авторской одежды" },
    eng: {
      description: "Online store of designer clothes",
    },
  },
  {
    title: "Baunty spa",
    images: [bauntyDesktop, bauntyMobile],
    href: "https://bauntyspa.by/",
    ru: { description: "Веб сайт спа салона в Гродно" },
    eng: {
      description: "Website of a spa salon in Grodno",
    },
  },
  {
    title: "Web space",
    images: [webSpaceDesktop, webSpaceMobile],
    href: "https://web-space.by",
    ru: { description: "Веб сайт компании" },
    eng: {
      description: "Company website",
    },
  },
  {
    title: "AES",
    images: [aefDesktop, aefMobile],
    href: "https://alfa-euro-stroy.vercel.app/",
    ru: { description: "Веб сайт покупки и аренды домов" },
    eng: {
      description: "Website for buying and renting houses",
    },
  },
  {
    title: "Prokatchik",
    images: [prokatchikDesktop, prokatchikMobile],
    href: "https://prokatchik.by/",
    ru: {
      description:
        "Веб сайт аренды строительных иструментов и медицинских приспособлений",
    },
    eng: {
      description: "Website for renting construction tools and medical devices",
    },
  },
  {
    title: "Balmy",
    images: [balmyDesktop, balmyMobile],
    href: "https://balmy.by/",
    ru: {
      description:
        "Веб сайт продающий профессиональную косметика для волос и бороды",
    },
    eng: {
      description: "Website selling professional hair and beard cosmetics",
    },
  },
  // {
  //   title: "Sunshine",
  //   images: [prokatchik],
  //   href: "https://prokatchik.vercel.app/",
  //   ru: {
  //     description: "Веб сайт школы английского языка",
  //   },
  //   eng: {
  //     description: "English language school website",
  //   },
  // },
  // {
  //   title: "Admin panel",
  //   images: [prokatchik],
  //   href: "https://prokatchik.vercel.app/",
  //   ru: {
  //     description: "Админ панель разработанная на основе ui библиотеки antd",
  //   },
  //   eng: {
  //     description: "Admin panel developed based on the antd ui library",
  //   },
  // },
];

export const hobby = [
  "https://www.youtube.com/embed/ZVrD_EVkMgM?si=P3JCJUcjqBe8JQSU",
  "https://www.youtube.com/embed/XNVaOXV0PlA",
];

// export const projects = [
//   {
//     title: "royalspa",

//     href: "http://178.172.244.147:3000/",
//   },
//   {
//     title: "bauntyspa",
//     images: baunty,
//     href: "https://bauntyspa.by/",
//   },
//   // {
//   //   title: "master mod",
//   //   images: masterMod,
//   //   href: "https://master-mod.vercel.app/",
//   // },
//   // { title: "web space", images: webSpace, href: "https://web-space.by" },
//   {
//     title: "AEF",
//     images: aef,
//     href: "https://alfa-euro-stroy.vercel.app/",
//   },
//   {
//     title: "prokatchik",
//     images: prokatchik,
//     href: "https://prokatchik.vercel.app/",
//   },
//   {
//     title: "amp",
//     images: amp,
//     href: "https://amp-lemon-tau.vercel.app/",
//   },

//   {
//     title: "lux home",
//     images: luxHome,
//     href: "https://lux-home.vercel.app/",
//   },
//   { title: "balmy", images: balmy, href: "https://balmy.by/" },
//   {
//     title: "myvision",
//     images: myvision,
//     href: "https://my-vision.vercel.app/",
//   },
//   { title: "film pro", images: filmPro, href: "https://film-pro.vercel.app/" },
//   {
//     title: "remont-stolin",
//     images: remontStolin,
//     href: "https://remont-stolin.vercel.app/",
//   },
//   {
//     title: "monument",
//     images: monument,
//     href: "https://monuments-flame.vercel.app/",
//   },
//   { title: "sauletta", images: sauletta, href: "https://sauletta.vercel.app/" },
// ];

export const content = {
  ru: {
    home: {
      mainSection: "React developer из Беларуси",
      portfolioTitle: "Лучшие работы",
      hobbyTitle: "Хобби",
    },
    about: {
      title: "Веб разработчик с JavaScript направленностью",
      text: [
        "Я Матвей, React developer  с более чем 2-летним опытом работы в создании коммерческих проектов. На протяжении всей своей карьеры я занимался разработкой, поддержкой и улучшением веб-приложений. Моя работа включала в себя так же составления плана работы в соответствии с ТЗ и макетом и дальнейшее проектировние. Я стремлюсь к создании высококачественных проектов, которые повышают удовлетворенность пользователей.",
        "На предыдущих должностях я вносил не малый вклад в развитие и поддержку проектов которые значительно улучшили показатели продукта и вовлеченность пользователей. Имея хорошие знания JavaScript, я использую разнообразные инструменты и методологии проектирования для достижения впечатляющих результатов.",
        "Я стремлюсь расширять границы и разрабатывать инновационные решения, которые соответствуют ожиданиям пользователей и достигают бизнес-целей.",
      ],
      workExperiences: {
        title: "Опыт работы",
        works: [
          {
            JobTitle: "React developer (Next.js)",
            placeWork: "Web space",
            href: "https://web-space.by/",
            date: "2022 Ноябрь - Сейчас",
            description: [
              "Разработка клиент-серверных веб приложений с внедрением интерак  тивных элементов реализованных с помощью препроцессора tailwind, библиотек gsap, framer motion;",
              "Создание ui-kit для каждого проекта;",
              "Создание Админ панели с помощью ui библиотеки antd;",
              "Использование библиотек state-management Redux, Mobx для хранения товаров, расчета и в последущем отправку на оплату.",
              "Отправка сообщений об обратной связи реализованных в Node.js, отправка и создание .pdf и .html файлов;",
              "Создание веб-приложений в соответствии с макетом (pixel perfect);",
              "Реализация серверных и клиентских компонентов с помощью фреймворка Next.js, использование динамического импорта, динамиских роутов, SSG рендеринга;",
              "Дополнение Backend части с помощью Next route.",
            ],
          },
          {
            JobTitle: "React developer",
            placeWork: "Freelance",
            date: "2022 Ноябрь - 2023 Ноябрь",
            description: [
              "Разработка коммерческих веб-приложений;",
              "Внедрение различных систем оплат;",
              "Внедрение веб-приложений в CMS;",
              "Оптимизация уже готовых проектов, а именно рефакторинг кода, сокращение перерисовок virtual Dom и т.д;",
              "Написание тестов - Jest.",
            ],
          },
          {
            JobTitle: "React developer",
            placeWork: "Aheadworks",
            href: "https://aheadworks.com/",
            date: "2022 Апрель - 2022 Ноябрь",
            description: [
              "Разработка веб-приложений с помощью ui библиотеки Shopify и внедрение проектов в среду Shopify;",
              "Разработка трекинга продукта с анализом данных и предоставлением их в графиках;",
              "Реализация CMS системы для создания внешнего вида интернет магазина;",
              "Создание мультиязычных приложений с системой подписок.",
            ],
          },
        ],
      },
      skills: {
        title: "Навыки",
        technologies: [
          {
            title: "Front-end Development:",
            technologies: `React, 
            Next, Redux, Mobx, JavaScript 
            (ES6+), Sass, HTML5, CSS3, 
            GraphQL, GSAP, 
            React-hook-form`,
          },
          {
            title: "Back-end Proficiency:",
            technologies: "Node.js, Express, GraphQL, RESTful APIs",
          },
          {
            title: "Development:",
            technologies: "Webpack, Babel, ESLint, Docker, Git",
          },
        ],
      },
      education: {
        title: "Образование",
        speciality: `Программист-дизайнер`,
        place: `Факультет информационных технологий, Дизайн электронных и веб-изданий. 
        Белорусский государственный технологический университет, Минск`,
        date: "2018-2022",
      },
      contacts: {
        title: "Контакт",
        info: `Если вы человек, который хочет мне сделать предложение,
          от которого я не смогу отказаться, или просто человек (не робот), 
          с удовольстием с вами пообщаюсь ! Сейчас ищу новые возможности.`,
      },
    },
    system: {
      navigation: {
        home: "Матвей Сергеев",
        aboutMe: "Обо мне",
        HomeinAbout: "Работы",
      },
    },
  },
  eng: {
    home: {
      mainSection: "React developer from Belarus",
      portfolioTitle: "Best works",
      hobbyTitle: "Hobby",
    },
    about: {
      title: "Web developer with JavaScript focus",
      text: [
        "I'm Matvey, a React developer with more than 2 years of experience in creating commercial projects. Throughout my career, I have developed, supported, and improved web applications. My work also included drawing up a work plan in accordance with the specifications and layout and further design. I strive to create high quality projects that increase user satisfaction.",
        "At my previous jobs, I made a significant contribution to the development and support of projects that significantly improved product performance and user engagement. With a strong knowledge of JavaScript, I use a variety of tools and design methodologies to achieve impressive results.",
        "I strive to push boundaries and develop innovative solutions that meet user expectations and achieve business goals.",
      ],
      workExperiences: {
        title: "Work Experiences",
        works: [
          {
            JobTitle: "React developer (Next.js)",
            placeWork: "Web space",
            href: "https://web-space.by/",
            date: "2022 November - Present",
            description: [
              "Development of client-server web applications with the implementation of interactive elements implemented using the tailwind preprocessor, gsap libraries, framer motion;",
              "Creation of ui-kit for each project;",
              "Creation of the Admin panel using the antd ui library;",
              "Using state-management libraries Redux, Mobx for storing goods, calculating and then sending for payment;",
              "Sending feedback messages implemented in Node.js, sending and creating .pdf and .html files;",
              "Creating web applications in accordance with the layout (pixel perfect);",
              "Implementation of server and client components using the Next.js framework, using dynamic import, dynamic routes, SSG rendering;",
              "Supplementing the Backend part using Next route.",
            ],
          },
          {
            JobTitle: "React developer",
            placeWork: "Freelance",
            date: "2022 November - 2023 November",
            description: [
              "Development of commercial web applications;",
              "Implementation of various payment systems;",
              "Implementation of web applications in CMS;",
              "Optimization of ready-made projects, namely code refactoring, reduction of virtual Dom redrawings, etc.;",
              " Writing tests - Jest.",
            ],
          },
          {
            JobTitle: "React developer",
            placeWork: "Aheadworks",
            href: "https://aheadworks.com/",
            date: "2022 April - 2022 November",
            description: [
              "Development of web applications using the Shopify ui library and implementation of projects in the Shopify environment;",
              "Development of product tracking with data analysis and presentation in graphs;",
              "Implementation of a CMS system for creating the appearance of an online store;",
              "Creation of multilingual applications with a subscription system.",
            ],
          },
        ],
      },
      skills: {
        title: "Skills",
        technologies: [
          {
            title: "Front-end Development:",
            technologies: `React, 
            Next, Redux, Mobx, JavaScript 
            (ES6+), Sass, HTML5, CSS3, 
            GraphQL, GSAP, 
            React-hook-form`,
          },
          {
            title: "Back-end Proficiency:",
            technologies: "Node.js, Express, GraphQL, RESTful APIs",
          },
          {
            title: "Development:",
            technologies: "Webpack, Babel, ESLint, Docker, Git",
          },
        ],
      },
      education: {
        title: "Education",
        speciality: `Programmer-designer`,
        place: `Faculty of Information Technology, Design of electronic and web publications. Belarusian State Technological University, Minsk`,
        date: "2018-2022",
      },
      contacts: {
        title: "Contact",
        info: `If you are a person who wants to make me an offer that 
        I can’t refuse, or just a person (not a robot), 
        I’ll be happy to talk to you! Now I'm looking for new opportunities.`,
      },
    },
    system: {
      navigation: {
        home: "Matvey Sergeev",
        aboutMe: "About",
        HomeinAbout: "Works",
      },
    },
  },
};
