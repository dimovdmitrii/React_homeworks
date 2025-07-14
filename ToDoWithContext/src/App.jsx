import TaskProvider from "./components/taskProvider";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>To-Do List with context 📝</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
