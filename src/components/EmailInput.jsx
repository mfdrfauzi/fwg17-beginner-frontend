import React from 'react'
import FeatherIcon from 'feather-icons-react'

function EmailInput() {
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

export default EmailInput