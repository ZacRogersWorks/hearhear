import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Accordion.module.scss";

const variants = {
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
  },
  linkContainer: {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        duration: .1,
        ease: "easeOut",
        staggerChildren: .2
      }
    },
  },
  links: {
    initial: {
      y: -30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 90
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 90
      }
    }
  }
}

const Accordion = ({
  header,
  data,
  handleClick,
  activeAccordion,
  setActive,
}) => {
  return (
    
    <motion.div className={styles.accordion} variants={variants.children}>
      <div className={styles.accordionHeader} onClick={() => setActive(header)}>
        <h3>{header}</h3>
        <button
          className={styles.accordionArrow}
        >
          {activeAccordion === header ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.616"
              height="13.503"
              viewBox="0 0 23.616 13.503"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M18,15.317l8.93,8.937a1.681,1.681,0,0,0,2.384,0,1.7,1.7,0,0,0,0-2.391L19.2,11.738a1.685,1.685,0,0,0-2.327-.049L6.68,21.856a1.688,1.688,0,0,0,2.384,2.391Z"
                transform="translate(-6.188 -11.246)"
                fill="#483c46"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.616"
              height="13.503"
              viewBox="0 0 23.616 13.503"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z"
                transform="translate(-6.188 -11.246)"
                fill="#483c46"
              />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
      {activeAccordion === header && (
       
        <div className={styles.listContainer} >
           
          <motion.ol dir="rtl" className={styles.exampleList} variants={variants.linkContainer} initial="initial" animate="animate" exit="exit">
            {data.map((entry) => {
              return (
                <motion.li key={entry.id} variants={variants.links} exit={{y: -5, opacity: 0}}>
                  <button onClick={() => handleClick(entry)}>
                    {entry.name}
                  </button>
                </motion.li>
              );
            })}
          </motion.ol>
          
        </div>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
