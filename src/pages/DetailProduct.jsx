import Footer from "../components/Footer"
import ImageProduct from "../components/ImageProduct"
import Navbar from "../components/Navbar"
import LargeImg from '../assets/img/prod-2.png'
import SmallImg1 from '../assets/img/coffee-2.png'
import SmallImg2 from '../assets/img/coffee-3.png'
import SmallImg3 from '../assets/img/coffee-4.png'
import ProductRec from "../components/ProductRec"
import PagePagination from "../components/PagePagination"
import ProductDetailForm from "../components/ProductDetailForm"

const DetailProduct = () => {
    const productImages = {
        large: LargeImg,
        small: [
            SmallImg1,
            SmallImg2,
            SmallImg3,
        ]
    }

    const productData = [
        {
          isFlashSale: true,
          name: "Hazelnut Latte",
          description: "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
          price: 20000,
          ratingProduct: 5.0,
          isRecomendation: true,
        }
    ]

    const { isFlashSale, name, description, price, ratingProduct, isRecomendation } = productData[0]

    return(
        <>
        <Navbar bgColor='bg-black' />
        <div className="flex mx-32 my-32 h-auto gap-5">
            <ImageProduct images={productImages} />
            <ProductDetailForm
                isFlashSale={isFlashSale}
                name={name}
                desc={description}
                price={price}
                ratingProduct={ratingProduct}
                isRecomendation={isRecomendation}
            />
        </div>
        <div className="flex flex-col h-auto mx-32 gap-6">
            <div className="flex">
                <h1 className="text-5xl tracking-tighter">Recommendation <span className="text-amber-800">For You</span></h1>
            </div>
            <div className="flex flex-col gap-6 justify-center mb-8">
                <ProductRec />
                <PagePagination />
            </div>
        </div>

        <Footer />
        </>
    )
}

export default DetailProduct