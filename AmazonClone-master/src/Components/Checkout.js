import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import CheckoutProduct from './CheckoutProducts'
import { useSelector } from 'react-redux'

function Checkout () {

    const items = useSelector( ( state ) => {
        return state.basket.items
    } )
    console.log( items );
    const totalPrice = useSelector( ( state ) =>
        state.basket.items.reduce(
            ( total, basketItem ) => total + basketItem.price, 0
        ) )

    // const [ cartData, setcartData ] = useState( [
    //     {
    //         image: 'https://i.dummyjson.com/data/products/1/1.jpg',
    //         title: 'iPhone 9',
    //         brand: 'Apple',
    //         price: '549',
    //         rating: '4.69',
    //         description: 'An apple mobile which is nothing like apple'
    //     },
    //     {
    //         image: 'https://i.dummyjson.com/data/products/3/1.jpg',
    //         title: 'samsung Universe 9',
    //         brand: 'Samsung',
    //         price: '549',
    //         rating: '4.69',
    //         description: 'An apple mobile which is nothing like apple.An apple mobile which is nothing like apple.An apple mobile which is nothing like apple'
    //     },
    // ] )
    return (
        <div>
            <Header />
            <Navbar />
            <div className='checkoutData'>
                <div className='checkoutProducts' style={ {
                    display: 'flex', flexDirection: 'column'
                } }>
                    <h1>
                        {
                            items.length === 0 ?
                                "Your amazon basket is empty" :
                                "Your shopping basket"
                        }
                    </h1>
                    {
                        items.map( ( val, i ) => (
                            <CheckoutProduct
                                key={ i }
                                id={ val.id }
                                image={ val.image }
                                title={ val.title }
                                brand={ val.brand }
                                price={ val.price }
                                rating={ val.rating }
                                description={ val.description }
                            />
                        ) )
                    }
                </div>

                <div className='checkoutTotal'>
                    <p>Subtotal({ items.length }items):</p>
                    <h3>${ totalPrice }</h3>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout