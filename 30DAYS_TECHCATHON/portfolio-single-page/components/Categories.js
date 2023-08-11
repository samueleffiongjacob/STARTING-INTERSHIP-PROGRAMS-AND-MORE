import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import patterinApp from "../public/assets/pattern-apps.svg";
import patternGraphic from "../public/assets/pattern-graphic-design.svg";
import patternUI from "../public/assets/pattern-ui-ux.svg";
import patternIllus from "../public/assets/pattern-illustrations.svg";
import patternPhoto from "../public/assets/pattern-photography.svg";
import patternMotion from "../public/assets/pattern-motion-graphics.svg";

function Categories() {
  return (
    <section className={`container ${styles.categories}`}>
      <div className={styles.graphic}>
        <div className={styles.image_wrapper}>
          <Image src={patternGraphic} alt='graphic design' />
        </div>
        <p>Graphic Design</p>
      </div>
      <div className={styles.ui}>
        <div className={styles.image_wrapper}>
          <Image src={patternUI} alt='ui ux' />
        </div>
        <p>UI/UX</p>
      </div>
      <div className={styles.apps}>
        <div className={styles.image_wrapper}>
          <Image src={patterinApp} alt='apps' />
        </div>
        <p>Apps</p>
      </div>
      <div className={styles.illustration}>
        <div className={styles.image_wrapper}>
          <Image src={patternIllus} alt='illustrations' />
        </div>
        <p>Illustrations</p>
      </div>
      <div className={styles.photography}>
        <div className={styles.image_wrapper}>
          <Image src={patternPhoto} alt='photography' />
        </div>
        <p> Photography</p>
      </div>
      <div className={styles.motion}>
        <div className={styles.image_wrapper}>
          <Image src={patternMotion} alt='motion graphics' />
        </div>
        <p>Motion Graphicsn</p>
      </div>
    </section>
  );
}

export default Categories;
