import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./cardProduct.module.scss";

const CardProduct: FC<{
  href: string;
  alt: string;
  title: string;
  description: string;
  images: StaticImageData[];
  refLink?: any;
  className?: string;
}> = ({ images, href, alt, title, description, refLink, className = "" }) => {
  return (
    <Link
      href={href}
      ref={refLink}
      className={`${styles.wrapperCard}  ${className}`}
      target="_blank"
    >
      <div className={styles.card}>
        <figure>
          <Image
            src={images?.[0]}
            alt={alt}
            className={`${images.length === 2 ? styles.imageFirst : ""}`}
            fill
          />
          {images.length === 2 && (
            <Image
              src={images?.[1]}
              alt={alt}
              fill
              className={styles.imageSecond}
            />
          )}
        </figure>
        <div className="text-center px-5">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
