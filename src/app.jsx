import React from 'react'
import {Route} from 'wouter'

import MainWeather from './components/mainWeather/MainWeather'
import ExtendendForecast from './pages/extendedForecast/ExtendendForecast'
import Mañana from './pages/mañana/Mañana'
import PasadoMañana from './pages/pasadoMañana/PasadoMañana'
import EachHour from './pages/eachHour/EachHour'
import EachHour2Day from './pages/eachHour2day/EachHour2Day'
import EachHourToday from './pages/heachHourToday/EachHourToday'

import { WeatherContextProvider } from './context/weatherContext'
import './app.css'

function App() {

  return (
    <WeatherContextProvider> 
      <div className="body">
        <Route path="/" component={MainWeather} />
        <Route path="/extendedforecast" component={ExtendendForecast}/>
        <Route path="/tomorrow" component={Mañana}/>
        <Route path="/2dayNext" component={PasadoMañana}/>
        <Route path='/each-hour-today' component={EachHourToday}/>
        <Route path='/each-hour' component={EachHour}/>
        <Route path='/each-hour-2day' component={EachHour2Day}/>
      </div>
    </WeatherContextProvider> 
  )
}

export default App