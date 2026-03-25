// pages/ProductsOverview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsOverview.css';

const ProductsOverview = () => {
    const navigate = useNavigate();
    
    const categories = [
        { id: 'wire', name: 'Проволока', icon: '⚡', description: 'Высококачественная проволока из прецизионных сплавов', color: '#dc2626' },
        { id: 'tape', name: 'Лента', icon: '📏', description: 'Прецизионная лента различной ширины и толщины', color: '#ef4444' },
        { id: 'rod', name: 'Пруток', icon: '🔩', description: 'Прутки из коррозионностойких и жаропрочных сплавов', color: '#f97316' },
    ];

    return (
        <div className="products-overview">
            <h2>Наша продукция</h2>
            <p className="overview-description">
                Мы предлагаем широкий ассортимент продукции из прецизионных сплавов 
                для различных отраслей промышленности
            </p>
            
            <div className="categories-grid">
                {categories.map(category => (
                    <div 
                        key={category.id}
                        className="category-card"
                        onClick={() => navigate(`/produktsiya/${category.id}`)}
                        style={{ borderTopColor: category.color }}
                    >
                        <div className="category-icon-large">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <button className="category-button">Подробнее →</button>
                    </div>
                ))}
            </div>
            
            <div className="info-section">
                <h3>Почему выбирают нас?</h3>
                <ul>
                    <li>✓ Высокое качество материалов</li>
                    <li>✓ Соответствие ГОСТ и международным стандартам</li>
                    <li>✓ Широкий типоразмерный ряд</li>
                    <li>✓ Гибкие условия поставки</li>
                    <li>✓ Техническая поддержка специалистов</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductsOverview;