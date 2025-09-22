import { React, useEffect, useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

console.log(API_KEY);
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: city,
            lang: "ru",
          },
        });
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);
  return (
    <div>
      <Form setCity={setCity} />
      <Weather weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
}

export default App;
