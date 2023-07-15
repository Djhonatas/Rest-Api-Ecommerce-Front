import React from 'react';
import LoginForm from '../login/LoginForm';
import './Login.css';

const Login = ({ onSubmit }) => {
  const handleLoginFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="login-container">
      <h2>ÁGUIA BORDADOS</h2>
      <div className="login-form">
        <LoginForm onSubmit={handleLoginFormSubmit} />
      </div>
    </div>
  );
};

export default Login;
