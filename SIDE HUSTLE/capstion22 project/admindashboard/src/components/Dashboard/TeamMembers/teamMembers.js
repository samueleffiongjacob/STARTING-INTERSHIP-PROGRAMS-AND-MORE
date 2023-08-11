import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './teamMembers.css'

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([])

    const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';

    useEffect(() => {
        axios.get(url)
       
        .then(response => setTeamMembers(response.data.data))
   
    }, [])
    
 


  return (
    <div className="settings_members">
            <div className="settings_members-table">

             <div  className="settings_members-table-main">

                 <table>
                     <thead>
                         <tr>
                             <th> FULL NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                              <th> IMAGE</th>
                         </tr>
                     </thead>

                     <tbody>

                         {
                             teamMembers ? teamMembers?.map((teamMember, idx) => (
                            <tr key={idx}>
                             <td> 
                                 <p>
                                     <span> {teamMember.firstname}</span>
                                     <span> {teamMember.lastname}</span>
                                 </p>
                                 
                                </td>
                             <td> {teamMember.email}</td>
                             <td> {teamMember.phone}</td>
                             <td> {teamMember.gender}</td>
                             <td> <img src={teamMember.image} alt="icons" /></td>
                         </tr>
                             ) ) : null
                         }
                         
                     </tbody>
                 </table>
                        
             </div>
            </div>
    </div>
  )
}

export default TeamMembers