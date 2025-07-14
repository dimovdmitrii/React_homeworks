import { useContext } from "react";
import TaskContext from "../../TaskContext";
import styles from "./styles.module.css";

export default function TaskItem({ task }) {
  // Получаем deleteTask и toggleTaskCompleted из контекста
  const { deleteTask, toggleTaskCompleted } = useContext(TaskContext);

  return (
    <div className={styles.taskItem}>
      {/* Чекбокс для переключения статуса выполненности */}
      <input
        type="checkbox"
        checked={task.isCompleted} // Состояние чекбокса зависит от isCompleted
        onChange={() => toggleTaskCompleted(task.id)} // При изменении вызываем toggleTaskCompleted
        className={styles.checkbox} // Добавим класс для стилизации
      />
      <span
        // Применяем класс styles.completed, если задача выполнена
        className={`${styles.text} ${task.isCompleted ? styles.completed : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className={styles.button}>
        Удалить
      </button>
    </div>
  );
}
