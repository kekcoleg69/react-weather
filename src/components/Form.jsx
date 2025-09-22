import { React, useState } from "react";

function Form({ setCity }) {
  const [inputCity, setInputCity] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Введите город"
        value={inputCity}
        onChange={(evt) => {
          setInputCity(evt.target.value);
        }}
      />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCity(inputCity);
          setInputCity("");
        }}
      >
        Получить текущую погоду
      </button>
    </form>
  );
}

export default Form;
