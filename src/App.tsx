import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component1 from './components/Component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Component1/>
        <Component2/>
        <Component3/>
      </div>
    </>
  )
}

export default App
