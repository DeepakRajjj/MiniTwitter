import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Name' 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder='Username' 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Email' 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Password' 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder='Confirm Password' 
              className="input-field" 
              required
            />
          </div>
          <button 
            type="submit" 
            className='submit-button'>
            Create Account
          </button>
          <NavLink to="/login" className='nav-link'>
            Already have an Account
          </NavLink>
        </form>
      </header>
    </div>
  );
}

export default Register;
