import React from 'react';
import Navbar from '../navbar/Navbar';
import LoginForm from './LoginForm';

function LoginView() {
  const handleLoginFormSubmit = (data) => {
    console.log(data);
    // aqui você pode fazer alguma ação após o login, como redirecionar para outra página
  };

  return (
    <div>
      <Navbar />
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </div>
  );
}

export default LoginView;
