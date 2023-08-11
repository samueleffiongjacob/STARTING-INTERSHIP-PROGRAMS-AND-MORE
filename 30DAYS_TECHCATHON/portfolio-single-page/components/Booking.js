import React from 'react'
import styles from "../styles/Home.module.css";
function Booking() {
  return (
    <section className={`container ${styles.booking}`}>
      <div className={styles.booking_body}>
        <div>
          <h2>Book a call with me</h2>
          <p> I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a
            free consultation. Then we can move forward from there.</p>
        </div>

        <span className={styles.btn}>Free Consultation</span>
      </div>





    </section>
  )
}

export default Booking
