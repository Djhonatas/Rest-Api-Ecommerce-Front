import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // verifica se o e-mail já está cadastrado
    const response = await fetch(`/api/verifyEmail?email=${email}`);
    const data = await response.json();
    if (data.exists) {
      setMessage('E-mail já cadastrado!');
    } else {
      // realiza o cadastro do usuário
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Usuário cadastrado com sucesso!');
      }
    }
  };

  const handleBackButtonClick = () => {
    navigate.push('/');
  };

  return (
    <div className='signup-container'>
      <h2>Cadastro</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <li className="">
        <Link to="/" className="back">
          Voltar
        </Link>
      </li>
    </div>
  );
}

export default Signup;
