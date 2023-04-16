import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimationControls, AnimatePresence } from "framer-motion";

import { links } from "@/data/data";
import styles from "./Work.module.scss";
import Accordion from "./Accordion";

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
    },
  },
  infoContainer: {
    initial: { 
      opacity: 0,
    x: 50},
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        duration: .3,
        ease: "easeOut",
      }
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: .3,
        ease: "easeOut",
      }
    }
  },
  infoContainerButtons: {
    initial: { scale: 0},
    animate: { 
      scale: 1,
      transition: {
        delay: .5,
        type: "spring",
        damping: 10,
        stiffness: 70
      }
    }
  },
  infoContainerText: {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        
        duration: .5,
        ease: "easeOut"
      }
    }
  }
}

const Work = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const ref = useRef(null)
  const isInView = useInView(ref, {amount: .4});
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) controls.start("animate")
  }, [isInView])


  const handleExampleClick = (data) => {
    setSelectedExample(null);
    setTimeout(() => setSelectedExample(data), 300)
    
  };

  const handleExit = () => {
    setSelectedExample(null);
  };

  const setActive = (accordion) => {
    if (activeAccordion === accordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(accordion);
    }
  };

  return (
    <section className={styles.work}>
      <motion.div className={styles.container} ref={ref} variants={variants.parent} initial="initial" animate={controls}>
        <AnimatePresence>
        {selectedExample && (
          <motion.div className={styles.infoContainer} variants={variants.infoContainer} initial="initial" animate="animate" exit="exit">
            <div className={styles.infoContent}>
              <motion.button onClick={handleExit} variants={variants.infoContainerButtons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.323"
                  height="20.035"
                  viewBox="0 0 18.323 20.035"
                >
                  <path
                    id="Icon_metro-cross"
                    fill="#483C46"
                    data-name="Icon metro-cross"
                    d="M20.726,18.024h0l-5.558-6.078,5.558-6.078h0a.631.631,0,0,0,.131-.223.669.669,0,0,0-.131-.662L18.1,2.111a.537.537,0,0,0-.605-.143.566.566,0,0,0-.2.143h0L11.732,8.189,6.174,2.111h0a.566.566,0,0,0-.2-.143.537.537,0,0,0-.605.143L2.738,4.982a.669.669,0,0,0-.131.662.632.632,0,0,0,.131.223h0L8.3,11.946,2.738,18.024h0a.633.633,0,0,0-.131.223.669.669,0,0,0,.131.662L5.364,21.78a.537.537,0,0,0,.605.143.566.566,0,0,0,.2-.143h0L11.732,15.7l5.559,6.078h0a.566.566,0,0,0,.2.143.537.537,0,0,0,.605-.143l2.626-2.871a.669.669,0,0,0,.131-.662.632.632,0,0,0-.131-.223Z"
                    transform="translate(-2.571 -1.928)"
                  />
                </svg>
              </motion.button>
              <motion.h4 variants={variants.infoContainerText}>{selectedExample.title}</motion.h4>
              <motion.p variants={variants.infoContainerText}>{selectedExample.desc}</motion.p>
              <motion.a href={selectedExample.link} target="_blank" variants={variants.infoContainerButtons}>
                {selectedExample.linkName}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.45"
                  height="18.45"
                  viewBox="0 0 18.45 18.45"
                >
                  <g
                    id="Icon_feather-external-link"
                    data-name="Icon feather-external-link"
                    transform="translate(-3.5 -3.086)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M17.863,15.236v5.345a1.782,1.782,0,0,1-1.782,1.782h-9.8A1.782,1.782,0,0,1,4.5,20.582v-9.8A1.782,1.782,0,0,1,6.282,9h5.345"
                      transform="translate(0 -1.827)"
                      fill="none"
                      stroke="#1888FF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M22.5,4.5h5.345V9.845"
                      transform="translate(-7.309)"
                      fill="none"
                      stroke="#1888FF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M15,14.3l9.8-9.8"
                      transform="translate(-4.264)"
                      fill="none"
                      stroke="#1888FF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
        <div className={styles.content}>
          <motion.h2 variants={variants.children}>SELECTED WORKS</motion.h2>
          <Accordion
            header={"Production"}
            data={links.production}
            handleClick={handleExampleClick}
            activeAccordion={activeAccordion}
            setActive={setActive}
          />
          <Accordion
            header={"Mixing"}
            data={links.mixing}
            handleClick={handleExampleClick}
            activeAccordion={activeAccordion}
            setActive={setActive}
          />
          <Accordion
            header={"Tracking"}
            data={links.tracking}
            handleClick={handleExampleClick}
            activeAccordion={activeAccordion}
            setActive={setActive}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
