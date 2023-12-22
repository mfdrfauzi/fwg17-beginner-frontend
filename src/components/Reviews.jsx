import RateProfileImg from '../assets/img/profile.png'
import RatingStar from "./RatingStar"
import CarouselPagination from "./CarouselPagination"

const Reviews = () => {
    return (
        <div className="md:h-screen">
            <div className="flex flex-col md:flex-row w-full md:h-5/6 bg-gradient-to-b from-gray-600 to-black gap-5 py-5 px-12">
                <div className="flex items-center justify-center md:hidden text-white text-sm">TESTIMONIAL</div>
                <div className="flex flex-1 items-center justify-end">
                    <img src={RateProfileImg} alt="" />
                </div>
                <div className="flex flex-1 flex-col text-white items-left justify-center gap-6">
                    <div className="hidden md:flex">TESTIMONIAL</div>
                    <h1 className="text-2xl md:text-5xl relative pl-6">
                        <span className="border-l-8 border-l-amber-500 h-full absolute left-0 top-1/2 transform -translate-y-1/2"></span>
                        Viezh Robert
                    </h1>
                    <div className="text-sm d:text-base"><span className="text-amber-500">Manager Coffee Shop</span></div>
                    <div className="text-sm d:text-base">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</div>
                    <RatingStar gap={'gap-2.5'} rating={4.9} />
                    <CarouselPagination />
                </div>
            </div>
        </div>
    )
}

export default Reviews