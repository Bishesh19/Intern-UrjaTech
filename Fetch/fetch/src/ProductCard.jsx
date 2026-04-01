import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card group">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
        <span className="category-badge">{product.category}</span>
        <div className="overlay">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
      <div className="product-content">
        <h3 className="product-title" title={product.title}>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="price-tag">${product.price.toFixed(2)}</div>
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star-icon">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="rating-value">{product.rating?.rate}</span>
            <span className="rating-count">({product.rating?.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
