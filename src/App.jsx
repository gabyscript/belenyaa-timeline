import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeLine from './components/timeline/timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimeLine />
    </>
  )
}

export default App
