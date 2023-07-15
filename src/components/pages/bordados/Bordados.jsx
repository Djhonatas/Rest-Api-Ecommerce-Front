import React, { useState } from 'react';
import './Bordados.css';
import Navbar from '../../navbar/Navbar';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Bordados() {
  const [activeRoute, setActiveRoute] = useState('Bordados');
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  const handleButtonClick = (route) => {
    setActiveRoute(route);
  }

  const handleFileInputChange = (event, setFieldValue) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && /\.(png|jpeg|jpg)$/.test(selectedFile.name)) {
      setFieldValue('image', selectedFile);
      setImageFile(selectedFile);
    } else {
      setFieldValue('image', null);
      setImageFile(null);
    }
  }

  const handleImageNameInputChange = (event, setFieldValue) => {
    setImageName(event.target.value);
    setFieldValue('name', event.target.value);
  }

  const handleImageDescriptionInputChange = (event, setFieldValue) => {
    let inputValue = event.target.value.replace(/\D/g, ''); // remove todos os caracteres que não sejam números
    inputValue = inputValue.replace(/(\d{5})/g, '$1-'); // adiciona o separador "-" a cada 5 números
    setImageDescription(inputValue);
    setFieldValue('description', inputValue);
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const { name, description, image } = values;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    try {
      const response = await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('Produto inserido com sucesso!');
      resetForm();
      setImageFile(null);
      setImageName('');
      setImageDescription('');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao inserir o produto.');
    }
    setSubmitting(false);
  }

  return (
    <div>
      <div>
        <h1>ÁGUIA BORDADOS</h1>
        <p>Encontre aqui os melhores produtos de empresas e linhas</p>
      </div>
      <Navbar activeRoute={activeRoute} handleButtonClick={handleButtonClick} />
      <div className="form-wrapper">
        <Formik
          initialValues={{
            name: '',
            description: '',
            image: null
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Campo obrigatório';
            }
            if (!values.description) {
              errors.description = 'Campo obrigatório';
            }
            if (!values.image) {
              errors.image = 'Campo obrigatório';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Nome do produto:</label>
                <Field type="text" name="name" onChange={(event) => handleImageNameInputChange(event, setFieldValue)} value={imageName} />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição do produto:</label>
                <Field type="text" name="description" onChange={(event) => handleImageDescriptionInputChange(event, setFieldValue)} value={imageDescription} />
                <ErrorMessage name="description" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="image">Imagem:</label>
                <input type="file" name="image" onChange={(event) => handleFileInputChange(event, setFieldValue)} accept=".png,.jpeg,.jpg" />
                <ErrorMessage name="image" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>Enviar</button>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
}
export default Bordados;
