import React from 'react'
import './footerpage.css'
import logostarbelly from './logostarbelly.jpeg'

import {Link} from 'react-router-dom'
function Footerpage() {
  return (
   <div>
    <div className='footer-page'>
     <div className='logname'>
          <img src={logostarbelly} className="loog" height="60em" width='200em' alt="" />
          <p>Starbelly Restaurant, owned by <br></br> STARBELLY FOODS LIMITED <br></br>(RC 905999, CL/S&I/400/14), <br></br>offers perfect atmospher  for all <br></br>life’s occasions when it comes to customer's satifaction .</p>

     </div>
     <div className='contact-info'>
      <h6>CONTACT INFO</h6>
      <p>
      Address : #220 19489 Seton Cres SE
      Calgary, Alberta   T3M 1T4 <br></br>
       Customer Support : +2893284938593<br></br>
       Email : helpdesk@starbelly.com
      </p>

     </div>
     <div className='prod'>
      <h6>SERVICES</h6>
     <p>
      Eat <br></br>
      Drink <br></br>
      Events

     </p>

     </div>
     <div className='company'>
      <h6>COMPANY</h6>
      <p> <Link to='/About' ><span>About Company</span> </Link>
         Get in touch
      </p>


     </div>
     </div>
     <div className='Copyr'>
        STARBELLY RESTAURANT Int'l. Since 2021.
     </div>
     </div>
  )
}

export default Footerpage