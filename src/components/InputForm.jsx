import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'

export const FullNameInput = ({placeholder='Enter Your Full Name'}) =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="fullname">
          Full Name
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="user" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="fullname" name="text" type="text" placeholder={placeholder} />
      </div>
  )
}
export const AddressInput = ({placeholder='Enter Your Address'}) =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="address">
          Address
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="map-pin" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="address" name="address" type="text" placeholder={placeholder} />
      </div>
  )
}

export const PhoneInput = ({placeholder='Enter Your Phone Number'}) =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="phone">
          Phone
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="map-pin" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="phone" name="phone" type="tel" pattern="[0-9]{1,13}" placeholder={placeholder} />
      </div>
  )
}

export const EmailInput = ({placeholder='Enter Your Email'}) =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="email">
          Email
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="mail" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="email" name="email" type="email" placeholder={placeholder} />
      </div>
  )
}

export const PasswordInput = ({placeholder='Enter Your Password', showSetNew = true}) =>{
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="password">
          Password
          {showSetNew && (
          <span className="absolute right-0 top-0 flex items-center pr-3 text-amber-500 self-items-end">
            <Link to="#">Set New Password</Link>
          </span>
          )}
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="lock" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder={placeholder} />
          <button onClick={togglePassword} id="reveal-password" className="justify-self-end" type="button">
            <i>
              <FeatherIcon icon="eye-off" className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
  )
}

export const ConfirmPasswordInput = () =>{
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="confirm-password">
          Confirm Password
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="lock" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="confirm-password" name="confirm" type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password Again" />
          <button onClick={togglePassword} id="reveal-confirm-password" className="justify-self-end" type="button">
            <i>
              <FeatherIcon icon="eye-off" className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
  )
}
