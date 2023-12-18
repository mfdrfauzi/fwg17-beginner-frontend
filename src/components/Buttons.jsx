import FeatherIcon from "feather-icons-react/build/FeatherIcon"

export const SubmitButton = ({buttonName='Button Name'}) =>{
    return (
        <button className="border w-full h-12 rounded-md bg-amber-500" type="submit">{buttonName}</button>
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

export const SignButton = ({ value, linkTo, styling }) => {
    return (
      <input
        type="button"
        value={value}
        onClick={() => (window.location.href = linkTo)}
        className={styling}
      />
    )
}

export const CartButton = ({padding, border, size}) => {
    return (
        <button className={`${padding} ${border} ${size}`} onClick={() => (window.location.href = "/checkou-product.html")}>
            <FeatherIcon icon="shopping-cart" className="text-amber-500" />
        </button>
    )
}
