import React from 'react';
import { FaHome, FaCompass, FaBell, FaEnvelope, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Left.css';

function Left({ setSelectedOption }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="left">
      <ul className="menu-list">
        <li onClick={() => setSelectedOption('Home')}>
          <FaHome className="icon" />
          Home
        </li>
        <li onClick={() => setSelectedOption('Explore')}>
          <FaCompass className="icon" />
          Explore
        </li>
        <li onClick={() => setSelectedOption('Notification')}>
          <FaBell className="icon" />
          Notification
        </li>
        <li onClick={() => setSelectedOption('Messages')}>
          <FaEnvelope className="icon" />
          Messages
        </li>
        <li onClick={() => setSelectedOption('Profile')}>
          <FaUser className="icon" />
          Profile
        </li>
      </ul>
      <button className="logout" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        Logout
      </button>
    </div>
  );
}

export default Left;
