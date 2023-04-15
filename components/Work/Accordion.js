import React, { useEffect } from "react";

import styles from "./Accordion.module.scss";

const Accordion = ({
  header,
  data,
  handleClick,
  activeAccordion,
  setActive,
}) => {
  return (
    <div className={styles.accordion}>
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
      {activeAccordion === header && (
        <div className={styles.listContainer}>
          <ol dir="rtl" className={styles.exampleList}>
            {data.map((entry) => {
              return (
                <li key={entry.id}>
                  <button onClick={() => handleClick(entry)}>
                    {entry.title}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Accordion;
