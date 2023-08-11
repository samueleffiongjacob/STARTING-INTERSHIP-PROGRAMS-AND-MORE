import React from 'react'
import Barchart from '../Barchart'
import Linechart from '../Linechart'
import Piechart from '../Piechart'
import Upcoming from '../Upcoming'
import './Homepage.css'
import Upcome from '../Upcome'
import Upcomee from '../Upcomee'
import { GrAdd} from "react-icons/gr"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='dash-details'>
       <div className='com'>
        <div className='meet'>
         <h1>Upcoming Meetings</h1>
         <div className='gr'>
          <Link to="#"><GrAdd /></Link>
          
          </div>
         
        </div>
     <Upcoming />
     <br></br>
     <br></br>
   <Upcome />
   <br></br>
     <br></br>
   <Upcomee /></div>
     

     
       
        <div className='graf'>
         <div className='one'><h2>Sales</h2><Barchart /></div>
          
         <div className='one'><h2>Account Summary</h2><Piechart /></div>
         </div>

         <div className='line'>
          <h2>Daily Visitors</h2>
           <Linechart /></div>
         

      

    </div>
  )
}

export default Homepage