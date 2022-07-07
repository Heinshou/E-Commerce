import React from 'react'
import ProductInfoId from './ProductInfoId'
import SimilarProducts from './SimilarProducts'

const ProductScreen = ({product}) => {
  return (
    <div>
        <ProductInfoId
        product={product}
        />
        <SimilarProducts
        product={product}/>
    </div>
  )
}

export default ProductScreen