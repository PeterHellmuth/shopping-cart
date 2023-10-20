import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
