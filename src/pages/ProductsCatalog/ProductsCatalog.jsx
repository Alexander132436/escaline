// pages/ProductsCatalog.jsx (самый простой и понятный)
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './ProductsCatalog.css';

const ProductsCatalog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const categories = [
        { id: 'wire', name: 'Проволока', icon: '⚡' },
        { id: 'tape', name: 'Лента', icon: '📏' },
        { id: 'rod', name: 'Пруток', icon: '🔩' },
    ];

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        // Определяем активную категорию по текущему пути
        const path = location.pathname;
        if (path === '/produktsiya' || path === '/produktsiya/') {
            setActiveCategory(null);
        } else if (path.includes('/wire')) {
            setActiveCategory('wire');
        } else if (path.includes('/tape')) {
            setActiveCategory('tape');
        } else if (path.includes('/rod')) {
            setActiveCategory('rod');
        }
    }, [location.pathname]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        navigate(`/produktsiya/${categoryId}`);
    };

    return (
        <div className="catalog-page products-page">
            <div className="catalog-header">
                <h1>Продукция</h1>
            </div>

            <div className="catalog-content">
                <aside className="categories-sidebar">
                    <h3>Виды продукции</h3>
                    <ul className="categories-list">
                        <li 
                            className={`category-item ${!activeCategory ? 'active' : ''}`}
                            onClick={() => navigate('/produktsiya')}
                        >
                            <span className="category-icon">📦</span>
                            <span className="category-name">Все продукты</span>
                        </li>
                        {categories.map(category => (
                            <li 
                                key={category.id}
                                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                <section className="products-content">
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default ProductsCatalog;