import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234}
  ]

  return (
    <div className='app'>
      <h1>Lista de carros</h1>
      <div className='style_list'>
      {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar} 
          />
        ))}
    </div>
    </div>
  )
}

export default App
