import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Drawler/>
    </>
  )
}

export default App
