// components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, type = 'alloy' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type === 'alloy') {
            navigate(`/splavi/${product.category}/${product.id}`);
        } else {
            navigate(`/produktsiya/${product.category}/${product.id}`);
        }
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="card-header">
                <h3 className="product-name">{product.name}</h3>
                {product.grade && <span className="product-grade">{product.grade}</span>}
            </div>
            
            <div className="card-content">
                <p className="product-description">{product.litleDescription}</p>
                
                <div className="product-properties">
                    <div className="property-item">
                        <span className="property-label">Свойства:</span>
                        {product.properties ? <span className="property-value">{product.properties}</span> : <span className="property-value">Сведения отсутствуют</span>}
                        
                    </div>
                    
                    {product.composition && (
                        <div className="property-item">
                            <span className="property-label">Состав:</span>
                            <span className="property-value">{product.composition}</span>
                        </div>
                    )}
                    
                    <div className="property-item">
                        <span className="property-label">Применение:</span>
                        <span className="property-value">{product.smallApplication}</span>
                    </div>
                    
                    {product.delivery && (
                        <div className="property-item">
                            <span className="property-label">Поставка:</span>
                            <span className="property-value">{product.delivery}</span>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="card-footer">
                <button className="details-button">Подробнее →</button>
            </div>
        </div>
    );
};

export default ProductCard;