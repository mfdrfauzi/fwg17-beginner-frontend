// import React from 'react'
import FeatherIcon from 'feather-icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderBg from '../assets/img/bg-header.png'
import ArticleBg from '../assets/img/bg-article.png'
import Product1 from '../assets/img/home-p-1.png'
import Product2 from '../assets/img/home-p-2.png'
import Product3 from '../assets/img/home-p-3.png'
import Product4 from '../assets/img/home-p-4.png'
import Maps from '../assets/img/maps.png'
import RateProfileImg from '../assets/img/profile.png'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = () => {
  const productImages = [Product1, Product2, Product3, Product4]
  return (
    <>
    <Navbar bgColor={'bg-[rgba(0,0,0,0.5)]'} />

    <Header />

    <article className="flex h-1/2">
      <div className="flex md:flex-1 justify-center items-center bg-white px-6 py-12 md:px-0">
        <div className="flex flex-col flex-1 md:px-20 gap-6">
          <h1 className="text-2xl md:text-5xl relative pl-6">
            <span className="border-l-4 md:border-l-8 border-l-amber-500 h-full md:h-1/2 absolute left-0 md:top-1/2 md:transform md:-translate-y-1/2"></span>
            We Provide <span className="text-amber-800">Good Coffee</span> and <span className="text-amber-800">Healthy Meals</span>
          </h1>

          <div className="text-sm md:text-base">
            You can explore the menu that we provide with fun and have their own taste and make your day better.
          </div>
          <ul className="flex flex-col gap-6 text-sm md:text-base">
            <li className="flex gap-2.5">
              <FeatherIcon icon="check-circle" className="text-green-600" />
              High quality beans
            </li>
            <li className="flex gap-2.5">
              <FeatherIcon icon="check-circle" className="text-green-600" />
              Healthy meals, you can request the ingredients
            </li>
            <li className="flex gap-2.5">
              <FeatherIcon icon="check-circle" className="text-green-600" />
              Chat with our staff to get better experience for ordering
            </li>
            <li className="flex gap-2.5">
              <FeatherIcon icon="check-circle" className="text-green-600" />
              Free member card with a minimum purchase of IDR 200.000
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${ArticleBg})` }}></div>
    </article>

    <section className="flex flex-col h-screen items-center mt-20 px-10 gap-6">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl md:text-5xl text-center">
          Here is People’s <span className="text-amber-800">Favorite</span>
        </h1>
        <div className="w-8 h-1 md:w-16 md:h-1.5 bg-amber-500"></div>
        <div className="flex w-full text-sm md:text-base text-center">
          Let’s choose and have a bit taste of people’s favorite. It might be yours too!
        </div>
      </div>
      <div className="h-full overflow-scroll md:overflow-visible bg-gray-200 md:bg-white md:px-0">
        <div className="flex flex-col flex-1 md:flex-row mt-14 gap-5 items-center justify-center">
          {productImages.map((image, index) => (
            <card key={index} className="flex-1 h-auto">
              <div className="flex justify-center rounded overflow-hidden">
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
              <div className="flex bg-white shadow-md mx-16 md:mx-6 p-3 -mt-8 relative">
                <div className="flex flex-col gap-2">
                  <h2 className="text lg md:text-2xl">Hazelnut Latte</h2>
                  <div className="text-xs md:text-sm">
                    You can explore the menu that we provide with fun and have their own taste and make your day better.
                  </div>
                  <div className="text-lg md:text-2xl text-amber-500">IDR 20.000</div>
                  <div className="flex flex-1 gap-2">
                    <button className="flex-1 h-9 border border-amber-500 bg-amber-500 rounded font-semibold">Buy</button>
                    <button className="md:w-auto h-9 border border-amber-500 rounded py-px px-4">
                      <li className="flex justify-center m-0">
                        <FeatherIcon icon="shopping-cart" className="text-amber-500" />
                      </li>
                    </button>
                  </div>
                </div>
              </div>
            </card>
          ))}
        </div>
      </div>
    </section>

    <div className="flex flex-col md:h-auto items-center gap-14 bg-[rgba(195, 190, 183, 0.3)] my-12 px-5">
      <div className="flex flex-col items-center gap-6 mt-11">
          <h1 className="text-2xl md:text-5xl text-center"><span className="text-amber-800">Visit Our Store</span> in the Spot on the Map Below</h1>
          <div className="w-16 h-1.5 bg-amber-500"></div>
          <div className="flex w-full justify-center text-sm md:text-base">You can explore the menu that we provide with fun and have their own taste and make your day better.</div>
      </div>
      <div className="flex items-center px-6">
          <img className="h-auto" src={Maps} alt="Maps" />
      </div>
    </div>
    
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
              <div className="flex gap-6 items-center">
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F59E0B",}} />
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F59E0B",}} />
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F59E0B",}} />
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F59E0B",}} />
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F59E0B",}} />
                5.0
              </div>
              <div className="flex gap-2.5">
                  <button className="flex bg-white w-12 h-12 rounded-full text-black items-center justify-center">
                      <FeatherIcon icon="arrow-left" size="24" />
                  </button>
                  <button className="flex bg-amber-500 w-12 h-12 rounded-full text-black items-center justify-center">
                  <FeatherIcon icon="arrow-right" size="24" />
                  </button>
              </div>
              <div className="flex gap-3 mt-20 md:mt-0">
                  <button className="h-2 w-6 bg-amber-500 border-amber-500 rounded-full"></button>
                  <button className="h-2 w-2 bg-white border-white rounded-full"></button>
                  <button className="h-2 w-2 bg-white border-white rounded-full"></button>
                  <button className="h-2 w-2 bg-white border-white rounded-full"></button>
              </div>
          </div>
      </div>
    </div>

    <footer className="flex h-auto md:h-96 items-center md:justify-normal px-12 md:px-32 py-16 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-10">
          <div className="flex gap-11">
              <div className="flex-col md:flex-1">
                  <div className="flex items-center text-amber-800">
                    <FeatherIcon icon="coffee" size="24" />
                      <p className="font-['Sacramento'] text-xl ml-3 mr-4">
                          Cofee Shop
                      </p>
                  </div>
                  <div className="mt-5">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                  <div className="text-gray-400 mt-8">©2020CoffeeStore</div>
              </div>
          </div>
          <div className="flex gap-20">
              <div className="flex flex-col gap-5">
                  <div className="text-black font-medium text-lg">Product</div>
                  <div className="flex flex-col gap-2.5 text-gray-600">
                      <a href="#">Our Product</a>
                      <a href="#">Pricing</a>
                      <a href="#">Locations</a>
                      <a href="#">Countries</a>
                      <a href="#">Blog</a>
                  </div>
              </div>
              <div className="flex flex-col gap-5">
                  <div className="text-black font-medium text-lg">Engage</div>
                  <div className="flex flex-col gap-2.5 text-gray-600">
                      <a href="#">Partner</a>
                      <a href="#">FAQ</a>
                      <a href="#">About Us</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Term of Service</a>
                  </div>
              </div>
          </div>
          <div className="flex flex-col gap-5 self-start">
              <div className="text-black font-medium text-lg">Socia Media</div>
              <div className="flex gap-5">
                  <button className="flex items-center justify-center text-black w-8 h-8 bg-amber-500 border-amber-500 rounded-full">
                    <FeatherIcon icon="facebook" size="18" />
                  </button>
                  <button className="flex items-center justify-center text-black w-8 h-8 bg-amber-500 border-amber-500 rounded-full">
                    <FeatherIcon icon="twitter" size="18" />
                  </button>
                  <button className="flex items-center justify-center text-black w-8 h-8 bg-amber-500 border-amber-500 rounded-full">
                    <FeatherIcon icon="instagram" size="18" />
                  </button>
              </div>
          </div>
      </div>
    </footer>

    {/* Toggle Button */}
    <div className="hidden fixed bottom-36 right-32 w-80 h-2/3 border-t-[19px] border-amber-500 rounded-2xl bg-white">
      <div className="flex items-center h-[72px] border-b border-slate-200">
        <div className="h-12 w-12 bg-slate-400 rounded-full ml-[19px] mr-3.5"></div>
        <div>
            <div className="text-base leading-5">Maria Angela</div>
            <div className="text-base leading-5 text-amber-500">Admin Support</div>
        </div>
      </div>
      <div className="p-5 h-72">
        <div className="flex gap-1.5 items-center justify-start mb-3">
            <div className="h-6 w-6 rounded-full bg-slate-300 border-slate-300 "></div>
            <div className="flex h-fit w-fit p-2.5 rounded-lg text-sm bg-slate-100">
                Halo, Ada yang bisa kami bantu?
            </div>
        </div>
        <div className="flex gap-1.5 items-center justify-end mt-3">
            <div className="flex h-fit w-fit p-2.5 rounded-lg text-sm bg-slate-100">
                Saya kesulitan mencari kopi
            </div>
            <div className="h-6 w-6 rounded-full bg-slate-300 border-slate-300 "></div>
        </div>
      </div>
      <form className="flex px-5 gap-1.5 mb-6" action="">
        <input className="flex items-center flex-1 h-11 px-3.5 rounded-lg border border-slate-200 bg-slate-50 text-gray-500 text-sm" type="text" placeholder="Masukan Pesan Anda" />
        <button className="flex items-center justify-center h-11 w-11 border-0 rounded-lg bg-amber-500" type="submit">
            <FeatherIcon icon="send" />
        </button>
      </form>
    </div>
    <button className="fixed bottom-12 md:bottom-16 right-16 md:right-32 bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center">
        <FeatherIcon icon="message-circle" size="40" />
    </button>
    </>
  )
}

export default Home
