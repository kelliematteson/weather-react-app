import React, { useState } from 'react';

import Results from './Results';
const api = {
  key: "670cb036800724c6a8fa3cec23b99a2b",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function Daily() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if(e.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
          // getWeatherData(result);
          console.log(result);
    });
  }
  }
 
 



  // const currentWeatherItems = document.getElementById(`current-weather-items`);
 
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
        
          <div className="result">
              <h2>RESULTS</h2>
              <Results weather={weather}/>
          </div>
        
        </main>
        </div>
        
      </div>
  
  );
}