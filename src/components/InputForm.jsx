// import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Brand from './Brand'
import { SubmitButton } from './Buttons'

export const FullNameInput = () =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="fullname">
          Full Name
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="user" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="fullname" name="text" type="text" placeholder="Enter Your Full Name" />
      </div>
  )
}

export const EmailInput = () =>{
  return(
    <div className="relative">
        <label className="block font-semibold" htmlFor="email">
          Email
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="mail" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="email" name="email" type="email" placeholder="Enter Your Email" />
      </div>
  )
}

export const PasswordInput = () =>{
  return(
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
  )
}

export const ConfirmPasswordInput = () =>{
  return(
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
  )
}


// Default Register Form
const InputForm = ({title='Page Title', desc='Page Description'}) => {
  return (
    <>
    <form id="form" className="flex flex-col w-full md:w-3/5 gap-6 px-4 md:px-0" action="">
      <Brand textColor={'amber-800'} />
      <div className="text-2xl text-amber-800">{title}</div>
      <div className="text-base">{desc}</div>
      <FullNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />   
      <div>
        <SubmitButton buttonName='Register' />
      </div>
    </form>
    </>
  )
}

export default InputForm
