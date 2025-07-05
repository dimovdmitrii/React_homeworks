import React, { useState } from "react";
import CitySelector from "./components/CitySelector";

import CityCard from "./components/CityCard";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="App">
      <h1>City Cards</h1>
      <CitySelector onSelect={setSelectedCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
