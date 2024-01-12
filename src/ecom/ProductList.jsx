import React from 'react'
import products from './products'

const ProductList = ({addToCart}) => {
  
    
  return (
    <div>
        <h1>Product List</h1>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    {product.name}- ${product.price}
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ProductList
