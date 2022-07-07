import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/HomeScreen.css'

const HomeScreen = () => {


  const [itemSearch, setItemSearch] = useState()
  const [itemFilter, setItemFilter] = useState()

  const products = useSelector(state => state.products)


  useEffect(() => {
    if(itemSearch) {
      setItemFilter(products.filter(e => e.title.toLowerCase().includes((itemSearch?.toLowerCase()))))
    }
  }, [itemSearch])


  return (
    <div className='home'>
      <InputSearch
        setItemSearch={setItemSearch}
      />
      <div className='product__container'>
        {
            itemFilter ?
            itemFilter?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
              ))
        }
      </div>
    </div>
  )
}

export default HomeScreen