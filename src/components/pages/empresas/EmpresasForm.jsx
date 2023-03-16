import React from 'react';
import { Link } from 'react-router-dom';
import './EmpresasForm.css';

function EmpresasForm() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/home" className="navbar-button navbar-button--bordered">Home</Link>
        <div className="navbar-buttons">
          <Link to="/bordados" className="navbar-button navbar-button--bordered">Bordados</Link>
          <Link to="/linhas" className="navbar-button navbar-button--bordered">Linhas</Link>
          <Link to="/empresas" className="navbar-button navbar-button--bordered">Empresas</Link>
        </div>
      </nav>

      <form className='form'>
        <label htmlFor="nome-empresa">Nome da Empresa:</label>
        <input type="text" id="nome-empresa" name="nome-empresa" required />
        <label htmlFor="logradouro">Logradouro:</label>
        <input type="text" id="logradouro" name="logradouro" required />
        <label htmlFor="numero">Número:</label>
        <input type="number" id="numero" name="numero" required />
        <label htmlFor="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" required />
        <label htmlFor="cep">CEP:</label>
        <input type="number" id="cep" name="cep" required />
        <label htmlFor="telefone">Telefone:</label>
        <input type="number" id="telefone" name="telefone" required />
        <button type="submit">Enviar</button>
      </form>


    </div>
  );
}

export default EmpresasForm;
