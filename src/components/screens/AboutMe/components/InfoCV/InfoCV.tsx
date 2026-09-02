import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import me from '@/public/about/me.png';
import styles from './infoCV.module.scss';

type WorkItem = {
  jobTitle: string;
  placeWork: string;
  date: string;
  href?: string;
  summary: string;
  description: string[];
  achievements: string[];
  technologies: string;
};

const InfoCV = (): React.ReactElement => {
  const t = useTranslations('About');
  const paragraphs = t.raw('text') as string[];
  const skills = t.raw('skills.technologies') as Array<{
    title: string;
    technologies: string;
  }>;
  const works = t.raw('workExperiences.works') as WorkItem[];
  const languages = t.raw('languages.items') as string[];

  const dataInfo = [
    {
      title: t('workExperiences.title'),
      description: works.map((item) => (
        <div key={`${item.jobTitle}-${item.placeWork}`}>
          <p className="h5">{item.jobTitle}</p>
          {item.href ? (
            <Link
              href={item.href}
              target="_blank"
              className="underline-offset-2"
            >
              {item.placeWork}
            </Link>
          ) : (
            <p>{item.placeWork}</p>
          )}
          <p className="caption mb-3 !leading-4 text-gray-500">{item.date}</p>
          <p className="mb-3">{item.summary}</p>
          <ul className="body-3 mb-4 flex list-disc flex-col gap-y-3 pl-5">
            {item.description.map((subitem) => (
              <li key={subitem}>{subitem}</li>
            ))}
          </ul>
          <p className="h5 mb-2">{t('workExperiences.achievementsTitle')}</p>
          <ul className="body-3 mb-4 flex list-disc flex-col gap-y-3 pl-5">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <p className="h5 mb-1">{t('workExperiences.technologiesTitle')}</p>
          <p>{item.technologies}</p>
        </div>
      )),
    },
    {
      title: t('skills.title'),
      description: skills.map((item) => (
        <div key={item.title}>
          <p className="h5">{item.title}</p>
          <p>{item.technologies}</p>
        </div>
      )),
    },
  ];

  const viewInfo = dataInfo.map((item) => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      <div className="grid justify-between gap-8">{item.description}</div>
    </div>
  ));

  const [firstParagraph, ...restParagraphs] = paragraphs;

  return (
    <section>
      <div className={styles.wrapperInfo}>
        <div className={styles.text}>
          <div className={styles.intro}>
            <div className={styles.heading}>
              <figure className={styles.photo}>
                <Image src={me} alt="me" fill className="object-cover" />
              </figure>
              <h1 className="h2">{t('title')}</h1>
            </div>
            <p>{firstParagraph}</p>
            {restParagraphs.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className={styles.text}>
          {viewInfo}
          <div>
            <h4>{t('education.title')}</h4>
            <p className="h5">{t('education.speciality')}</p>
            <p>{t('education.place')}</p>
            <p className="caption !leading-4 text-gray-500">
              {t('education.date')}
            </p>
          </div>
          <div>
            <h4>{t('languages.title')}</h4>
            <ul className="body-3 flex list-disc flex-col gap-y-2 pl-5">
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h4>{t('contacts.title')}</h4>
              <p>{t('contacts.info')}</p>
            </div>
            <div className={styles.contacts}>
              <Link target="_blank" href={t('contacts.cv')}>
                <CvIcon />
                {t('contacts.cvLabel')}
              </Link>
              <Link target="_blank" href="https://t.me/MotoMotoo">
                <TelegramIcon />
                Telegram
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/matvey-sergeev/"
              >
                <LinkedinIcon />
                Linkedin
              </Link>
              <Link target="_blank" href="https://github.com/matvey-sergeev">
                <GithubIcon />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
} as const;

const CvIcon = (): React.ReactElement => (
  <svg {...iconProps}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 2 6 6h-6zM8 13h8v2H8zm0 4h8v2H8zm0-8h4v2H8z" />
  </svg>
);

const TelegramIcon = (): React.ReactElement => (
  <svg {...iconProps}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const LinkedinIcon = (): React.ReactElement => (
  <svg {...iconProps}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const GithubIcon = (): React.ReactElement => (
  <svg {...iconProps}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default InfoCV;
