import React, { useState } from 'react';

const api = {
  key: "670cb036800724c6a8fa3cec23b99a2b",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function Daily() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if(e.key === "Enter") {
      fetch(`${api.base}forecast?q=${city}&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
          getWeatherData(result);
          console.log(result);
    });
  }
  }
  function getWeatherData(result) {
      let {temp, humidity} = result.list[0].main;
      let { description, icon } = result.list[0].weather[0];

      currentWeatherItems.innerHTML = 
      `
      <div>Temp: ${temp}</div>
      <div>Weather: ${description}</div>
      <div>Humidity: ${humidity}</div>
      <div><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
      `
  }
 



  const currentWeatherItems = document.getElementById(`current-weather-items`);
 
  return (
    <div className="daily-forecast">
      <div className="main">
      
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
              />
          </div>
        {(typeof weather.city != 'undefined') ? (
          <div className="result">
              <h2>RESULTS</h2>
              <div className="city">City: {weather.city.name}</div>
              <div className="temp">Temperature: {Math.round(weather.list[0].main.temp)}</div>
              <div className="feels-like-temp">Feels Like: {Math.round(weather.list[0].main.feels_like)}</div>
              <div className="humidity">Humidity: {weather.list[0].main.humidity}.</div>
              <div className="weather-type">Weather: {weather.list[1].weather[0].main}</div>
          </div>
        ) : ('')} 
        </main>
        </div>
        
      </div>
    
  );
}