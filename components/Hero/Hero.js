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

          <motion.p variants={variants.children} className={styles.bio}>
            Hear Hear (formerly The SugarTank) is an owner operated analog studio run by Levi
            Schlosser. Levi has over 10 years of experience tracking, mixing, and producing. 
            <br/><br/>
            “I get
            quite the dopamine boost from tracking, mixing, and creating music
            for visual storytellers. After all, music should make us come alive!
            For me, nothing is more rewarding than catching and interpreting
            someone else’s vision for their song and helping them reach that
            goal quickly and creatively. That is the heart here at The
            SugarTank. Thank you for checking out the site I hope that I can
            help put your story and your song in the best possible light."
            <br/>-Levi Schlosser<br/><br/>
            To get in touch
            fill out the contact form below.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
