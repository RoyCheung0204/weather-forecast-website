import React from 'react'
import Search from '../Search'
import CurrentPanel from '../CurrentPanel'
import ForecastPanel from '../ForecastPanel'
import './index.css'

const Container = () => {
  return (
    <div className="container">
      <Search />
      <div className="infoSection">
        <CurrentPanel />
        <ForecastPanel />
      </div>
    </div>
  )
}

export default Container