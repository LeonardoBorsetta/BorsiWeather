import React from 'react'
import './main.css'

function Main({weatherData}) {

  return (
    <>
        <div className="current-weather-card">
          <div className="weather-card">
            <img src={weatherData.condition.icon} alt={weatherData.condition.text} />
            <h3>{weatherData.condition.text}</h3>
            <h6 className='weather-card-p'>Temperatura <p className='weather-card-p2'>{weatherData.temp_c}°</p></h6>
            <h6 className='weather-card-p'>Sensacion Termica  <p className='weather-card-p2'>{weatherData.feelslike_c}°</p></h6>
            <h6 className='weather-card-p'>Viento  <p className='weather-card-p2'>{weatherData.wind_kph} Kms/H</p></h6>
            <h6 className='weather-card-p'>Direccion Viento <p className='weather-card-p2'>{weatherData.wind_dir}</p></h6> 
            <h6 className='weather-card-p'>Humedad <p className='weather-card-p2'>{weatherData.humidity} %</p></h6>
            <h6 className='weather-card-p'>Nubosidad <p className='weather-card-p2'>{weatherData.cloud} %</p></h6>  
          </div>
        </div>
    </>
  )
}

export default Main