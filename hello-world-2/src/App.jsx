import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <button onclick="alert('Você clicou no botão!')">Clique aqui</button>
    </>
  )
}

export default App
