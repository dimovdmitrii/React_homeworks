import { useState } from "react";
import TaskContext from "../../TaskContext";
import { v4 as uuidv4 } from "uuid";

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: "Изучить React Context" },
    { id: uuidv4(), text: "Создать To-Do приложение" },
  ]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: uuidv4(),
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const contextValue = {
    tasks,
    addTask,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
}
