import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Booking from './Compont/ServicesComp/Booking'
import Learning from './Compont/ServicesComp/Learning'
import Store from './Compont/ServicesComp/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Store/>
      {/* <Learning></Learning> */}
    </div>
  )
}

export default App
