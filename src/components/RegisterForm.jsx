import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfirmPasswordInput, EmailInput, FullNameInput, PasswordInput } from './InputForm'
import { LoginMethod, SubmitButton } from './Buttons'
import Brand from './Brand'
import axios from 'axios'

function RegisterForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const registerProcess = async (e) => {
    e.preventDefault()
    const {value: fullName} = e.target.fullname
    const {value: email} = e.target.email
    const {value: password} = e.target.password
    const {value: confirm} = e.target.confirm
    
    if(!fullname || !email || !password || !confirm){
      setIsError(true)
      setIsSuccess(false)
      return
    }
    
    if(!email.includes('@')){
      setIsError(true)
      setIsSuccess(false)
      return
    }

    if(password != confirm){
      setIsError(true)
      setIsSuccess(false)
      return
    }
    
    const form = new URLSearchParams()
    form.append('fullName', fullName)
    form.append('email', email)
    form.append('password', password)
    
  
    try{
      const {data} = await axios.post('http://localhost:8888/auth/register', form.toString())
      setIsSuccess(true)
      setIsError(false)

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    
    }catch(err) {
      console.log(err)
      setIsError(true)
      setIsSuccess(false)
    }
  }
  
  return (
    <>
      <form onSubmit={registerProcess} id="form" className="flex flex-col w-full md:w-3/5 gap-6 px-4 md:px-0" action="">
        <Brand textColor={'amber-800'} />
        <div className="text-2xl text-amber-800">Register</div>
        <div className="text-base">Fill out the form correctly!</div>
        <FullNameInput placeholder="Enter Your Full Name" />
        <EmailInput placeholder="Enter Your Email" />
        <PasswordInput placeholder="Enter Your Password" showSetNew={false} />
        <ConfirmPasswordInput placeholder="Confirm Your Password" />
        <div
          id="alert-success"
          className={`bg-green-300 border border-green-400 text-green-960 px-10 py-4 rounded text-bold ${isSuccess ? '' : 'hidden'}`}
        >
          Register Successfully
        </div>
        <div
          id="alert-error"
          className={`bg-red-300 border border-red-400 text-red-900 px-10 py-4 rounded text-bold ${isError ? '' : 'hidden'}`}
        >
          Please fill out the form correctly!
        </div>
        <div>
          <SubmitButton buttonName='Register' />
        </div>
      </form>
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
