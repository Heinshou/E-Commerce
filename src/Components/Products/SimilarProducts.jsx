import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Home/ProductCard'
import './style/SimilarProduct.css'
const SimilarProducts = ({product}) => {

    const AllProducts = useSelector(state => state.products)
    const [filterProducts, setFilterProducts] = useState()

    

    useEffect(() => {
        if(AllProducts.length !== 0){
           const filter = AllProducts?.filter(e => e.category.name === product?.category)
           setFilterProducts(filter)
        }
     
    }, [product])
    
    console.log(product)
  return (
    <article className='similar__products'>
        <h2 className='similar-products-title'>Discover Similar Items</h2>
        <div className="products__container">
            {
            filterProducts?.map(e => {
                if(e.title !== product.title){ 
                    return(
                        <ProductCard
                        key={e.id}
                        product={e}
                        />)
                    }
                })
            }

        </div>
    </article>
  )
}

export default SimilarProducts