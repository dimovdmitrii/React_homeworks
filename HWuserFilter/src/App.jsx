import "./App.css";
import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Filtration list of users</h1>
      </header>
      <main className="App-main">
        <Filter />
        <UserList />
      </main>
    </div>
  );
}

export default App;
