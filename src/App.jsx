import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container-fluid p-0'>
      <HomePage />
    </main>
  )
}

export default App
