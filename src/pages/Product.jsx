import CouponList from "../components/CouponList"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PagePagination from "../components/PagePagination"
import ProductGrid from "../components/ProductGrid"
import ProductHeader from "../components/ProductHeader"
import Sidebar from "../components/Sidebar"

const Product = () => {
    
    
    return(
        <>
        <Navbar bgColor='bg-black' />
        
        <ProductHeader />
        
        <CouponList />

        <div className="mx-32 mb-10">
            <div className="text-5xl">Our <span className="text-amber-800">Product</span></div>
            <div className="flex gap-x-6 text-white mt-6">
                <Sidebar />
                <div>
                    <ProductGrid />
                    <PagePagination />
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Product