import React from 'react'
import './Contact.css'

function Contact() {
  return <div className='contactbackground'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <>
      {/*Begining of Hero Section*/}
      <div className="contact-hero">
        <h3>Contact Us</h3>
      </div>
      {/*End of Hero Section*/}
      {/*Begining of Contact List Section*/}
      <div className="contact-list">
        <div className="container">
          <div className="row contact-list-row">
            <div className="col-lg-4">
              <i className="fas fa-envelope" />
              <h3>Address</h3>
              <p>
                198 West 21th Street, Suite <br /> 721 New York NY 10016
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fas fa-phone-square-alt" />
              <h3>Phone</h3>
              <a href="23470364576">23470364576</a>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
            <div className="col-lg-4">
              <i className="fas fa-home" />
              <h3>Email</h3>
              <a href="therealawer@gmail.com">therealawer@gmail.com</a>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
      {/*End of Contact List Section*/}
      {/*Begining of Form Section*/}
      <form action="form.php" className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Get In Touch</h3>
            </div>
            <div className="col-sm-6">
              <label htmlFor="first-name">First Name</label>
              <input type="text" />
            </div>
            <div className="col-sm-6">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" />
            </div>
            <div className="col-sm-6">
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div className="col-sm-6">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="number" />
            </div>

            <div className="col-sm-12">
              <label htmlFor="subject">Subject</label>
              <input type="text" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="message">Message</label>
              <textarea name="" id="" cols={30} rows={10} defaultValue={""} />
            </div>
            <div className="col-lg-2">
              <input type="submit" defaultValue="Submit" />
            </div>
          </div>
        </div>
      </form>
    </>

  </div>
}
export default Contact;