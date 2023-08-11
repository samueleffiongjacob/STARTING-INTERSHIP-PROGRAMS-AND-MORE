import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import amy from "../public/assets/image-amy.webp";

function Bio() {
  return (
    <section className={`container ${styles.bio}`}>
      <div className={styles.image_wrapper}>
        <Image src={amy} alt='amy' />
      </div>
      <div className={styles.bio_container}>
        <div className={styles.bio_body}>
          <h2>  I’m Amy, and I’d love to work on your next project</h2>
          <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations
            to complete mobile apps. I’m also handy with a camera!</p>
          <span className={styles.btn}>Free Consultation</span>
        </div>
      </div>

    </section>
  );
}

export default Bio;
