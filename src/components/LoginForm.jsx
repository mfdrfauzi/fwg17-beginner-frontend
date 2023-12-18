import { Link } from 'react-router-dom'
import Brand from './Brand'
import { EmailInput, PasswordInput } from './InputForm'
import { LoginMethod, SubmitButton } from './Buttons'


function LoginForm() {
  return (
    <form id="form" className="flex flex-col w-full md:w-3/5 gap-6 px-4 md:px-0" action="">
      <Brand textColor={'amber-800'}/>
      <div className="text-2xl text-amber-800">Login</div>
      <div className="text-base">Fill out the form correctly</div>
      <EmailInput />
      <PasswordInput />
      <div className="text-right">
        <Link to='/forgot-password' className="text-amber-500">Lupa Password?</Link>
      </div>
      <SubmitButton buttonName='Login' />
      <div className="flex items-center justify-center">
        Not have an account? <Link to='/register' className="text-amber-500">Register</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
        <div className="text-gray-300 px-2">or</div>
        <div className="flex-grow border-t border-gray-300 mx-2"></div>
      </div>
      <LoginMethod/>
    </form>
  )
}

export default LoginForm
