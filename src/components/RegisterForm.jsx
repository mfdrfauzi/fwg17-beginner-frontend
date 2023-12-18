// import React from 'react'
import { Link } from 'react-router-dom'
import InputForm from './InputForm'
import { LoginMethod } from './Buttons'

function RegisterForm() {
  return (
    <>
    <InputForm title='Register' desc='Fill out the form correctly' button='Register' />
    <div className="flex flex-col w-full md:w-3/5 mt-6 gap-6 px-4 md:px-0">
      <div className="flex items-center justify-center">
        Have an account? <Link to="/login" className="text-amber-500">Login</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
        <div className="divider">or</div>
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
      </div>
      <LoginMethod />
    </div>
    </>
  )
}

export default RegisterForm
