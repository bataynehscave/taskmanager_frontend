import React, { useState } from 'react';
import API from '../api';

const TaskForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/tasks/', { title });
    setTitle('');
    onCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
