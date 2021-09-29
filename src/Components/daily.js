const React = require('react');

export default function Daily(props){
    return(
        <h1>Current Forecast in {props.weather.name}</h1>
        // <h1>{props.weather.main.temp}</h1>
        // <img>{props.weather.weather.icon}</img>
    )
}

