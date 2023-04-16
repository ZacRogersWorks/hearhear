import React, { useEffect, useRef } from "react";

import styles from "./Footer.module.scss";
import { motion, useAnimationControls, useInView } from "framer-motion";

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
  opacity: {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        duration: .8,
        ease: "easeOut"
      }
    }
  },
  bgOpacity: {
    initial: { opacity: 0},
    animate: {
      opacity: .3,
      transition: {
        duration: .8,
        ease: "easeOut"
      }
    }
  },
  fromRight: {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 70
      }
    }
  }
}

const Footer = () => {
  const ref = useRef()
  const isInView = useInView(ref, {amount: .5})
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) controls.start("animate")
  }, [isInView])

  return (
    <motion.footer className={styles.footer} ref={ref} variants={variants.parent} initial="initial" animate={controls}>
      <p className={styles.tag}>YOU SCROLLED TOO FAR <br /> SCROLL UP TO CONTACT</p>
      <motion.div className={styles.background} variants={variants.bgOpacity}></motion.div>
      <div className={styles.container}>
        <p className={styles.logo}>
          <motion.span variants={variants.fromRight}>HEAR</motion.span>
          <motion.span variants={variants.fromRight}>HEAR</motion.span>
        </p>
        <motion.p variants={variants.fromRight}>LANCASTER, PA</motion.p>
        <motion.a
          className={styles.sugartank}
          href="http://www.thesugartank.com/"
          target="_blank"
          variants={variants.fromRight}
        >
          @ The Sugar Tank
        </motion.a>

        <motion.div className={styles.copyright} variants={variants.fromRight}>
          <p>
            <span>©</span> 2023 Hear Hear
          </p>
          <p>
            Site designed & developed by{" "}
            <a href="www.zacrogers.works" target="_blank">
              ZacRogers.works
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
