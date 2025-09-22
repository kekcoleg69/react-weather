import { React, useEffect, useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const KEY = "245e0d699c0743fd81455823250909";
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        setFlag(true);
        setError(false);
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json",
          {
            params: {
              key: KEY,
              q: city,
              lang: "ru",
            },
          }
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setFlag(false);
      }
    };
    fetchWeather();
  }, [city]);
  return (
    <div>
      <Form
        inputCity={inputCity}
        setInputCity={setInputCity}
        setCity={setCity}
      />
      <Weather weatherData={weatherData} flag={flag} error={error} />
    </div>
  );
}

export default App;
