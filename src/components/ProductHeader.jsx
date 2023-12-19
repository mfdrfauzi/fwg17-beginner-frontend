import BgHeader from '../assets/img/bg-product.png'

const ProductHeader = () => {
    return (
        <header className="flex items-center h-72 w-full" style={{ backgroundImage: `url(${BgHeader})`}}>
            <h1 className="text-5xl mx-32 w-4/6 text-white">We Provide Good Coffee and Healthy Meals</h1>
        </header>
    )
}

export default ProductHeader