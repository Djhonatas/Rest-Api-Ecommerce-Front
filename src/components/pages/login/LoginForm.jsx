import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../../ErrorMessage';
import { URL } from '../../config/Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFormSubmit = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (!isEmailValid(email)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    try {
      const endpoint = 'users/login';
      const response = await axios.post(`${URL}${endpoint}`, { email, password });
      const data = response.data;

      if (response.status === 200) {
        console.log({ data })
        //onSubmit(data);
        navigate('/home');
      } else {
        setErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleEmailInputChange = (event) => setEmail(event.target.value);

  return (
    <div className="login-container">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmailInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <button type="button" onClick={handleFormSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
