import React from 'react'
import {FaFileSignature } from "react-icons/fa"
import { MdOutlineCancel} from "react-icons/md"
import { ImLocation} from "react-icons/im"

import './upcoming.css'
import { Link } from 'react-router-dom'

const Upcoming = () => {
  return (
    <div>

       <div className='upcoming'>
          <div className='time'>
            <h3> 3:30pm</h3>
            <br></br>
            <p>30minutes</p>

          </div>
          <div className="person">
            <div className="image"> <img src="http://placeimg.com/640/480/people" alt="" /></div>
            
            <div className="nam">
              <h3>Meghan Smith</h3>
              <br></br>
              <p> <ImLocation /> London</p>
            </div>

          </div>
          <div className="Date">
              <h3>September 20th</h3>
              <br></br>
              <ul>
                <li>Confirmed</li>
              </ul>

          </div>

          <div className="iconn">
            <div className="con">
             
             <Link to="#"><FaFileSignature /></Link></div>
        
        <Link to="#"><MdOutlineCancel /></Link>

          </div>


       </div>

    </div>
  )
}

export default Upcoming