import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import ProductCard from './ProductCard';
import './Home.css'

function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produto 1',
      date: '01/01/2022',
      description: 'Descrição do Produto 1',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Produto 2',
      date: '02/01/2022',
      description: 'Descrição do Produto 2',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Produto 3',
      date: '03/01/2022',
      description: 'Descrição do Produto 3',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      name: 'Produto 4',
      date: '03/01/2022',
      description: 'Descrição do Produto 4',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      name: 'Produto 5',
      date: '03/01/2022',
      description: 'Descrição do Produto 5',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 6,
      name: 'Produto 6',
      date: '03/01/2022',
      description: 'Descrição do Produto 6',
      image: 'https://via.placeholder.com/300x200',
    },
  ]);

  return (
    <div>
      <h1>ÁGUIA BORDADOS</h1>
      <p>Encontre aqui os melhores produtos de empresas e linhas</p>
      <NavBar />

      <h2>Bordados recentes</h2>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            date={product.date}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
