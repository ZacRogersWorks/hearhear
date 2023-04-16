import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/Success.module.scss";
import Link from "next/link";

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

const success = () => {
  return (
    <>
      <Head>
        <title>Hear Hear</title>
        <meta
          name="description"
          content="Lancaster, PA based recording, mixing, and production by Levi Schlosser"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <motion.main
        className={styles.success}
        variants={variants.parent}
        initial="initial"
        animate="animate"
      >
        <motion.div className={styles.background}></motion.div>
        <motion.h1 variants={variants.children}>Message Sent!</motion.h1>
        <motion.p variants={variants.children}>
          I&apos;ll get back to you asap
        </motion.p>
        <motion.div className={styles.link} variants={variants.children}>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Icon_material-arrow_back"
                data-name="Icon material-arrow_back"
                d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z"
                transform="translate(-6 -6)"
                fill="#1888ff"
              />
            </svg>
            <p>Back To Home</p>
          </Link>
        </motion.div>
      </motion.main>
    </>
  );
};

export default success;
