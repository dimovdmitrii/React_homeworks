import { useEffect } from "react";
import "./App.css";
import { fetchDogs } from "./redux/thunks";
import DogsComponent from "./components/DogsComponent";

function App() {
  return <DogsComponent></DogsComponent>;
}

export default App;
