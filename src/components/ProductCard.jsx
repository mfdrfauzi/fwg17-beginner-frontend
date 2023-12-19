import React from 'react';
import { Button, CartButton } from './Buttons';
import RatingStar from './RatingStar';
import { Link } from 'react-router-dom';



const ProductCard = ({ image, title, description, price, isFlashSale, ratingProduct }) => {
  const discount = price / 2

  return (
    <div className="flex-1 flex-col relative ">
      {isFlashSale && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-lg px-2.5 py-1 rounded-3xl">
          Flash Sale!
        </div>
      )}
      <div className="flex flex-1 justify-center object-cover overflow-hidden">
        <img className='flex-1 ' src={image} alt={title} />
      </div>
      <div className="relative flex-1 bg-white shadow-md mx-16 md:mx-6 p-3 -mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="text lg md:text-2xl">
            <Link to='/detail-product'>{title}</Link>
            </h2>
          <div className="flex-1 text-xs md:text-sm">{description}</div>
          {ratingProduct && (
            <RatingStar gap={'gap-2'} rating={ratingProduct}/>
          )}
          <div className="flex items-center text-lg md:text-2xl text-amber-500">
          {isFlashSale ? (
              <div><span className="text-xs font-bold text-red-500 line-through">IDR {price.toLocaleString('id')}</span>
              Rp. {discount.toLocaleString('id')}</div>
              ) : (`Rp. ${price.toLocaleString('id')} ,-`)
              }
          </div>
          <div className="flex flex-1 gap-2">
            <Button buttonName='Buy' type={'button'} href='/detail-product'/>
            <CartButton padding={'px-4 py-px'} border={'border border-amber-500 rounded'} size={'h-9'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard