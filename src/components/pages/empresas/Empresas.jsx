import React, { useState } from "react";
import './Empresas.css'

const CompanyForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui vamos enviar os dados para um servidor ou armazená-los em um banco de dados
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          pattern="[0-9]{10,11}"
          maxLength="15"
          required
        />
      </div>
      <div>
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          pattern="[0-9]{8}"
          maxLength="9"
          required
        />
      </div>
      <div>
        <label htmlFor="street">Rua:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">Número:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          pattern="[0-9]*"
          required
        />
      </div>
      <div>
        <label htmlFor="neighborhood">Bairro:</label>
        <input
          type="text"
          id="neighborhood"
          value={neighborhood}
          onChange={(event) => setNeighborhood(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">Estado:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CompanyForm;
