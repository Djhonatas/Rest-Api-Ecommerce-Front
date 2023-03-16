import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../../ErrorMessage';
import { URL } from '../../config/Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onSubmit, isSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const endpoint = isSignup ? 'users/' : 'users/login';
      const response = await axios.post(`${URL}${endpoint}`, { email, password });
      const data = response.data;
      onSubmit(data);

      if (isSignup && response.status === 404) {
        navigate.push('/signup');
        return;
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleEmailInputChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  return (
    <div className="login-container">

      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmailInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <button type="button" onClick={handleSubmit}>{isSignup ? 'Signup' : 'Login'}</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSignup: PropTypes.bool
};

Login.defaultProps = {
  isSignup: false
};

export default Login;
