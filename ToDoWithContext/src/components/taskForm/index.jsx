import { useState, useContext } from "react";
import TaskContext from "../../TaskContext";
import styles from "./styles.module.css";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
}
