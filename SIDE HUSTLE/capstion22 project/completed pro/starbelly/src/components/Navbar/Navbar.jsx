import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logostarbelly from './logostarbelly.jpeg'


function Navbar() {
  return (
    
        <div id='navtop' className='Navbar'>
         <div className='name'>
          
          <img src={logostarbelly} className="loog" height="40px" alt="" />
              <h2>Starbelly</h2>
              
         </div>
              <ul className='Navlink'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/About'>About</Link></li>
               <li><Link to='/Products'>Product</Link></li>
               <li><Link to='/Contact'>Contacts</Link></li>
              </ul>
    </div>
  )
}

export default Navbar