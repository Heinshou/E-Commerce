import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const goToProductId = () => navigate(`/product/${product.id}`)

    return (
        <article 
        className="card__product"
        onClick={goToProductId}>
            <header className='card__product__container'>
                <img 
                className='card__product__img__back' 
                src={product.productImgs[1]} 
                alt="Product" 
                />
                <img 
                className='card__product__img' 
                src={product.productImgs[0]} 
                alt="Product" 
                />
            </header>
            <div className='card__product__body'>
                <h2 className='card__product__title'>{product.title}</h2>
                <div className='card__product__price__container'>
                    <h3 className='card__product__price__label'>Price:</h3>
                    <p className='card__product__price__number'>$ {product.price}</p>
                </div>
                <button className='card__product__btn'>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </button>
            </div>
        </article>
    )
}

export default ProductCard