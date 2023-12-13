import React from 'react'
import FeatherIcon from 'feather-icons-react'


function LoginForm() {
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
      <div className="text-2xl text-amber-800">Forgot Password</div>
      <div className="text-base">We will send new password to your email</div>
      <div className="relative">
        <label className="block font-semibold" htmlFor="email">
          Email
          <i className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
            <FeatherIcon icon="mail" className="h-5 w-5 text-gray-500" />
          </i>
        </label>
        <input className="border rounded-lg w-full h-12 pl-10 outline-none" id="email" name="email" type="email" placeholder="Enter Your Email" />
      </div>
      <div>
        <button className="border w-full h-12 rounded-md bg-amber-500" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LoginForm
