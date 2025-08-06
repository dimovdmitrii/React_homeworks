import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const articlesData = [
  {
    id: "1",
    title: "What is React",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating modern web applications. React allows developers to build reusable UI components and efficiently update the user interface when data changes.",
  },
  {
    id: "2",
    title: "What is Routing in React",
    content:
      "Routing in React is the process of navigating between different pages or components in a React application. It is typically handled using a library like React Router. Routing allows developers to create single-page applications with multiple views without reloading the page.",
  },
  {
    id: "3",
    title: "How use hooks",
    content:
      "Hooks in React are special functions that let you use state and other React features in functional components. For example, the useState hook allows you to add state, and useEffect lets you perform side effects like fetching data. Hooks help make your code cleaner and easier to manage without using class components.",
  },
];

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return (
      <div className={styles.container}>
        <h2>404: Article not found</h2>
        <button onClick={() => navigate(`/articles`)}>Go back </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <button onClick={() => navigate(`/articles`)}>Go back </button>
    </div>
  );
}

export default ArticlePage;
