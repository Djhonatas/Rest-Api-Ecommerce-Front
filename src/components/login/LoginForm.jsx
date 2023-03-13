import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const URL = "http://192.168.10.122:8080/"

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loggedIn, setLoggedIn] = useState(false); // novo estado

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post(`${URL}users/login`, { email, password });
      const data = response.data;
      if (response.status === 200) {
        onSubmit(data);
        setLoggedIn(true); // definir loggedIn como true após o login bem sucedido
      } else {
        setErrorMessage(data.message || 'Ocorreu um erro ao processar sua solicitação.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleSignup = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post(`${URL}users/`, { email, password });
      const data = response.data;
      if (response.status === 200) {
        onSubmit(data);
        setLoggedIn(true); // definir loggedIn como true após o registro bem sucedido
      } else {
        setErrorMessage(data.message || 'Ocorreu um erro ao processar sua solicitação.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  // renderizar o componente Navigate com base no valor do estado loggedIn
  if (loggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
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
