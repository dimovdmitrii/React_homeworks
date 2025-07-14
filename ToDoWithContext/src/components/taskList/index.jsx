import { useContext } from "react";
import TaskContext from "../../TaskContext";
import TaskItem from "../taskItem";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#888" }}>
        Задач пока нет. Добавьте первую! 🥳
      </p>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
