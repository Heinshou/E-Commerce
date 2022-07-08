import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProducts from './SimilarProducts'
import axios from 'axios';
import './style/ProductScreen.css'

const classImg = ['', 'second__img', 'third__img']

const ProductScreen = () => {

    const [product, setProduct] = useState()
    const [indexClass, setIndexClass] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log('err'))

    }, [])



    const clickPrev = () => {
        const prevClass = indexClass - 1
        if (prevClass < 0) {
            setIndexClass(classImg.length - 1)
        } else {
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {
        const nextClass = indexClass + 1
        if(nextClass >= classImg.length){ 
            setIndexClass(0)
        } else  {
            setIndexClass(nextClass)
        }
    }

    return (
        <>
            <div className='product'>
                <div className='slider'>
                    <span onClick={clickPrev} className='slider__prev'>&#60;</span>
                    <div  className={`slider__container ${classImg[indexClass]}`}>
                        {
                            product?.productImgs.map(imgSrc => (
                                <img
                                    src={imgSrc}
                                    key={imgSrc}
                                    alt="Product"
                                    className='slider__images'
                                />
                            ))
                        }
                    </div>
                    <span onClick={clickNext} className='slider__next'>&#62;</span>
                </div> 
                <ProductInfoId
                product={product}
                />
            </div>
           
            <SimilarProducts
                product={product} />
        </>
    )
}

export default ProductScreen