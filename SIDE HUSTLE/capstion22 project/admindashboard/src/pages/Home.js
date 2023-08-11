import React from 'react'
import Navbar from '../components/Navbar'
import cic from './cic.jpeg'
import { Link } from 'react-router-dom'
import './home.css'
import Navbarr from '../components/Navbarr'


const Home = () => {
    // const [count, setCount] = useState(10)


    return (


        <div className='home'>
            <Navbarr />

            <Navbar />

            <div className='home-content'>
                <div className='home-content-text'>
                    <h1> Join InterBooks</h1>
                    <p> InterBooks is a platform where you get access to quality books online including PDFs and audio books
                        join a community of online readers, get the latest information on new books of interest.</p>

                    <Link to="/signup"> <button className='button i-button'> Click to get started</button> </Link>
                    <p>Already have an account? Sign in</p>
                    <Link to="/signin"> <button className='button s-button'> Sign in</button> </Link>




                </div>

                <div className='home-content-image'>
                    <img src={cic} alt="icon" />
                </div>



            </div>


        </div>
    )
}

export default Home