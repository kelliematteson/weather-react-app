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
          getWeatherDataDay2(result);
          getWeatherDataDay3(result);
          getWeatherDataDay4(result);
          getWeatherDataDay5(result);
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
  function getWeatherDataDay2(result) {
    let {temp, humidity} = result.list[5].main;
    let { description, icon } = result.list[5].weather[0];

    currentWeatherItems2.innerHTML = 
    `
    <div>Temp: ${temp}</div>
    <div>Weather: ${description}</div>
    <div>Humidity: ${humidity}</div>
    <div><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
    `
}
function getWeatherDataDay3(result) {
  let {temp, humidity} = result.list[13].main;
  let { description, icon } = result.list[13].weather[0];

  currentWeatherItems3.innerHTML = 
  `
  <div>Temp: ${temp}</div>
  <div>Weather: ${description}</div>
  <div>Humidity: ${humidity}</div>
  <div><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
  `
}
function getWeatherDataDay4(result) {
  let {temp, humidity} = result.list[21].main;
  let { description, icon } = result.list[21].weather[0];

  currentWeatherItems4.innerHTML = 
  `
  <div>Temp: ${temp}</div>
  <div>Weather: ${description}</div>
  <div>Humidity: ${humidity}</div>
  <div><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
  `
}
function getWeatherDataDay5(result) {
  let {temp, humidity} = result.list[29].main;
  let { description, icon } = result.list[29].weather[0];

  currentWeatherItems5.innerHTML = 
  `
  <div>Temp: ${temp}</div>
  <div>Weather: ${description}</div>
  <div>Humidity: ${humidity}</div>
  <div><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
  `
}
  const currentWeatherItems = document.getElementById(`current-weather-items`);
  const currentWeatherItems2 = document.getElementById(`current-weather-items-2`);
  const currentWeatherItems3 = document.getElementById(`current-weather-items-3`);
  const currentWeatherItems4 = document.getElementById(`current-weather-items-4`);
  const currentWeatherItems5 = document.getElementById(`current-weather-items-5`);
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
      <div id="current-weather-items"></div>
      <div id="current-weather-items-2"></div>
      <div id="current-weather-items-3"></div>
      <div id="current-weather-items-4"></div>
      <div id="current-weather-items-5"></div>
      </div>
    </div>
  );
}