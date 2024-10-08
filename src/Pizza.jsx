import React, { useEffect, useState } from 'react'

export default function Pizza() {
    const [products , setProducts] = useState([]);
    async function getProducts(){
        const data = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza') ;
        const result = await data.json() ;
        setProducts(result.recipes);
    }

   useEffect(()=>{
    getProducts();
   },[]);
  return (
    <div className='container'>
        <div className='row'>
            {products.map(product => 
                <div className='product'>
                    <div className='card text-center'>
                    <h2>{product.title}</h2>
                    <img src={product.image_url}/>
                    </div>
                </div>
            ) }
        </div>

    </div>
  )
}
