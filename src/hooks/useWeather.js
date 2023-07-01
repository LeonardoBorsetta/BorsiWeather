import {useEffect, useState, useContext} from "react"
import weatherByCity from '../services/weatherByCity'
import WeatherContext from "../context/weatherContext"

export default function useWeather(keyword = "Medellin"){

  const [loading, setLoading] = useState()
  const lastSearch = localStorage.getItem("weatherLastSearch") != "" ? localStorage.getItem("weatherLastSearch") : "Buenos Aires"
  const query = keyword || lastSearch
  const {weather, setWeather} = useContext(WeatherContext)

  useEffect(()=>{
    setLoading(true)
    weatherByCity(query).then(res=>{
      setWeather(res)
      setLoading(false)
    })
  },[query, setWeather])

  return {loading, weather}
}