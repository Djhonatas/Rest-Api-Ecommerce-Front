import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

function Login({ onSubmit }) {
  return (
    <div className="login-container">
      <h2>Águia Bordados</h2>
      <div className="login-form">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Login;
