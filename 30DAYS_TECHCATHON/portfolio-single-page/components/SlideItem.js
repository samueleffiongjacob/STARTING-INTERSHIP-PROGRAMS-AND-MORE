import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function SlideItem({ pic, description }) {
  return (
    <div className={styles.image_wrapper}>
      <Image src={pic} alt={description} />
    </div>
  );
}

export default SlideItem;
