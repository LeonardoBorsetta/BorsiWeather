import React from 'react'
import './header.css'

function Header(headerInfo) {

  return (
    <div className="location-data">
      <h2>{headerInfo.headerInfo.name}, {headerInfo.headerInfo.region}, {headerInfo.headerInfo.country}</h2>
      <h4>Hora Local: {headerInfo.headerInfo.localtime.slice(-5)}</h4>
    </div>
  )
}

export default Header