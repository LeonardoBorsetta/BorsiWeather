import React from 'react'
import './forecast.css'
import SingleDayForecastMini from '../singleDayForecastMini/SingleDayForecastMini'
import {Link} from 'wouter'

function Forecast({forecastData}) {

  return (
    <div className="forecast-data">
      <Link href='/tomorrow'>
        <a>
          <SingleDayForecastMini 
            forecastData={forecastData.forecastday[1]} 
            day={"Mañana"}/>
        </a>
      </Link>
      <Link href='/2dayNext'>
          <a>
            <SingleDayForecastMini 
              forecastData={forecastData.forecastday[2]} 
              day={"Pasado Mañana"}/>
          </a>
      </Link>
    </div>
  )
}

export default Forecast