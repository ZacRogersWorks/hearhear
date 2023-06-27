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
          <motion.a
            className={styles.location}
            href="https://goo.gl/maps/6jiNe3Mh6s5TM6hp6"
            target="_blank"
            variants={variants.children}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7.752"
              height="12.404"
              viewBox="0 0 7.752 12.404"
            >
              <path
                id="Icon_metro-location"
                data-name="Icon metro-location"
                d="M12.231,1.928A3.876,3.876,0,0,0,8.355,5.8c0,3.876,3.876,8.528,3.876,8.528S16.107,9.68,16.107,5.8a3.876,3.876,0,0,0-3.876-3.876Zm0,6.25A2.374,2.374,0,1,1,14.605,5.8,2.374,2.374,0,0,1,12.231,8.178ZM10.729,5.8a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,10.729,5.8Z"
                transform="translate(-8.355 -1.928)"
                fill="#483c46"
              />
            </svg>

            <div>
              252 N Queen St
              <br />
              Lancaster, PA 17602
            </div>
          </motion.a>
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
            Hear Hear (formerly The SugarTank) is an owner operated analog
            studio run by Levi Schlosser. Levi has over 10 years of experience
            tracking, mixing, and producing.
            <br />
            <br />
            &ldquo;I get quite the dopamine boost from tracking, mixing, and
            creating music for visual storytellers. After all, music should make
            us come alive! For me, nothing is more rewarding than catching and
            interpreting someone else’s vision for their song and helping them
            reach that goal quickly and creatively. That is the heart here at
            The SugarTank. Thank you for checking out the site I hope that I can
            help put your story and your song in the best possible light.&ldquo;
            <br />
            -Levi Schlosser
            <br />
            <br />
            To get in touch fill out the contact form below.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
