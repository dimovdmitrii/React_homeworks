import "./App.css";
import React, { useState } from "react";
import ValueDisplay from "./components/valueDisplay/ValueDisplay";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <h1>Prop values</h1>
      <p>Enter text in the field below</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="input-field"
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
