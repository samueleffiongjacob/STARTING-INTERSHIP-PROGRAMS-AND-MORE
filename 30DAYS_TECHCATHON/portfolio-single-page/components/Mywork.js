import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SlideItem from "./SlideItem";
import img_1 from "../public/assets/image-slide-1.jpg";
import img_2 from "../public/assets/image-slide-2.jpg";
import img_3 from "../public/assets/image-slide-3.jpg";
import img_4 from "../public/assets/image-slide-4.jpg";
import img_5 from "../public/assets/image-slide-5.jpg";
import arrow_left from "../public/assets/icon-arrow-left.svg";
import arrow_right from "../public/assets/icon-arrow-right.svg";
function Mywork() {
  const ref = useRef();
  const [slliderWidth, setSliderWidth] = useState(0);
  const [slideLeft, setSlideLeft] = useState(0);
  const [hidebtnleft, setHidebtnleft] = useState(false);
  const [hidebtnright, setHidebtnright] = useState(true);

  useEffect(() => {
    setSliderWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    if (slideLeft < 100) {
      setHidebtnleft(false);
    } else if (slideLeft > slliderWidth) {
      setHidebtnright(false);
    } else {
      setHidebtnleft(true);
      setHidebtnright(true);
    }
  }, [slideLeft]);

  const moveRight = () => {
    const el = ref.current;
    setSlideLeft((el.scrollLeft += 300));
    const elprev = ref.current.scrollLeft;
    if (elprev === slliderWidth) {
      if (hidebtnleft === false) {
        setHidebtnleft(true);
      }
    }
  };

  const moveLeft = () => {
    const el = ref.current;
    setSlideLeft((el.scrollLeft -= 300));
    const elprev = ref.current.scrollLeft;
    if (elprev === 0) {
      if (hidebtnright === false) {
        setHidebtnright(true);
      }
    }
  };

  const hscroll = () => {
    const el = ref.current.scrollLeft;
    if (el == 0) {
      setSlideLeft((ref.current.scrollLeft = 0));
    } else if (el === slliderWidth) {
      setSlideLeft((ref.current.scrollLeft = el));
    } else {
      setSlideLeft((ref.current.scrollLeft = el));
    }
  };

  return (
    <section className={styles.porjects}>
      <h3>My Work</h3>
      <div
        className={styles.slider_container}
        ref={ref}
        onScroll={() => hscroll}
      >
        <SlideItem pic={img_1} description={"image one"} />
        <SlideItem pic={img_2} description={"image two"} />
        <SlideItem pic={img_3} description={"image three"} />
        <SlideItem pic={img_4} description={"image four"} />
        <SlideItem pic={img_5} description={"image five"} />
      </div>
      <div className={styles.slide_arrows}>
        {hidebtnleft === true ? (
          <button onClick={moveLeft}>
            <Image src={arrow_left} alt='arrow left' />
          </button>
        ) : (
          <button disabled={true} className={styles.btn_disbaled}>
            <Image src={arrow_left} alt='arrow left' />
          </button>
        )}
        {hidebtnright === true ? (
          <button onClick={moveRight}>
            <Image src={arrow_right} alt='arrow right' />
          </button>
        ) : (
          <button disabled={true} className={styles.btn_disbaled}>
            <Image src={arrow_right} alt='arrow right' />
          </button>
        )}
      </div>
    </section>
  );
}

export default Mywork;
