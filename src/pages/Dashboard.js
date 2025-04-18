import React, { useEffect, useState } from 'react';
import API from '../api';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/tasks/');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (

    <div className='container'>
      <LogoutButton />
      <h1>My Tasks</h1>
      <TaskForm onCreate={fetchTasks} />
      {tasks.map(task => <TaskItem key={task.id} task={task} onUpdate={fetchTasks} />)}
    </div>
  );
};

export default Dashboard;
