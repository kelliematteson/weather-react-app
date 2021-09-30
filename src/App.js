import React, { useState } from 'react';

const api = {
  key: "670cb036800724c6a8fa3cec23b99a2b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if(e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
    });
  }
  }
  return (
    <div className="app">
      <h1>The Very Beginning of our Weather App!</h1>
      <p>by Kellie and Allegra</p>
      <div className="main">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != 'undefined') ? (
            <div className="result">
              <div className="city">{weather.name}</div>
              <div className="temperature">{Math.round(weather.main.temp)}°f </div>
            </div>
        ) : ('')}
      </main>
      </div>
    </div>
  );

}

export default App;
