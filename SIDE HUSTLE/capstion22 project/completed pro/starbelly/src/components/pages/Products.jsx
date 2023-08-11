import React from 'react'
import './Products.css';
import image from './image.png';
import chick from './chick.jpg';
import event from './event.jpg';
import rice1 from './rice1.jpg';
//import nashv from './nashv.jpg';//
import fud from './fud.jpg';
import denver from './denver.jpg';
import drink from './drink.jpg';


function Products() {
  return (
        <div>
    <div className='product'>
      
            <h1>Our products</h1>
            <p>Our menu consists of juicy, thick steaks that are coated with a secret combination of  flavorings and zesty spices. These steaks are grilled to perfection. We offer mouth watering prime rib, available “Fire Fountain Style”, in four portion sizes. The menu also consists of butter-roasted and seasoned chicken dishes, fresh grilled seafoods, imaginative salads, cold melon chowders, a variety of huge burgers and grilled sandwiches, tender pork chops, soups, appetizers with berry barbecue sauces, refreshing fountain drinks, and flaming desserts..</p>
       <div className='img'>
         <div className='num'>
               <img src={fud} className="fud" alt="" />
               <h5>Pizza</h5>
               <p>Far from the countries Vokalia and Consonantia<span>$3</span></p>
               <button className='button'>Order</button>
         </div>
         <div className='left'>
               <img src={rice1} className="three" alt="" />
               <h5>Fried rice</h5>
               <p>Fried rice with Chicken flavour maggi for you <span>$7</span></p>
               <button className='button'>Order</button>
         </div>
         
         <div className='mid'>
               <img src={image} className="one" alt="" />
               <h5>Jollof rice</h5>
               <p>Scotch bonnet peppers, curry powder, parboiled rice,<span>$5</span></p>
              <button className='button'>Order</button>
         </div>
         <div className='right'>
               <img src={chick} className="two" alt="" />
               <h5>chicken-salad</h5>
               <p>Salad, apple, chicken breasts, green olives, plum preserves<span>$8</span></p>
               <button className='button'>Order</button>
         </div>
       </div>
    </div>
    <div className='coc'>
         <img src={denver} className="next1" alt="" /> 
           
           <div className='side'>
           <img src={drink} className="next2" alt="" /> 
           <img src={event} className="next" alt="" />   
              
          </div>
      </div>
      

      </div>
  )
}

export default Products



