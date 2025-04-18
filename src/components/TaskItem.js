import React, { useState } from 'react';
import API from '../api';

const TaskItem = ({ task, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleDelete = async () => {
    await API.delete(`/tasks/${task.id}/`);
    onUpdate();
  };

  const handleToggleDone = async () => {
    await API.patch(`/tasks/${task.id}/`, {
      status: task.status === 'done' ? 'pending' : 'done',
    });
    onUpdate();
  };

  const handleUpdate = async () => {
    await API.put(`/tasks/${task.id}/`, {
      ...task,
      title: newTitle,
    });
    setEditing(false);
    onUpdate();
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      {isEditing ? (
        <>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span  style={{ textDecoration: task.status === 'done' ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleToggleDone} >
        {task.status === 'done' ? 'Undo' : 'Mark Done'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
