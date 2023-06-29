import React from "react";
import "../Form/form.css";

export default function Form({ onAddActivity }) {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const weather = event.target.elements.weather.checked;
        const data = { name, weather };
        onAddActivity(data);
      }}
    >
      <h2>Add new Activity</h2>
      <label htmlFor="name" className="form-input">
        Name:
      </label>
      <input type="text" id="name" className="form-input"></input>

      <label htmlFor="weather">Good-weather activity:</label>
      <input type="checkbox" id="weather"></input>

      <button type="submit">Submit</button>
    </form>
  );
}
