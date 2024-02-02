import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/AddTick'
import './components/RequestAPI'
import AddTick from './components/AddTick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='header'>
      <h1 header='title'>FinTrack</h1>
    </div>

    <div className='tickcontent'>
      <AddTick/>
    </div>
      
    


    </>
  )
}

export default App
