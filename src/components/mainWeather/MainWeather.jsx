<<<<<<< HEAD
import React, {useState} from 'react'
import {Link} from 'wouter'
import lupa from '../../assets/magnifying-glass-solid.svg'
import extendedForecastjpg from '../../assets/extendedForecast.webp'
import './mainWeather.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Forecast from '../forecast/Forecast'
import Loader from '../loader/Loader'
import useWeather from '../../hooks/useWeather'

function MainWeather() {

  const lastSearch = localStorage.getItem("weatherLastSearch") != "" ? localStorage.getItem("weatherLastSearch") : "Buenos Aires"
  const [query, setQuery] = useState(lastSearch)
  const {loading, weather} = useWeather(query)
  const [searcher, setSearcher] = useState()


  function toggleSearch(){
    searcher ? setSearcher(false) : setSearcher(true)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newQuery = event.target[0].value != "" ? event.target[0].value : "Buenos Aires"
    setQuery(newQuery)
    setSearcher(false)
    localStorage.setItem("weatherLastSearch",newQuery)
  }

  if(loading) return (<Loader/>)

  if(searcher) return (
    <>
      <button className="searcher-button" onClick={toggleSearch}><img src={lupa}/></button>
      <Link href='/extendedforecast'><button className="searcher-button to-forecast"><img className='ext-fore-img' src={extendedForecastjpg} alt="siguientes dias"/></button></Link>
      <div className="body-container">
        <form className='location-data searcher' onSubmit={handleSubmit}>
          <input type="text" placeholder='Buenos Aires, Paris or Pekin'/>
          <button>Buscar Clima</button>
        </form>
        <Main weatherData={weather.current}/>
        <Forecast forecastData={weather.forecast}/>
      </div>
    </>
  )

  if(weather != "") return (
    <>
      <button className="searcher-button" onClick={toggleSearch}><img src={lupa}/></button>
      <Link href='/extendedforecast'><button className="searcher-button to-forecast"><img className='ext-fore-img' src={extendedForecastjpg} alt="siguientes dias"/></button></Link>
      <div className="body-container">
        <Header headerInfo = {weather.location}/>
        <Main weatherData={weather.current}/>
        <Forecast forecastData={weather.forecast}/>
      </div>
    </>
    )
  
}
=======
import React, {useState} from 'react'
import {Link} from 'wouter'
import lupa from '../../assets/magnifying-glass-solid.svg'
import extendedForecastjpg from '../../assets/extendedForecast.webp'
import './mainWeather.css'
import Header from '../header/Header'
import Main from '../main/Main'
import Forecast from '../forecast/Forecast'
import Loader from '../loader/Loader'
import useWeather from '../../hooks/useWeather'

function MainWeather() {

  const lastSearch = localStorage.getItem("weatherLastSearch") != "" ? localStorage.getItem("weatherLastSearch") : "Buenos Aires"
  const [query, setQuery] = useState(lastSearch)
  const {loading, weather} = useWeather(query)
  const [searcher, setSearcher] = useState()


  function toggleSearch(){
    searcher ? setSearcher(false) : setSearcher(true)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newQuery = event.target[0].value != "" ? event.target[0].value : "Buenos Aires"
    setQuery(newQuery)
    setSearcher(false)
    localStorage.setItem("weatherLastSearch",newQuery)
  }

  if(loading) return (<Loader/>)

  if(searcher) return (
    <>
      <button className="searcher-button" onClick={toggleSearch}><img src={lupa}/></button>
      <Link href='/extendedforecast'><button className="searcher-button to-forecast"><img className='ext-fore-img' src={extendedForecastjpg} alt="siguientes dias"/></button></Link>
      <div className="body-container">
        <form className='location-data searcher' onSubmit={handleSubmit}>
          <input type="text" placeholder='Buenos Aires, Paris or Pekin'/>
          <button>Buscar Clima</button>
        </form>
        <Main weatherData={weather.current}/>
        <Forecast forecastData={weather.forecast}/>
      </div>
    </>
  )

  if(weather != "") return (
    <>
      <button className="searcher-button" onClick={toggleSearch}><img src={lupa}/></button>
      <Link href='/extendedforecast'><button className="searcher-button to-forecast"><img className='ext-fore-img' src={extendedForecastjpg} alt="siguientes dias"/></button></Link>
      <div className="body-container">
        <Header headerInfo = {weather.location}/>
        <Main weatherData={weather.current}/>
        <Forecast forecastData={weather.forecast}/>
      </div>
    </>
    )
  
}
>>>>>>> cdf4852f624bde8d165d00c36a1e9d078a35de68
export default MainWeather