// src/App.jsx
import React from "react";
import "./App.css"; // Общие стили для App
import "./index.css"; // Если index.css содержит общие сбросы/переменные

import SpotifyLogo from "./assets/icons/MainLogo.svg";

import AppleButton from "./components/apple";
import GoogleButton from "./components/google";
import XsocialButton from "./components/Xsocial";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={SpotifyLogo} alt="SpotifyLogo" className="spotify-logo" />
      </header>
      <main className="app-main-content">
        <h1 className="main-title">LIFE IS WASTED ON THE LIVING</h1>
        <p className="signin-text">Sign in with</p>
        <div className="social-buttons-container">
          <AppleButton />
          <GoogleButton />
          <XsocialButton />
        </div>
      </main>
    </div>
  );
}

export default App;
