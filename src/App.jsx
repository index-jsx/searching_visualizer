import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searching from './Searching'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Linear from './Linear';
import Binary from './Binary'
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
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
