import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate }) => (
  <div>
    {tasks.map(task => <TaskItem key={task.id} task={task} onUpdate={onUpdate} className="task-item" />)}
  </div>
);

export default TaskList;
