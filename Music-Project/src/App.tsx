import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Booking from './Compont/ServicesComp/Booking'
import Learning from './Compont/ServicesComp/Learning'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Learning/>
    </div>
  )
}

export default App
