import SectionHeader from "./SectionHeader"
import ProductCard from "./ProductCard"
import Product1 from '../assets/img/home-p-1.png'
import Product2 from '../assets/img/home-p-2.png'
import Product3 from '../assets/img/home-p-3.png'
import Product4 from '../assets/img/home-p-4.png'

const ProductHighlight = () => {
  const productData = [
    {
      image: Product1,
      name: "Hazelnut Latte",
      description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000,
    },
    {
      image: Product2,
      name: "Hazelnut Latte",
      description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000,
    },
    {
      image: Product3,
      name: "Hazelnut Latte",
      description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000,
    },
    {
      image: Product4,
      name: "Hazelnut Latte",
      description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000,
    },
  ]

  return (
    <section className="flex flex-col h-screen items-center mt-20 px-10 gap-6">
      <SectionHeader 
        title={<h1>Here is People’s <span className="text-amber-800">Favorite</span></h1>} 
        text="Let’s choose and have a bit taste of people’s favorite. It might be yours too!"
      />
      <div className="h-full overflow-scroll md:overflow-visible bg-gray-200 md:bg-white md:px-0">
        <div className="flex flex-col flex-1 md:flex-row mt-14 gap-5 items-center justify-center">
          {productData.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlight
