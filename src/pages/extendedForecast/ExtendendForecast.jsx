import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import WeatherContext from '../../context/weatherContext'
import SingleDayForecast from '../../components/singleDayForecastMini/SingleDayForecastMini'

function ExtendendForecast() {

  const {weather} = useContext(WeatherContext)

  return (
    <div className="body-container">
      <Header headerInfo = {weather.location}/>
      <div className="forecast-forecastExtended-container">
        <SingleDayForecast forecastData={weather.forecast.forecastday[1]} day={"Mañana"}/>
        <SingleDayForecast forecastData={weather.forecast.forecastday[2]} day={"Pasado Mañana"}/>
      </div>
    </div>
  )
}

export default ExtendendForecast