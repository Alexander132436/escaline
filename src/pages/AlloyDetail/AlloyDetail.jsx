// pages/AlloyDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlloysByCategory } from '../../data/productData';
import './AlloyDetail.css';

const AlloyDetail = () => {
    const { categoryId, alloyId } = useParams();
    const navigate = useNavigate();
    
    const alloys = getAlloysByCategory(categoryId);
    const alloy = alloys.find(a => a.id === parseInt(alloyId));
    
    if (!alloy) {
        return (
            <div className="error-page">
                <div className="error-container">
                    <h1>Сплав не найден</h1>
                    <p>К сожалению, запрашиваемый сплав отсутствует в каталоге</p>
                    <button onClick={() => navigate('/splavi')} className="error-button">
                        Вернуться в каталог
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="alloy-detail">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Назад к списку
            </button>
            
            <div className="detail-container">
                <div className="detail-header">
                    <div>
                        <h1>{alloy.name}</h1>
                        <p className="alloy-subtitle">{alloy.description}</p>
                    </div>
                    <div className="badge-container">
                        <span className="grade-badge">Марка: {alloy.grade || alloy.name}</span>
                    </div>
                </div>
                
                <div className="detail-grid">
                    <div className="detail-section">
                        <h2>
                            <span className="section-icon">📄</span>
                            Стандарты
                        </h2>
                        <div className="composition-card">
                            <p>{alloy.standart || 'Информация уточняется'}</p>
                        </div>
                    </div>


                    <div className="detail-section">
                        <h2>
                            <span className="section-icon">📊</span>
                            Химический состав
                        </h2>
                        <div className="composition-card">
                            <p>{alloy.composition || 'Информация уточняется'}</p>
                        </div>
                    </div>
                    
                    <div className="detail-section">
                        <h2>
                            <span className="section-icon">⚙️</span>
                            Физико-механические свойства
                        </h2>
                        <div className="properties-grid">
                            {alloy.properties && alloy.properties.split(',').map((prop, index) => (
                                <div key={index} className="property-card">
                                    <span className="property-dot"></span>
                                    <span>{prop.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="detail-section">
                        <h2>
                            <span className="section-icon">🏭</span>
                            Области применения
                        </h2>
                        <div className="application-card">
                            <p>{alloy.application}</p>
                        </div>
                    </div>
                    
                    {alloy.delivery && (
                        <div className="detail-section">
                            <h2>
                                <span className="section-icon">📦</span>
                                Формы поставки
                            </h2>
                            <div className="delivery-card">
                                <p>{alloy.delivery}</p>
                            </div>
                        </div>
                    )}
                </div>
                

                <div className="contact-section">
                    <h3>Нужна помощь в выборе?</h3>
                    <p>Наши специалисты помогут подобрать оптимальный сплав для ваших задач</p>
                    <div className="contact-buttons">
                        <button 
                            className="contact-button primary"
                            onClick={() => navigate('/contacts')}
                        >
                            Связаться с нами
                        </button>
                    </div>
                </div>
                
                <div className="similar-alloys">
                    <h3>Похожие сплавы</h3>
                    <div className="similar-grid">
                        <div className="similar-card">
                            <h4>Х15Н60</h4>
                            
                            <button onClick={() => navigate('/splavi/high-resistance/2')}>
                                Подробнее →
                            </button>
                        </div>
                        <div className="similar-card">
                            <h4>Н80Х20Д</h4>
                            
                            <button onClick={() => navigate('/splavi/high-resistance/3')}>
                                Подробнее →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlloyDetail;