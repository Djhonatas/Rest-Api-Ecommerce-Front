import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginView() {
  const navigate = useNavigate();

  const handleLoginFormSubmit = (data) => {
    // Aqui você pode realizar ações adicionais com os dados do login, se necessário
    console.log(data);

    // Redireciona o usuário para a rota "/home"
    navigate('/home');
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </div>
  );
}

export default LoginView;
