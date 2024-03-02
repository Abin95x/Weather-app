import React from 'react'
import './WeatherApp.css'


import clear from '../../assets/clear.png'
import cloud from '../../assets/cloud.png'
import drizzle from '../../assets/drizzle.png'
import humidity from '../../assets/humidity.png'
import rain from '../../assets/rain.png'
import search from '../../assets/search.png'
import snow from '../../assets/snow.png'
import wind from '../../assets/wind.png'

const WeatherApp = () => {
  return (
    <>
        <div className='container'>
            <div className='top-bar'>
            <input type="text" className="city" placeholder='Search...'/>
            <div className="search-icon">
                <img src={search} alt="" />
            </div>
            </div>
            
            <div className="weather-img">
                <img src={cloud} alt="" />
            </div>
        </div>
    </>
  )
}

export default WeatherApp