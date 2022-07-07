import React, { useState } from 'react'

const ProductInfoId = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const minusCounter = () => {
        const minus = counter - 1
        if (minus >= 1) {
            setCounter(minus)
        }
    }

    const plusCounter = () => {
        setCounter(counter + 1)
    }

    console.log(product)

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
            <button className='card__product__btn'>Add  to Cart
                <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
        </article>
    )
}

export default ProductInfoId