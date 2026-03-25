// pages/TapePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TapePage.css';

const TapePage = () => {
    const navigate = useNavigate();
    
    const tapeProducts = [
        {
            id: 4,
            name: 'Лента 36НХТЮ',
            grade: '36НХТЮ',
            description: 'Прецизионная лента для упругих элементов',
            properties: 'Толщина: 0.05-2.0 мм, Ширина: 5-200 мм',
            application: 'Мембраны, пружины, термобиметаллы'
        },
        {
            id: 5,
            name: 'Лента 50Н',
            grade: '50Н',
            description: 'Магнитно-мягкая лента для трансформаторов',
            properties: 'Толщина: 0.1-1.5 мм, Магнитная проницаемость: высокая',
            application: 'Трансформаторы, дроссели, магнитные экраны'
        },
        {
            id: 6,
            name: 'Лента 80НХС',
            grade: '80НХС',
            description: 'Лента с высоким электросопротивлением',
            properties: 'Толщина: 0.1-1.0 мм, Удельное сопротивление: 1.3 Ом·мм²/м',
            application: 'Резисторы, нагревательные элементы'
        }
    ];

    return (
        <div className="product-page">
            <div className="product-page-header">
                <h2>Лента</h2>
            </div>
            
            <p className="category-description">
                Лента из прецизионных сплавов различной ширины и толщины. Используется для изготовления 
                термопар, резисторов и других компонентов.
            </p>
            
            <div className="products-list">
                {tapeProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <div className="product-item-header">
                            <h3>{product.name}</h3>
                            <span className="product-grade">{product.grade}</span>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <div className="product-properties">
                            <div className="property">
                                <strong>Свойства:</strong> {product.properties}
                            </div>
                            <div className="property">
                                <strong>Применение:</strong> {product.application}
                            </div>
                        </div>
                        <button 
                            className="details-button"
                            onClick={() => navigate(`/produktsiya/tape/${product.id}`)}
                        >
                            Подробнее →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TapePage;