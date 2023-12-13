import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
// import FullNameInput from './FullNameInput'
// import EmailInput from './EmailInput'
// import PasswordInput from './PasswordInput'
// import ConfirmPasswordInput from './ConfirmPasswordInput'

function RegisterForm() {
  return (
    <form id="form" className="flex flex-col w-full md:w-3/5 gap-6 px-4 md:px-0" action="">
      <div className="flex mb-12 items-center text-amber-800">
        <i>
          <FeatherIcon icon="coffee" className="h-5 w-5" />
        </i>
        <div className="text-xl ml-3">
          Cofee Shop
        </div>
      </div>
      <div className="text-2xl text-amber-800">Register</div>
      <div className="text-base">Fill out the form correctly</div>
      {/* <FullNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput /> */}
      <div className="relative">
        <label className="block font-semibold" htmlFor="fullname">
          Full Name
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="user" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="fullname" name="text" type="text" placeholder="Enter Your Full Name" />
      </div>
      <div className="relative">
        <label className="block font-semibold" htmlFor="email">
          Email
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="mail" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="email" name="email" type="email" placeholder="Enter Your Email" />
      </div>
      <div className="relative">
        <label className="block font-semibold" htmlFor="password">
          Password
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="lock" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="password" name="password" type="password" placeholder="Enter Your Password" />
          <button id="reveal-password" className="justify-self-end" type="button">
            <i>
              <FeatherIcon icon="eye-off" className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
      <div className="relative">
        <label className="block font-semibold" htmlFor="confirm-password">
          Confirm Password
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="lock" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <div className="flex border rounded-lg w-full h-12 pl-10 pr-3 items-center">
          <input className="w-full outline-none" id="confirm-password" name="confirm-password" type="password" placeholder="Enter Your Password Again" />
          <button id="reveal-password" className="justify-self-end" type="button">
            <i>
              <FeatherIcon icon="eye-off" className="text-gray-500 h-5 w-5" />
            </i>
          </button>
        </div>
      </div>
      <div>
        <button className="border w-full h-12 rounded-md bg-amber-500" type="submit">Register</button>
      </div>
      <div className="flex items-center justify-center">
        Have an account? <Link to="/login" className="text-amber-500">Login</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
        <div className="text-gray-300 px-2">or</div>
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
      </div>
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
    </form>
  )
}

export default RegisterForm
