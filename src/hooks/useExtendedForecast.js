import {useEffect, useState, useContext} from "react"
import fetchExtendedForecast from '../services/fetchExtendedForecast'

export default function useWeather(keyword = "Medellin"){

  const [loading, setLoading] = useState()
  const lastSearch = localStorage.getItem("weatherLastSearch") != "" ? localStorage.getItem("weatherLastSearch") : "Buenos Aires"
  const query = keyword || lastSearch
  const [extendedForecast, setExtendedForecast] = useState()

  useEffect(()=>{
    setLoading(true)
    fetchExtendedForecast(query).then(res=>{
      setExtendedForecast(res)
      setLoading(false)
    })
  },[query])

  return {loading, extendedForecast}
}