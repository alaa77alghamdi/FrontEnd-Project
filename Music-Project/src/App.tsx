import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Booking from './Compont/ServicesComp/Booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Booking/>
    </div>
  )
}

export default App
