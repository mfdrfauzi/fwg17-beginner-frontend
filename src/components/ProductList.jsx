import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ numberOfCards }) => {
  const productImages = Array.from({ length: numberOfCards }, (_, index) => index + 1)

  return (
    <div className="h-full overflow-scroll md:overflow-visible bg-gray-200 md:bg-white md:px-0">
      <div className="flex flex-col flex-1 md:flex-row mt-14 gap-5 items-center justify-center">
        {productImages.map((index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
