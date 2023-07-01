import React, { useContext } from 'react'
import { Link } from 'wouter'
import WeatherContext from '../../context/weatherContext'
import Header from '../../components/header/Header'
import MainMañana from '../../components/mainMañana/MainMañana'
import arrowRight from '../../assets/arrow-right-solid.svg'
import '../mañana/mañana.css'

function Mañana() {

  const {weather} = useContext(WeatherContext)
  console.log(weather.forecast.forecastday[1].day)

  return (
    <div className="body-container">
      <Link href='/'><button className='searcher-button arrow-button'><img src={arrowRight} alt="Atras" className='arrow'/></button></Link>
      <Link href='/each-hour'><button className='searcher-button each-hour'><img src="" alt="" className='arrow'/>Por Hora</button></Link>
      <h3>Clima para Mañana</h3>
      <Header headerInfo = {weather.location}/>
      <MainMañana weatherData={weather.forecast.forecastday[1].day}/>
    </div>
  )
}

export default Mañana