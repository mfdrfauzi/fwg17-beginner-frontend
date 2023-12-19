import React from "react"
import FeatherIcon from "feather-icons-react/build/FeatherIcon"

export const SubmitButton = ({buttonName='Button Name', href}) =>{
    return (
      <button className="border w-full h-12 rounded-md bg-amber-500" type="submit">
      {buttonName}
    </button>
    )
}

export const LoginMethod = () => {
    return (
      <div className="flex gap-x-3.5 items-center justify-center">
        <button className="flex-1 border shadow-md w-full h-16 rounded-xl flex items-center justify-center">
          <img className="mr-2" src="../src/assets/img/facebook-icon.png" alt="" style={{ width: '24px', height: '24px' }} />
          Facebook
        </button>
        <button className="flex-1 border shadow-md w-full h-16 rounded-xl flex items-center justify-center">
          <img className="mr-2" src="../src/assets/img/google-icon.png" alt="" style={{ width: '24px', height: '24px' }} />
          Google
        </button>
      </div>
    )
}

export const SignButton = ({ value, href, styling }) => {
    return (
      <input
        type="button"
        value={value}
        onClick={() => (window.location.href = href)}
        className={styling}
      />
    )
}

export const CartButton = ({padding, border, size}) => {
    return (
        <button className={`${padding} ${border} ${size}`} onClick={() => (window.location.href = "/checkout-product")}>
            <FeatherIcon icon="shopping-cart" className="text-amber-500" />
        </button>
    )
}

export const Button = ({type, buttonName, size, href='#'}) => {
  return(
    <button className={`flex-1 ${size} py-2  border border-amber-500 bg-amber-500 rounded font-semibold text-black`}
      onClick={() => (window.location.href = href)}
      type={type}>
        {buttonName}
    </button>
  )
}

export const ButtonCount = () => {
  const [count, setCount] = React.useState(1)

  const decreaseBtn = () => {
      setCount(count - 1)
  }

  const increaseBtn = () => {
    setCount(count + 1)
    }

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <button
          className="flex items-center justify-center w-8 h-8 bg-white rounded border border-amber-500 focus:outline-none"
          onClick={decreaseBtn}
          disabled={count < 2}
        >
          -
        </button>
        <input type="text" className="w-12 h-8 text-center border" value={count} readOnly />
        <button
          className="flex items-center justify-center w-8 h-8 bg-amber-500 rounded border border-amber-500 focus:outline-none"
          onClick={increaseBtn}
        >
          +
        </button>
      </div>
    </div>
  )
}
