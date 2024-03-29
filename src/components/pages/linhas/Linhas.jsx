import React, { useState } from 'react';
import Navbar from '../../navbar/Navbar'; // importando o componente Navbar
import '../../navbar/Navbar.css';

function Linha() {
  const [activeRoute, setActiveRoute] = useState('Bordados');
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  const handleButtonClick = (route) => {
    setActiveRoute(route);
  }

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && /\.(png|jpeg|jpg)$/.test(selectedFile.name)) {
      setImageFile(selectedFile);
    } else {
      setImageFile(null);
    }
  }

  const handleImageNameInputChange = (event) => {
    setImageName(event.target.value);
  }

  const handleImageDescriptionInputChange = (event) => {
    let inputValue = event.target.value.replace(/\D/g, ''); // remove todos os caracteres que não sejam números
    inputValue = inputValue.replace(/(\d{5})/g, '$1-'); // adiciona o separador "-" a cada 5 números
    setImageDescription(inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageFile && imageName && imageDescription) {
      // Aqui você pode fazer algo com os valores do arquivo de imagem, nome e descrição,
      // como enviá-los para o servidor ou salvá-los em algum estado global da aplicação.
    } else {
      alert('Por favor, preencha todos os campos do formulário e selecione uma imagem do tipo ".png", ".jpeg" ou ".jpg".');
    }
  }

  return (

    <div>
      <div>
        <h1>ÁGUIA BORDADOS</h1>
        <p>Encontre aqui os melhores produtos de empresas e linhas</p>
      </div>
      {/* <Home /> */}
      <Navbar /> {/* Renderizando o componente Navbar aqui */}

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Linha:
            <input type="file" accept=".png,.jpeg,.jpg" required onChange={handleFileInputChange} />
          </label>
          <label>
            Nome da linha:
            <input type="text" value={imageName} onChange={handleImageNameInputChange} required />
          </label>
          <label>
            Descrição da linha:
            <input type="text" value={imageDescription} onChange={handleImageDescriptionInputChange} required />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Linha;
