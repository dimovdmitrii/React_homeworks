import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const articlesData = [
  {
    id: "1",
    title: "What is React",
  },
  {
    id: "2",
    title: "What is Routing in React",
  },
  {
    id: "3",
    title: "How use hooks",
  },
];

function ArticlesPage() {
  return (
    <div>
      <h1>List of articles</h1>
      <ul className={styles.articlesList}>
        {articlesData.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
