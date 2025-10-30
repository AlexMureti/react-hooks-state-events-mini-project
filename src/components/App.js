import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  function onCategoryChange(selectedCategory) {
    setSelectedCategory(selectedCategory);
  }

  function onTaskFormSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  function handleDeleteTask(taskId) {
    console.log("Deleting task with id:", taskId);

  const filteredTasks = tasks.filter((task) =>
      selectedCategory === "All" ? true : task.category === selectedCategory
    );
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
\      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryChange}
/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />

    </div>
  );
}

export default App;
