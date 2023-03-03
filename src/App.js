import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    // TODO: Implement code to get all tasks
  }, []);

  const handleAddTask = () => {
    // TODO: Implement code to add a new task
  };

  const handleUpdateTask = (id) => {
    // TODO: Implement code to update a task
  };

  const handleDeleteTask = (id) => {
    // TODO: Implement code to delete a task
  };

  const handleSearch = () => {
    // TODO: Implement code to search for tasks by keyword
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add task" />
        <button type="submit">Add</button>
      </form>

      <input type="text" name="search" placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleUpdateTask(task.id)} />
            {task.title}
            <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
