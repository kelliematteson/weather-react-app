function Results(props) {



return (
    <div>
             <div className="weather-name">City: {props.weather.name}</div>
              <div className="feels-like">Feels Like: {props.weather.main.feels_like}</div>
              <div className="description">Weather: {props.weather.weather[0].description}</div>
              </div>
)


    
}
export default Results;