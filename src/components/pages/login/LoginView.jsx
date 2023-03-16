import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginView() {
  const navigate = useNavigate(); // obtém a instância do history

  const handleLoginFormSubmit = (data) => {
    console.log(data);
    // aqui você pode fazer alguma ação após o login, como redirecionar para outra página
    history.push('/home'); // redireciona para a rota "/home"
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </div>
  );
}

export default LoginView;
