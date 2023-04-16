import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.scss";
import Image from "next/image";

const variants = {
  parent: {
    initial: {
    },
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: .2
      }
    }
  },
  children: {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 70,
      }
    }
  }
}

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
        <motion.div className={styles.flexContainer} variants={variants.parent} initial="initial" animate="animate">
          <motion.p className={styles.location} variants={variants.children}>Lancaster, PA</motion.p>
          <h1>
            <span>HEAR</span>
            <span>HEAR</span>
          </h1>
          <div className={styles.headingCaption}>
            <motion.p variants={variants.children}>PRODUCTION</motion.p>
            <motion.p variants={variants.children}>TRACKING</motion.p>
            <motion.p variants={variants.children}>MIXING</motion.p>
          </div>
          <motion.p  variants={variants.children}className={styles.byLevi}>
            <span>By</span> Levi Schlosser
          </motion.p>
          <motion.p  variants={variants.children}className={styles.bio}>
            Striving to create unique sounds that have soul and personality. I
            love getting projects to the finish line whether I&apos;m tracking and
            mixing, creating music for visual storytellers, or producing a track
            from start to finish.
            I feel that I do my best work in an environment where people know
            what they want and aren’t afraid to explore and craft it - nothing
            is more rewarding then catching and interpreting someone’s vision
            for a song.
            <br />
            <br />
            Currently working at a private owner-operated analog recording
            studio,{" "}
            <a
              href="http://www.thesugartank.com/"
              target="_blank"
            >
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
