import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct'
import '../App.css'

function ProductList () {

  const [ proData, setproData ] = useState( [] )

  useEffect( () => {
    var abc = true
    if ( abc === true )
    {
      fetch( "https://dummyjson.com/products" )
        .then( res => res.json() )
        .then( data => {
          setproData( data.products )
        } )
        .catch( err => console.log( err ) )
    }
    return () => { abc = false }
  }, [] )

  console.log( proData );

  return (
    <div className='products'>
      {
        proData.map( ( val, i ) => (
          <OneProduct
            category={ val.category }
            image={ val.images[ 0 ] }
            description={ val.description }
            title={ val.title }
            brand={ val.brand }
            price={ val.price }
            discountPercentage={ val.discountPercentage }
            rating={ val.rating }
          />
        ) )
      }
    </div>
  )
}

export default ProductList