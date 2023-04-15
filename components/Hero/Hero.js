import React from "react";

import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Hero_Background.webp"
          alt="Flower Background"
          width={1250}
          height={703}
          priority
        />
      </div>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <p className={styles.location}>Lancaster, PA</p>
          <h1>
            <span>HEAR</span>
            <span>HEAR</span>
          </h1>
          <div className={styles.headingCaption}>
            <p>PRODUCTION</p>
            <p>TRACKING</p>
            <p>MIXING</p>
          </div>
          <p className={styles.byLevi}><span>By</span> Levi Schlosser</p>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
