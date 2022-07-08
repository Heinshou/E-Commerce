import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const ProductInfoId = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()
    
    const addToCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const addProduct = {
            id:product.id,
            quantity: counter
        }

        axios.post(URL, addProduct, getConfig())
            .then(res => dispatch(getAllProductCart(res.data)))
            .catch(err => console.log(err.data))
    }

    const minusCounter = () => {
        const minus = counter - 1
        if (minus >= 1) {
            setCounter(minus)
        }
    }

    const plusCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <article className='product__info'>
            <h2 className='product__info__title'>{product?.title}</h2>
            <p className="product__info__description">{product?.description}</p>
            <div className='card__product__price__container'>
                <h3 className='card__product__price__label product__info__label'>Price:</h3>
                <p className='card__product__price__number product__info__numbre'>$ {product?.price}</p>
            </div>
            <div className='product__info__quantity__container'>
                <div className='product__info__minus' onClick={minusCounter}>-</div>
                <div>{counter}</div>
                <div className='product__info__plus' onClick={plusCounter}>+</div>
            </div>
            <button
                onClick={addToCart}
                className='card__product__btn'>
                Add  to Cart
                <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
        </article>
    )
}

export default ProductInfoId