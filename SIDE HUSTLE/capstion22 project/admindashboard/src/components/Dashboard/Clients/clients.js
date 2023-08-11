import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './client.css'

const Clients = () => {
    const [clients, setClients] = useState([])

    
    const url = "https://fakerapi.it/api/v1/companies?_quantity=10)"

    
    useEffect(() => {
        axios.get(url) 
        .then(response => setClients(response.data.data) )

      
    }, [])

    console.log(clients)
    



    return (

       

        <div className='client'> 
        

            <div className='client-table'>
                <div className='client-table_main'>
           <table >
                     <thead className='head'>
                         <tr>
                            
                             <th  className='table'>  name</th>
                             <th  className='table'> email </th>
                             <th  className='table'> Vat</th>
                              <th  className='table'>phone</th>
                             <th  className='table'> country  </th>
                         </tr>
                     </thead>
                    

                    
                     <tbody>

                         {
                             clients ? clients?.map((client, idx) => (
                            <tr key={idx}>
                             
                             <td> {client.name}</td>
                             <td> {client.email}</td>
                             <td> {client.vat}</td>
                             <td> {client.phone}</td>
                             <td> {client.country}</td>
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

export default Clients