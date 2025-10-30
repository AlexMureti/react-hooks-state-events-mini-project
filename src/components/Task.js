import React from "react";


function Task({ task, category, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDeleteTask(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
