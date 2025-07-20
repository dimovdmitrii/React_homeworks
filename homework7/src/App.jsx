import "./App.css";
import React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextDisplay from "./components/TextDisplay";
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div className="container">
        <h1>
          <TextDisplay />
        </h1>
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

export default App;
