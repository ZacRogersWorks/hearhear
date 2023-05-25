import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

import styles from "./Contact.module.scss";
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

const Contact = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) controls.start("animate");
  }, [isInView]);

  const handleImageClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const images = [
    { src: "/images/1.jpg", alt: "Image 1", width: 800, height: 600 },
    { src: "/images/2.jpg", alt: "Image 2", width: 800, height: 600 },
    { src: "/images/3.jpg", alt: "Image 3", width: 800, height: 600 },
    { src: "/images/4.jpg", alt: "Image 4", width: 800, height: 600 },
  ];

  return (
    <motion.section
      className={styles.contact}
      ref={ref}
      variants={variants.parent}
      initial="initial"
      animate={controls}
    >
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <motion.div
            variants={variants.children}
            key={index}
            className={`${styles.image} ${
              expandedIndex === index ? styles.expanded : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 25vw, (max-width: 1200px) 50vw"/>
          </motion.div>
        ))}
      </div>
      <div className={styles.content}>
        <motion.h2 variants={variants.children}>CONTACT</motion.h2>
        <motion.form
          className={styles.form}
          variants={variants.children}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <p className={styles.hidden}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            Hi, my name is{" "}
            <input type="text" id="name" name="name" placeholder="Name" />
            you can find some of my work at{" "}
            <input
              type="text"
              id="social"
              name="social"
              placeholder="Social Link"
            />
            I&apos;m inquiring regarding:{" "}
            <textarea id="message" name="message" placeholder="Message" />
            and you can contact me back at{" "}
            <input type="email" id="email" name="email" placeholder="email" />
          </p>
          <motion.button type="submit" variants={variants.children}>
            SEND
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47.367"
              height="40.6"
              viewBox="0 0 47.367 40.6"
            >
              <path
                id="Icon_metro-arrow-right"
                data-name="Icon metro-arrow-right"
                d="M33.958,45.393,50.874,28.476a3.383,3.383,0,0,0,0-4.785L33.958,6.775a3.383,3.383,0,0,0-4.785,4.785L40.314,22.7H7.882a3.383,3.383,0,0,0,0,6.767H40.314L29.173,40.608a3.383,3.383,0,1,0,4.785,4.785Z"
                transform="translate(-4.499 -5.784)"
                fill="#e8ff45"
              />
            </svg>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
