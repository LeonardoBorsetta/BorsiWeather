<<<<<<< HEAD
import React, { useContext } from 'react'
import WeatherContext from '../../context/weatherContext'
import Header from '../../components/header/Header'
import MainMañana from '../../components/mainMañana/MainMañana'
import { Link } from 'wouter'
import arrowRight from '../../assets/arrow-right-solid.svg'
import clock from '../../assets/clock-solid.svg'

function PasadoMañana() {

  const {weather} = useContext(WeatherContext)
  console.log(weather.forecast.forecastday[1].day)

  return (
    <div className="body-container">
      <h3>Clima para Pasado Mañana</h3>
      <Link href='/'><button className='searcher-button arrow-button'><img src={arrowRight} alt="Atras" className='arrow'/></button></Link>
      <Link href='/each-hour-2day'><button className='searcher-button each-hour'><img src={clock} alt="" className='arrow'/>Por Hora</button></Link>
      <Header headerInfo = {weather.location}/>
      <MainMañana weatherData={weather.forecast.forecastday[2].day}/>
    </div>
  )
}

=======
import React, { useContext } from 'react'
import WeatherContext from '../../context/weatherContext'
import Header from '../../components/header/Header'
import MainMañana from '../../components/mainMañana/MainMañana'
import { Link } from 'wouter'
import arrowRight from '../../assets/arrow-right-solid.svg'
import clock from '../../assets/clock-solid.svg'

function PasadoMañana() {

  const {weather} = useContext(WeatherContext)
  console.log(weather.forecast.forecastday[1].day)

  return (
    <div className="body-container">
      <h3>Clima para Pasado Mañana</h3>
      <Link href='/'><button className='searcher-button arrow-button'><img src={arrowRight} alt="Atras" className='arrow'/></button></Link>
      <Link href='/each-hour-2day'><button className='searcher-button each-hour'><img src={clock} alt="" className='arrow'/>Por Hora</button></Link>
      <Header headerInfo = {weather.location}/>
      <MainMañana weatherData={weather.forecast.forecastday[2].day}/>
    </div>
  )
}

>>>>>>> cdf4852f624bde8d165d00c36a1e9d078a35de68
export default PasadoMañana