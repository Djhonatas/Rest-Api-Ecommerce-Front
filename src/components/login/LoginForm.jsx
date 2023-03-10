import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080"

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post(`${URL}/users/login`, { username, password });
      const data = response.data;
      if (response.status === 200) {
        onSubmit(data);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação');
    }
  };

  const handleSignup = async () => {
    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post(`${URL}/users/`, { username, password });
      const data = response.data;
      if (response.status === 200) {
        onSubmit(data);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação');
    }
  };

  const handleUsernameChange = event => {
    const value = event.target.value;
    // Verificar se a entrada contém apenas letras, números, pontos e traços
    if (/^[a-zA-Z0-9.-]*$/.test(value)) {
      setUsername(value);
    }
  };


  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default LoginForm;
