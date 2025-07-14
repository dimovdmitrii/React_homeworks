import { useContext } from "react";
import TaskContext from "../../TaskContext";
import styles from "./styles.module.css";

export default function TaskItem({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className={styles.taskItem}>
      <span className={styles.text}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className={styles.button}>
        Удалить
      </button>
    </div>
  );
}
