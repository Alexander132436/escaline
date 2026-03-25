// pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../../data/productData';
import './ProductDetail.css';

const ProductDetail = () => {
    const { categoryId, productId } = useParams();
    const navigate = useNavigate();
    
    const products = getProductsByCategory(categoryId);
    const product = products.find(p => p.id === parseInt(productId));
    
    if (!product) {
        return <div className="error-page">Продукт не найден</div>;
    }
    
    return (
        <div className="product-detail">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Назад
            </button>
            
            <div className="detail-container">
                <div className="detail-header">
                    <h1>{product.name}</h1>
                    {product.grade && <span className="grade-badge">{product.grade}</span>}
                </div>
                
                <div className="detail-section">
                    <h2>Описание</h2>
                    <p>{product.description}</p>
                </div>
                
                <div className="detail-section">
                    <h2>Технические характеристики</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <span className="spec-label">Свойства:</span>
                            <span className="spec-value">{product.properties}</span>
                        </div>
                        {product.composition && (
                            <div className="spec-item">
                                <span className="spec-label">Химический состав:</span>
                                <span className="spec-value">{product.composition}</span>
                            </div>
                        )}
                        <div className="spec-item">
                            <span className="spec-label">Применение:</span>
                            <span className="spec-value">{product.application}</span>
                        </div>
                        {product.delivery && (
                            <div className="spec-item">
                                <span className="spec-label">Формы поставки:</span>
                                <span className="spec-value">{product.delivery}</span>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="detail-section">
                    <h2>Преимущества</h2>
                    <ul className="advantages-list">
                        <li>Высокое качество материалов</li>
                        <li>Соответствие ГОСТ и международным стандартам</li>
                        <li>Широкий типоразмерный ряд</li>
                        <li>Гибкие условия поставки</li>
                        <li>Техническая поддержка специалистов</li>
                    </ul>
                </div>
                
                <div className="contact-info">
                    <h3>Нужна консультация?</h3>
                    <p>Свяжитесь с нашими специалистами для получения подробной информации</p>
                    <button className="contact-button" onClick={() => navigate('/contacts')}>
                        Связаться с нами
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;