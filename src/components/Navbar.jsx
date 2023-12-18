import React from 'react'
import { useState } from 'react'    
import FeatherIcon from "feather-icons-react/build/FeatherIcon"
import Brand from "./Brand"
import { CartButton, SignButton } from "./Buttons"

const Navbar = ({bgColor}) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    return (
        <nav id="navbar" className={`${!menuOpen ? 'h-20' : ''} flex flex-col md:flex-row md:h-20 w-full ${bgColor} text-white items-center px-16 md:px-20 gap-4 md:gap-0 py-6 md:py-0 fixed z-20 overflow-hidden`}>
          <div className="flex flex-col md:flex-row flex-1 items-center justify-center w-full md:w-auto">
            <div className="flex text-white justify-between md:justify-normal w-full md:w-auto mb-6 md:mb-0">
                <Brand textColor={'white'} />
                <div>
                <div className="flex gap-6 md:hidden">
                    <CartButton />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                    <FeatherIcon icon="menu" />
                    </button>
                </div>
                </div>
            </div>
            <ul className="flex flex-col md:flex-row md:flex-1 mx-3 items-center md:items-normal justify-center md:justify-normal gap-4 md:gap-0">
                <li className="mx-8">
                    <a className="hover:border-b pb-2 -mt-2 hover:border-amber-500" href="/index.html">
                    Home
                    </a>
                </li>
                <li className="mx-8">
                    <a className="hover:border-b pb-2 -mt-2 hover:border-amber-500" href="/product.html">
                    Product
                    </a>
                </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row md:flex-1 items-center md:justify-end gap-4 md:gap-6">
            <div className="hidden md:flex gap-6">
            <button onClick={() => (window.location.href = "/product.html")} >
                <FeatherIcon icon="search" className="text-amber-500" />
            </button>
            < CartButton />
            </div>
            <div className="flex gap-6">
                <SignButton value={"SignIn"} linkTo={'/login.html'} styling={"border h-12 w-24 rounded-md hover:bg-white hover:text-black"} />
                <SignButton value={"Sign Up"} linkTo={'/register.html'} styling={"text-black border border-amber-500 h-12 w-24 rounded-md bg-amber-500 hover:bg-amber-200 hover:border-amber-200"} />
            </div>
          </div>
        </nav>
    )
}

export default Navbar