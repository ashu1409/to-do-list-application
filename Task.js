import React from 'react';

const Task = ({ task, handleComplete, handleDelete }) => {
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due date: {task.dueDate}</p>
      <button onClick={() => handleComplete(task.id)}>Complete</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
