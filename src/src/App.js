import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState('');

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      completed: false
    };
    axios.post('/api/tasks', newTask)
      .then((res) => {
        setTasks([...tasks, res.data]);
        e.target.title.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

  const handleUpdateTask = async (id, completed) => {
    try {
      await axios.put(`/tasks/${id}`, { completed: !completed });
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`/tasks/${id}`, { title: editTask });
      setEditTask('');
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/tasks?title_like=${keyword}`);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <input type="text" name="search" placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleUpdateTask(task.id, task.completed)} />
            {task.editing ? (
              <form onSubmit={(e) => handleEditTask(e, task.id)}>
                <input type="text" name="task" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => {
                  setEditTask('');
                  handleUpdateTask(task.id, task.completed);
                }}>Cancel</button>
              </form>
            ) : (
              <>
                {task.title}
                <button type="button" onClick={() => {
                  setEditTask(task.title);
                  handleUpdateTask(task.id, task.completed);
                }}>Edit</button>
                <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
