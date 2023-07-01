<<<<<<< HEAD
import React, {useContext} from 'react'
import WeatherContext from '../../context/weatherContext';
import { Link } from 'wouter';
import './eachHour.css'
import Header from '../../components/header/Header';
import home from '../../assets/home.svg'

function EachHour() {

  const {weather} = useContext(WeatherContext);
  const weatherToUse = weather.forecast.forecastday[1].hour
  const date = weatherToUse[0].time.slice(0,-5)

  return (
    <div className="body-container">
      <Link href='/'><button className='searcher-button to-home'><img src={home} alt="to Home"/></button></Link>
      <Header headerInfo = {weather.location}/>
      <h2>Cada hora para el dia <br/>{date}</h2>
      {
        weatherToUse.map(hour => {

          const hourTime = hour.time.slice(-5)

          return (<article className='each-hour-article' key={hour.time}>
            <div className='each-hour-article-header'>
              <h3>{hourTime}</h3>
              <h3>{hour.condition.text}</h3>
              <img src={hour.condition.icon} alt={hour.condition.text}/>
            </div>
            <h4>Temp : {hour.temp_c} °</h4>
            <h4>Viento : {hour.wind_kph} kms/h</h4>
          </article>)
        })
      }
    </div>
  )
}

=======
import React, {useContext} from 'react'
import WeatherContext from '../../context/weatherContext';
import { Link } from 'wouter';
import './eachHour.css'
import Header from '../../components/header/Header';
import home from '../../assets/home.svg'

function EachHour() {

  const {weather} = useContext(WeatherContext);
  const weatherToUse = weather.forecast.forecastday[1].hour
  const date = weatherToUse[0].time.slice(0,-5)

  return (
    <div className="body-container">
      <Link href='/'><button className='searcher-button to-home'><img src={home} alt="to Home"/></button></Link>
      <Header headerInfo = {weather.location}/>
      <h2>Cada hora para el dia <br/>{date}</h2>
      {
        weatherToUse.map(hour => {

          const hourTime = hour.time.slice(-5)

          return (<article className='each-hour-article' key={hour.time}>
            <div className='each-hour-article-header'>
              <h3>{hourTime}</h3>
              <h3>{hour.condition.text}</h3>
              <img src={hour.condition.icon} alt={hour.condition.text}/>
            </div>
            <h4>Temp : {hour.temp_c} °</h4>
            <h4>Viento : {hour.wind_kph} kms/h</h4>
          </article>)
        })
      }
    </div>
  )
}

>>>>>>> cdf4852f624bde8d165d00c36a1e9d078a35de68
export default EachHour