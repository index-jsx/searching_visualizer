import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searching from './Searching'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Linear from './Linear';
import Binary from './Binary'
import { ToastContainer } from 'react-toastify'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Searching/>
  },
  {
    path:'/linear',
    element:<Linear/>
  },
  {
    path:'/binary',
    element:<Binary/>
  }
])
function App() {

  return (
    <>
    <ToastContainer position='top-center'/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
