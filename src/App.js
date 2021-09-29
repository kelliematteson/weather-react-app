import React, { useState } from 'react';
import Daily from './Components/daily';

const api = {
  key: "28611cc9592fbb1dac90751910e454f6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
// holding var to grab input from visiter
  const [query, setQuery] = useState('');
// holding var to allow the page to render dynamic weather info
  const [weather, setWeather] = useState({});

// search bar var with an event listener for the query and triggers the setWeather useState change
  const search = e => {
    if(e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
    });
  }
  }
  return (
    <div className="App">
      <h1>Local Forecast</h1>
      <h5>API Project by Kellie Matteson and Allegra Hilburger</h5>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {/* Here we will place the daily forcast and the 7 day forcast below. These are both components that we will export here */}
        <div className="daily_forecast">
          {/* <Daily/> */}
          <h1>Today's forecast in {weather.name}</h1>
          {/* <h1>{weather.main.temp}</h1>
          <img>{weather.weather.icon}</img> */}
        </div>
        <div className="sevenday_forecast">

        </div>
      </main>
    </div>
  );

}

export default App;
