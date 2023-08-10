import React, { useContext } from 'react'
import {Link} from 'wouter'
import Header from '../../components/header/Header'
import WeatherContext from '../../context/weatherContext'
import SingleDayForecast from '../../components/singleDayForecastMini/SingleDayForecastMini'
import './extendendForecast.css'
import home from '../../assets/home.svg'

function ExtendendForecast() {

  const {weather} = useContext(WeatherContext)

  return (
    <div className="body-container">
      <Link href='/'><button className='searcher-button to-home'><img src={home} alt="to Home"/></button></Link>
      <Header headerInfo = {weather.location}/>
      <div className="forecast-forecastExtended-container">
        <Link href='/tomorrow'><a><SingleDayForecast forecastData={weather.forecast.forecastday[1]} day={"Mañana"}/></a></Link>
        <Link href='2dayNext'><a><SingleDayForecast forecastData={weather.forecast.forecastday[2]} day={"Mañana"}/></a></Link>
      </div>
    </div>
  )
}

export default ExtendendForecast