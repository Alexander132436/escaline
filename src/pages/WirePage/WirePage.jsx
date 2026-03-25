// pages/WirePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WirePage.css';

const WirePage = () => {
    const navigate = useNavigate();
    
    const wireProducts = [
        {
            id: 1,
            name: 'Проволока Х20Н80',
            grade: 'Х20Н80',
            description: 'Высоколегированная проволока для нагревательных элементов',
            properties: 'Диаметр: 0.1-8.0 мм, Рабочая температура: до 1200°C',
            application: 'Нагревательные элементы, резисторы, термопары'
        },
        {
            id: 2,
            name: 'Проволока Х15Н60',
            grade: 'Х15Н60',
            description: 'Никель-хромовая проволока для электронагревателей',
            properties: 'Диаметр: 0.1-8.0 мм, Рабочая температура: до 1000°C',
            application: 'Электронагреватели, реостаты'
        },
        {
            id: 3,
            name: 'Проволока Н80Х20Д',
            grade: 'Н80Х20Д',
            description: 'Проволока с повышенной жаростойкостью',
            properties: 'Диаметр: 0.2-6.0 мм, Рабочая температура: до 1100°C',
            application: 'Промышленные печи, термопары'
        },
        {
            id: 4,
            name: 'Проволока Св-08Г2С',
            grade: 'Св-08Г2С',
            description: 'Сварочная проволока для углеродистых сталей',
            properties: 'Диаметр: 0.8-4.0 мм',
            application: 'Сварка конструкций из углеродистых сталей'
        }
    ];

    return (
        <div className="product-page">
            <div className="product-page-header">
                <h2>Проволока</h2>
            </div>
            
            <p className="category-description">
                Проволока из прецизионных сплавов различного диаметра. Применяется в электротехнике, 
                приборостроении и других отраслях промышленности.
            </p>
            
            <div className="products-list">
                {wireProducts.map(product => (
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
                            onClick={() => navigate(`/produktsiya/wire/${product.id}`)}
                        >
                            Подробнее →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WirePage;