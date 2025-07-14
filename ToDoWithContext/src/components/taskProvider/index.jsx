import { useState } from "react";
import TaskContext from "../../TaskContext";
import { v4 as uuidv4 } from "uuid"; // Предполагаем, что вы оставили uuidv4()

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    // Добавляем свойство isCompleted к каждой задаче
    { id: uuidv4(), text: "Изучить React Context", isCompleted: false },
    { id: uuidv4(), text: "Создать To-Do приложение", isCompleted: false },
  ]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: uuidv4(),
      text: text,
      isCompleted: false, // Новые задачи по умолчанию не выполнены
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // НОВАЯ ФУНКЦИЯ: Переключение статуса выполненности задачи
  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const contextValue = {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompleted, // Добавляем новую функцию в контекст
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
}
