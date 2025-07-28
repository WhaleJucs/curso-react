import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className='App'>
      <h1>React Forms</h1>
      <MyForm user={{name: 'joão',email: 'joao@gmail.com',bio: 'Sou um programador',role: 'admin'}}/>
    </div>
  )
}

export default App
