import React from 'react';


function ProductCard({ name, date, description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="date">Publicado em: {date}</p>
    </div>
  );
}

export default ProductCard;
