import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.tag}>YOU SCROLLED TOO FAR <br /> SCROLL UP TO CONTACT</p>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <p className={styles.logo}>
          <span>HEAR</span>
          <span>HEAR</span>
        </p>
        <p>LANCASTER, PA</p>
        <a
          className={styles.sugartank}
          href="http://www.thesugartank.com/"
          target="_blank"
        >
          @ The Sugartank
        </a>

        <div className={styles.copyright}>
          <p>
            <span>©</span> 2023 Hear Hear
          </p>
          <p>
            Site designed & developed by{" "}
            <a href="www.zacrogers.works" target="_blank">
              ZacRogers.works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
