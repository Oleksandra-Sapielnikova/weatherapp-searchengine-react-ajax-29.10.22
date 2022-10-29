import "./SearchEngine.css";
import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState(false);

  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function fetchWeatherData(response) {
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
  }

  function showWeather(event) {
    event.preventDefault();

    const apiKey = `5f5a904b1010fd7d21cf0df3d7bfaf60`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchWeatherData);

    setMessage(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="SearchEngine">
      <form onSubmit={showWeather}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h4 className="message">{message}</h4>
    </div>
  );

  if (message) {
    return (
      <div className="weatherList">
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
