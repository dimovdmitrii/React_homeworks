import React from "react";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Home Work 1</h1>
      <ImageComponent />
      <VideoComponent />
      <ParagraphsComponent />
      <ListsComponent />
    </div>
  );
}

export default App;
