import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Home/ProductCard'

const SimilarProducts = ({product}) => {

    const AllProducts = useSelector(state => state.products)
    const [filterProducts, setFilterProducts] = useState()

    console.log(AllProducts)

    useEffect(() => {
        if(AllProducts.length !== 0){
           const filter = AllProducts?.filter(e => e.category.name === product?.category)
           setFilterProducts(filter)
        }
     
    }, [product])
    
  return (
    <article className='similar__products'>sca
        <h2 className='similar-_products'>Discover Similar Items</h2>
        <div className="products__container">
            {
            filterProducts?.map(e => {
                if(e.title !== product.title){ 
                    return(
                        <ProductCard
                        key={product.id}
                        product={product}
                        />)
                    }
                })
            }

        </div>
    </article>
  )
}

export default SimilarProducts