import React from 'react'
import {FaFileSignature } from "react-icons/fa"
import { MdOutlineCancel} from "react-icons/md"
import { ImLocation} from "react-icons/im"

import './upcoming.css'
import { Link } from 'react-router-dom'

const Upcome = () => {
  return (
    <div>

       <div className='upcoming' id='change'>
          <div className='time'>
            <h3> 5:30pm</h3>
            <br></br>
            <p>50minutes</p>

          </div>
          <div className="person">
            <div className="image"> <img src="http://placeimg.com/640/480/people" alt="" /></div>
            
            <div className="nam">
              <h3>Julia Husa</h3>
              <br></br>
              <p> <ImLocation /> Capetown</p>
            </div>

          </div>
          <div className="Datee">
              <h3>September 10th</h3>
              <br></br>
              <ul>
                <li>Pending</li>
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

export default Upcome