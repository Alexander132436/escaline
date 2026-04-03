// pages/Home.jsx
import React from 'react';
import mainImage from '../../images/image/main.jpg'
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero секция с фоновым изображением */}
            <div className="hero-section">
                <div className="hero-background">
                    <img 
                        src={mainImage}
                        alt="Завод прецизионных сплавов"
                        className="hero-bg-image"
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Компания <span className="highlight">«Эскалайн»</span>
                        </h1>
                        <p className="hero-description">
                            10-й год успешно работает в области поставок качественных сталей. 
                            Мы являемся одним из основных поставщиков продукции жаропрочных никелевых, 
                            прецизионных, тугоплавких и др. сплавов в широком марочном и размерном 
                            сортаменте – от проволоки и кругов, до листов и труб.
                        </p>
                        <p className="hero-description">
                            Основные отрасли потребителей нашей продукции — это приборостроительные заводы, 
                            машиностроение, авиакосмический комплекс, ВПК и предприятия энергетического комплекса РФ.
                        </p>
                    </div>
                </div>
            </div>

            {/* Блок с преимуществами */}
                <div className="advantages-section">
                    <div className="advantages-container">
                        <h2 className="section-title">Наши преимущества</h2>
                        <div className="advantages-grid">
                            <div className="advantage-card">
                                <div className="advantage-icon">🤝</div>
                                <h3>Гибкость сотрудничества</h3>
                                <p>Индивидуальный подход к каждому клиенту, гибкие условия поставки</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">⭐</div>
                                <h3>Уникальность ассортимента</h3>
                                <p>Широкий марочный и размерный сортамент продукции</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">✅</div>
                                <h3>Качество продукции и сервиса</h3>
                                <p>Соответствие ГОСТ стандартам</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">🎯</div>
                                <h3>Выполнение обязательств</h3>
                                <p>Строгое соблюдение сроков и условий договоров</p>
                            </div>
                        </div>
                    </div>
                </div>   
        </div>
    );
};

export default Home;