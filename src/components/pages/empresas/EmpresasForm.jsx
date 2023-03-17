import React from 'react';
import Navbar from '../../navbar/Navbar'; // Importa o componente Navbar
import '../../navbar/Navbar.css';
import Home from '../../home/Home'

function EmpresasForm() {
  return (
    <div>
      {/* <Home /> */}
      <div>
        <h1>ÁGUIA BORDADOS</h1>
        <p>Encontre aqui os melhores produtos de empresas e linhas</p>
      </div>
      <Navbar /> {/* Renderiza o componente Navbar aqui */}
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
