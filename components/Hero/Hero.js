import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.scss";
import Image from "next/image";

const variants = {
  parent: {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  children: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 70,
      },
    },
  },
};

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
        <motion.div
          className={styles.flexContainer}
          variants={variants.parent}
          initial="initial"
          animate="animate"
        >
          <motion.p className={styles.location} variants={variants.children}>
            Lancaster, PA
          </motion.p>
          <h1>
            <span>HEAR</span>
            <span>HEAR</span>
          </h1>
          <div className={styles.headingCaption}>
            <motion.p variants={variants.children}>PRODUCTION</motion.p>
            <motion.p variants={variants.children}>TRACKING</motion.p>
            <motion.p variants={variants.children}>MIXING</motion.p>
          </div>
          <motion.p variants={variants.children} className={styles.byLevi}>
            <span>By</span> Levi Schlosser
          </motion.p>
          <motion.p variants={variants.children} className={styles.bio}>
            I get quite the dopamine boost from tracking, mixing, and creating
            music for visual storytellers. After all music should make us come
            alive! For me, nothing is more rewarding than catching and
            interpreting someone else’s vision for their song and helping them
            reach that goal quickly and creatively. That is the heart of Hear
            Hear Productions. I hope that I
            can help put your story and your song in the best light.
            <br />
            <br />
            Currently working at a private owner-operated analog recording
            studio,{" "}
            <a href="http://www.thesugartank.com/" target="_blank">
              The Sugar Tank,
            </a>{" "}
            located in Lancaster, Pa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
