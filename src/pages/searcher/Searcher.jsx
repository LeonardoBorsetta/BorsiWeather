import React from 'react'
import './searcher.css'

function Searcher() {
  
  return (
    <>
      <form className='location-data searcher'>
        <input type="text" placeholder='Buenos Aires, Paris or Pekin'/>
        <button>Buscar Clima</button>
      </form>
    </>
  )
}

export default Searcher