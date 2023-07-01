import React from 'react'
import '../main/main.css'

function MainMañana({weatherData}) {

  return (
    <>
        <div className="current-weather-card">
          <div className="weather-card">
            <img src={weatherData.condition.icon} alt={weatherData.condition.text} />
            <h3>{weatherData.condition.text}</h3>
            <h6 className='weather-card-p'>Temperatura Promedio <p className='weather-card-p2'>{weatherData.avgtemp_c}</p></h6> 
            <h6 className='weather-card-p'>Max Temp <p className='weather-card-p2'>{weatherData.maxtemp_c}°</p></h6>
            <h6 className='weather-card-p'>Min Temp <p className='weather-card-p2'>{weatherData.mintemp_c}°</p></h6>
            <h6 className='weather-card-p'>Probabilidad de Lluvia  <p className='weather-card-p2'>{weatherData.daily_chance_of_rain}%</p></h6>
            <h6 className='weather-card-p'>Humedad <p className='weather-card-p2'>{weatherData.avghumidity} %</p></h6>
            <h6 className='weather-card-p'>UV <p className='weather-card-p2'>{weatherData.uv}</p></h6>  
          </div>
        </div>
    </>
  )
}

export default MainMañana