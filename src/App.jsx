import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  }
])

const App= () => {
  
  return(
    <RouterProvider router={router} />
  )
}

export default App
