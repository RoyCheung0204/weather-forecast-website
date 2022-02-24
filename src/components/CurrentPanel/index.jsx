import React from 'react'
import './index.css'

const sunnyIcon = require('../../static/pic/04d@2x.png');

const index = () => {
  return (
    <div className='currentPanel'>
        <p className='label'>5:05 PM, Mon, Nov 23, 2020</p>

        <div className='currentTemp'>
            <div className='data'>
                <img src={sunnyIcon} className='weatherIcon'/>
                <p className='temp'>23</p>
                <p className='unit'>°C</p>
            </div>
            <p className='desc'>Cloudy</p>
        </div>

        <div className="otherInfos">
            <div className="otherInfosUnit">
                <p className="label">Humidity</p>
                <p className="value">45%</p>
            </div>
            <div className="otherInfosUnit">
                <p className="label">Wind speed</p>
                <p className="value">19.2 km/j</p>
            </div>
        </div>

    </div>
  )
}



export default index