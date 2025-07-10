import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import Managedata from './components/Managedata'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const [userName] = useState('Maria')

  return (
    <>
      <div>
        <h1>Seção 3</h1>

        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>

        {/* Imagem em asset */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <Managedata />
        <ListRender />
        <ConditionalRender />

        {/* props */}
        <ShowUserName name={userName} />

        {/* destructuring */}
        <CarDetails brand='VW' km={100000} color='Azul' />
      </div>
    </>
  )
}

export default App
