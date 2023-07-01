import React from 'react'

function SingleDayForecastMini({forecastData, day}) {

  return (
    <div className="tomorrow-data">
      <h3 className='forecast-header'>{day}</h3>
      <p className='forecast-desc' >{forecastData.day.condition.text}</p>
      <img className='forecast-img' src={forecastData.day.condition.icon} alt={forecastData.day.condition.text}/>
      <p className='forecast-temp'>Max : {forecastData.day.maxtemp_c}° Min :{forecastData.day.mintemp_c}° </p>
    </div>
  )
}

export default SingleDayForecastMini