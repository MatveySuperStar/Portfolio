import { content } from "@/lib/const";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import me from "@/public/about/me.png";
import styles from "./infoCV.module.scss";

const InfoCV: FC<{ language: "ru" | "eng" }> = ({ language }) => {
  const dataInfo = [
    {
      title: content[language].about.skills.title,
      description: content[language].about.skills.technologies.map((item) => (
        <div key={item.title}>
          <p className="h5">{item.title}</p>
          <p>{item.technologies}</p>
        </div>
      )),
    },
    {
      title: content[language].about.workExperiences.title,

      description: content[language].about.workExperiences.works.map((item) => (
        <div key={item.JobTitle}>
          <p className="h5">{item.JobTitle}</p>
          <p>{item.placeWork}</p>
          <p className="caption !leading-4 text-gray-500 mb-3">{item.date}</p>
          <ul className="list-disc pl-5 body-3 flex flex-col gap-y-3">
            {item.description.map((subitem) => (
              <li key={subitem}>{subitem}</li>
            ))}
          </ul>
        </div>
      )),
    },
  ];

  const viewInfo = dataInfo.map((item) => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      <div className="grid gap-8 justify-between">{item.description}</div>
    </div>
  ));

  return (
    <section>
      <div className={styles.wrapperInfo}>
        <div className={`text `}>
          <h1 className="h2">{content[language].about.title}</h1>
          <div className="flex flex-col gap-10">
            {content[language].about.text.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <figure
          className={`w-full h-[360px] md:h-[728px] relative overflow-hidden `}
        >
          <Image src={me} alt="me" fill className="object-cover" />
        </figure>
        <div className="text">
          {viewInfo}
          <div>
            <h4>{content[language].about.education.title}</h4>
            <p className="h5">{content[language].about.education.speciality}</p>
            <p>{content[language].about.education.place}</p>
            <p className="caption !leading-4 text-gray-500">
              {content[language].about.education.date}
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h4>{content[language].about.contacts.title}</h4>
              <p>{content[language].about.contacts.info}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link target="_blank" href="/cv.pdf">
                CV PDF
              </Link>
              <Link target="_blank" href="https://t.me/MotoMotoo">
                Telegram
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/matvey-sergeev-82641a230/"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCV;
