import "./App.css";
import HomePage from "./pages/homePage";
import ArticlePage from "./pages/articlePage";
import ArticlesPage from "./pages/articlesPage";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
