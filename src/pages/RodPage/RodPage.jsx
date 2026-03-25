// pages/RodPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RodPage.css';

const RodPage = () => {
    const navigate = useNavigate();
    
    const rodProducts = [
        {
            id: 7,
            name: 'Пруток 12Х18Н10Т',
            grade: '12Х18Н10Т',
            description: 'Коррозионностойкий пруток для машиностроения',
            properties: 'Диаметр: 6-100 мм, Длина: 2-6 м',
            application: 'Детали машин, крепеж, арматура'
        },
        {
            id: 8,
            name: 'Пруток 38ХМЮА',
            grade: '38ХМЮА',
            description: 'Жаропрочный пруток для высоконагруженных деталей',
            properties: 'Диаметр: 10-80 мм, Термообработка: закалка+отпуск',
            application: 'Валы, оси, шестерни'
        },
        {
            id: 9,
            name: 'Пруток 40ХН',
            grade: '40ХН',
            description: 'Конструкционный пруток повышенной прочности',
            properties: 'Диаметр: 8-120 мм, Предел прочности: до 1200 МПа',
            application: 'Ответственные детали машин'
        }
    ];

    return (
        <div className="product-page">
            <div className="product-page-header">
                <h2>Пруток</h2>
            </div>
            
            <p className="category-description">
                Прутки из прецизионных сплавов различных диаметров. Применяются в машиностроении, 
                приборостроении и электротехнике.
            </p>
            
            <div className="products-list">
                {rodProducts.map(product => (
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
                            onClick={() => navigate(`/produktsiya/rod/${product.id}`)}
                        >
                            Подробнее →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RodPage;