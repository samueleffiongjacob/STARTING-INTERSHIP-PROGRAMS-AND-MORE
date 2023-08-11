import React from 'react'
import './Navbarr.css'
import { Link } from 'react-router-dom'

const Navbarr = () => {
    return (
        <div className='navbarr'>
            <div className='navbarr-headerr'>
                <h1> Capstone 2 </h1>

          
          <ul  className='list'>
                    {/* <ul className={ toggle === false ? 'ul-light' : 'ul-dark'}> */}
                    <li>  Overview  </li>
                    <li>  About Us  </li>
                    <li> Our Product  </li>
                    <li>  Contact Us  </li>
                </ul>
        
                
            </div>

            <div className='navbarr-sign'>
                <Link to='/Signin'> <button>  Sign In</button> </Link>
                <Link to='/Signup' > <button> Sign Up </button> </Link>
            </div>
        </div>
    )
}

export default Navbarr