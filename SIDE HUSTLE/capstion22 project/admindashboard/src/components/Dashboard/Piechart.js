import React from 'react'
import {Chart as ChartJS, ArcElement, Legend, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2' 


ChartJS.register(
 ArcElement,
Tooltip,
Legend )

const Piechart = () => {

  var data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


     var options = {

       maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {

         labels:{
          fontSize:26
         }
        }
    }




  return (
    <div>
       <Pie 
       height={400}
       data={data}
       options={options}
       />

    </div>
  )
}

export default Piechart