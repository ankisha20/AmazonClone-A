import React from 'react'
import '../App.css'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { addItemToBasket } from './Store/Slices/basketSlice';

function OneProduct ( props ) {

    const { id, category, image, description, title,
        brand, price, discountPercentage, rating } = props

    const dispatch = useDispatch()

    const handleClickadd = () => {
        const products = {
            id, category, image, description, title,
            brand, price, discountPercentage, rating
        }
        dispatch( addItemToBasket( products ) )
    }



    return (
        <div className="oneProduct">
            <h2>{ category }</h2>
            <div className="proImage">
                <img src={ image } alt={ image } />
            </div>
            <div className="proBrand">
                <p>{ title } / { brand }</p>
            </div>
            <h3>{ description }</h3>
            <div className="proPrice">
                <p style={ { fontSize: '25px', color: 'orange' } }>${ price }</p>
                <p>
                    <span style={ { fontSize: '20px', color: 'grey', marginRight: "5px" } }>
                        { discountPercentage }%
                    </span>
                    disc.
                </p>
            </div>
            <p className="proDescription">Rating: { rating }</p>
            <button onClick={ handleClickadd }>Add to Cart</button>
        </div>
    )
}

export default OneProduct