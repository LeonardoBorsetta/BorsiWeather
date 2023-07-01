<<<<<<< HEAD
import React, { useContext } from 'react'
import {Link} from 'wouter'
import Header from '../../components/header/Header'
import WeatherContext from '../../context/weatherContext'
import SingleDayForecast from '../../components/singleDayForecastMini/SingleDayForecastMini'

function ExtendendForecast() {

  const {weather} = useContext(WeatherContext)

  return (
    <div className="body-container">
      <Header headerInfo = {weather.location}/>
      <div className="forecast-forecastExtended-container">
        <Link href='/tomorrow'><a><SingleDayForecast forecastData={weather.forecast.forecastday[1]} day={"Mañana"}/></a></Link>
        <Link href='2dayNext'><a><SingleDayForecast forecastData={weather.forecast.forecastday[2]} day={"Mañana"}/></a></Link>
      </div>
    </div>
  )
}

=======
import React, { useContext } from 'react'
import {Link} from 'wouter'
import Header from '../../components/header/Header'
import WeatherContext from '../../context/weatherContext'
import SingleDayForecast from '../../components/singleDayForecastMini/SingleDayForecastMini'

function ExtendendForecast() {

  const {weather} = useContext(WeatherContext)

  return (
    <div className="body-container">
      <Header headerInfo = {weather.location}/>
      <div className="forecast-forecastExtended-container">
        <Link href='/tomorrow'><a><SingleDayForecast forecastData={weather.forecast.forecastday[1]} day={"Mañana"}/></a></Link>
        <Link href='2dayNext'><a><SingleDayForecast forecastData={weather.forecast.forecastday[2]} day={"Mañana"}/></a></Link>
      </div>
    </div>
  )
}

>>>>>>> cdf4852f624bde8d165d00c36a1e9d078a35de68
export default ExtendendForecast