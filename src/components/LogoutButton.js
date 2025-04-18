// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../api';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <button className="btn logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
