import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './products.css'

const Products = () => {

    const [products, setProducts] = useState([])

    const url= 'https://fakerapi.it/api/v1/products?_quantity=12&_taxes=12&_categories_type=uuid'
    useEffect(() => 
    {
        axios.get(url)
        .then(response => setProducts(response.data.data))

    }, [])
    



    return (
        <div className='products'>

        {
            products ? products.map((product, idx) => (

                    <div key={idx} className='products-card'> 
        <div className='products-card-image'>
            <img src= {product.image} alt='icon' />
        </div>
        <div className='product-card-details'>
            <h3>{product.name}</h3>
            <p>
               Net price: {product.net_price}
            </p>

            <span><p>Tax:{product.taxes}</p></span>
             <span><p>Price:{product.price}</p></span>
            
        </div>
        
        </div>



            )
            
            
            
            
            )
            
            
            
            
            : null


        }

        
        </div>
    )
}

export default Products