import React, { useState } from 'react'

const Context = React.createContext()

export function WeatherContextProvider({children}){

  const [weather, setWeather] = useState([])
  
  return <Context.Provider value={{weather, setWeather}}>
          {children}
        </Context.Provider>

}

export default Context