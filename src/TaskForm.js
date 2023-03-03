import React, { useState } from 'react';

const TaskForm = ({ handleSubmit, buttonText }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const task = {
      name: name,
      description: description,
      dueDate: dueDate,
    };
    handleSubmit(task);
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Task name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
     
      <label>
        Task description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Due date:
        <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
      </label>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TaskForm;
