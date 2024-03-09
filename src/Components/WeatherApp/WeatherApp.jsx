import React, { useState } from "react";
import "./WeatherApp.css";

import clear_icon from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import humidity_icon from "../../assets/humidity.png";
import rain_icon from "../../assets/rain.png";
import search_icon from "../../assets/search.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";

const WeatherApp = () => {
  const api_key = '66f1639acf4fc069f250c9815afccb0d'
  const [icon,setIcon] = useState(cloud)
  const [display,setDisplay] = useState(false)
  const search = async() => {
    const element = document.getElementsByClassName('city')
    if(element[0].value === ''){
      return false
    }

    setDisplay(true)    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=Metric`
    let res = await fetch(url)
    let data = await res.json()
    const humidity = document.getElementsByClassName('humidity-percent')
    const wind = document.getElementsByClassName('wind-rate')
    const temp = document.getElementsByClassName('weather-temp')
    const location = document.getElementsByClassName('weather-location')

    humidity[0].innerHTML = data.main.humidity + ' %'
    wind[0].innerHTML = data.wind.speed + ' km/h'
    temp[0].innerHTML = Math.floor(data.main.temp) + '°C'
    location[0].innerHTML = data.name

    if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n' ){
      setIcon(clear_icon)
    }else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n' ){
      setIcon(cloud)
    }else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n' ){
      setIcon(drizzle_icon)
    }else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n' ){
      setIcon(drizzle_icon)
    }else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n' ){
      setIcon(rain_icon)
    }else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n' ){
      setIcon(rain_icon)
    }else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n' ){
      setIcon(snow_icon)
    }else{
      setIcon(clear_icon)
    }
  }
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="city" placeholder="Search..." />
          <div className="search-icon" onClick={search}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-img">
          <img src={icon} alt="" />
        </div>
        <div className="weather-temp"></div>
        <div className="weather-location">Enter the location</div>
        {
          display ? <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent"></div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate"></div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div> : <div></div>
        }
        
      </div>
    </>
  );
};

export default WeatherApp;
