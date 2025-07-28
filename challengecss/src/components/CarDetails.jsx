import styles from './CarDetails.module.css'

const CarDetails = ({brand, km, color, newCar}) => {
    return (
      <div className={styles.card}>
              <h1>{brand}</h1>
              <h3>KM: {km}</h3>
              <h3>Cor: {color}</h3>
              {newCar && <h3>Este carro é novo!</h3>}
      </div>
    )
  }
  
  export default CarDetails