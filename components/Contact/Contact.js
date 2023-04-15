import React, { useState } from "react";

import styles from "./Contact.module.scss";
import Image from "next/image";

const Contact = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
    <section className={styles.contact}>
      <div className={styles.gallery}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.image} ${
            expandedIndex === index ? styles.expanded : ''
          }`}
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      ))}
      </div>
      <div className={styles.content}>
        <h2>CONTACT</h2>
        <form className={styles.form}>
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
          <button type="submit">
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
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
