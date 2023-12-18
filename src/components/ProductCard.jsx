import { CartButton } from './Buttons'

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="flex-1 h-auto">
      <div className="flex justify-center rounded overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div className="flex bg-white shadow-md mx-16 md:mx-6 p-3 -mt-8 relative">
        <div className="flex flex-col gap-2">
          <h2 className="text lg md:text-2xl">{title}</h2>
          <div className="text-xs md:text-sm">{description}</div>
          <div className="text-lg md:text-2xl text-amber-500">Rp. {price.toLocaleString('id')} ,-</div>
          <div className="flex flex-1 gap-2">
            <button className="flex-1 h-9 border border-amber-500 bg-amber-500 rounded font-semibold">Buy</button>
            <CartButton padding={'px-4 py-px'} border={'border border-amber-500 rounded'} size={'h-9'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
