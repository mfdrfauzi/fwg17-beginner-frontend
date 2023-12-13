import React from 'react'
import FeatherIcon from 'feather-icons-react'

function PasswordInput() {
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

export default PasswordInput