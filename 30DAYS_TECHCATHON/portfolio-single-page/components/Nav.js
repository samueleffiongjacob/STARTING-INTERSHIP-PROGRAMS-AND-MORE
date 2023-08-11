import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../public/assets/logo.svg";
import Image from "next/image";
function Nav() {
  return (
    <header className={`container ${styles.nav}`}>
      <div className={styles.image_wrapper}>
        <Image src={logo} alt='logo' />
      </div>
      <span className={styles.btn}>free consultation</span>
    </header>
  );
}

export default Nav;
