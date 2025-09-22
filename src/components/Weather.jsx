import React from "react";

function Weather({ weatherData, flag, error }) {
  if (flag) {
    return <div>Подождите, выполняется запрос...</div>;
  } else if (error) {
    return <div>Ошибка запроса.Пожалуйста,введите корректный город</div>;
  } else {
    if (!weatherData.current || !weatherData.location) {
      return <div></div>;
    }
    return (
      <div>
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
        <p>Дата и время запроса: {weatherData.location.localtime}</p>
        <p>Страна: {weatherData.location.country}</p>
        <p>Регион: {weatherData.location.region}</p>
        <p>Город: {weatherData.location.name}</p>
        <p>
          Градусов по цельсию: {weatherData.current.temp_c},
          {weatherData.current.condition.text}
        </p>
      </div>
    );
  }
}

export default Weather;
