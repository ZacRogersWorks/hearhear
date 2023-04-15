import React, { useState } from "react";
import { links } from "@/data/data";

import styles from "./Work.module.scss";
import Accordion from "./Accordion";

const Work = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleExampleClick = (data) => {
    setSelectedExample(data);
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
      <div className={styles.container}>
        {selectedExample && (
          <div className={styles.infoContainer}>
            <div className={styles.infoContent}>
              <button onClick={handleExit}>
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
              </button>
              <h4>{selectedExample.title}</h4>
              <p>{selectedExample.desc}</p>
              <a href={selectedExample.link} target="_blank">
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
              </a>
            </div>
          </div>
        )}
        <div className={styles.content}>
          <h2>SELECTED WORKS</h2>
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
      </div>
    </section>
  );
};

export default Work;
