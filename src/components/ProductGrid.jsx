import { useEffect, useState } from 'react'
// import Product1 from '../assets/img/home-p-3.png'
// import Product2 from '../assets/img/home-p-4.png'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductGrid = () => {
    // const productData = [
    //     {
    //       isFlashSale: true,
    //       image: Product1,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 5.0,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product2,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 3.9,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product1,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 5.0,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product2,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 3.9,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product1,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 5.0,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product2,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 3.9,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product1,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 5.0,
    //     },
    //     {
    //       isFlashSale: true,
    //       image: Product2,
    //       name: "Hazelnut Latte",
    //       description: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    //       price: 20000,
    //       ratingProduct: 3.9,
    //     },  
    // ]

    const [posts, setPosts] = useState([{}])

    const getPosts = async () => {
        const res = await axios.get('http://localhost:8888/products')
        console.log(res.data.results)
        setPosts(res.data.results)
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
    <>
      <div className="flex flex-1 max-w-3xl text-black">
          <div className='relative grid grid-flow-row grid-cols-2 gap-8'>
              {posts && posts.map((product) => (
                  <ProductCard 
                      key={product.id}
                      id={product.id}
                      isFlashSale={true}
                      image={product.image}
                      productName={product.productName}
                      description={product.description}
                      price={product.price}
                      ratingProduct={product.rating}
                  />
              ))}
          </div>
      </div>
    </>
)
}

export default ProductGrid