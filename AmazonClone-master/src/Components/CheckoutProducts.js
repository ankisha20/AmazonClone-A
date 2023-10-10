import React, { useEffect, useState } from 'react'
import '../App.css'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { removeItemFromBasket } from './Store/Slices/basketSlice';




const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct ( props ) {

    const { id, image, title, brand, price, rating, description } = props

    const [ randomRating, setrandomRating ] = useState()
    useEffect( () => {
        setrandomRating(
            Math.round( rating ) )

    }, [ rating ] )


    const dispatch = useDispatch();
    const handleClickRemove = () => {
        dispatch( removeItemFromBasket( id ) )
    }


    return (
        <div className='checkoutProduct'>
            {/* image */ }
            <img src={ image } alt={ image } />

            <div className='productInfo'>
                {/* title/brand */ }
                <p>{ title } / { brand }</p>

                <h3>{ description }</h3>

                {/* price */ }
                <h4>${ price }</h4>

                {/* rating */ }
                {/* <h5>Rating: { rating }</h5> */ }
                {/* <div style={ {} } */ }


                {/* Remove */ }
                <button>Remove</button>

            </div>
        </div>
    )
}

export default CheckoutProduct