// pages/Contacts.jsx
import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-page">
            <h1 className="contacts-title">Контакты</h1>
            
            <div className="contacts-container">
                {/* Блок с картой */}
                <div className="contacts-map">
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?ll=37.521349%2C55.654517&z=16&pt=37.521349,55.654517,pmrdl"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen
                        loading="lazy"
                        title="Карта офиса Эскалайн"
                    />
                </div>

                {/* Блок с контактной информацией */}
                <div className="contacts-info">
                    <div className="info-card">
                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">📍</span>
                            </div>
                            <div className="info-text">
                                <h3>Адрес</h3>
                                <p>Москва, Россия<br />ул. Бутлерова, д. 17Б, помещ. 60/11/2</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">📞</span>
                            </div>
                            <div className="info-text">
                                <h3>Телефон</h3>
                                <a href="tel:+74996820168" className="info-link">+7 (499) 682-01-68</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">✉️</span>
                            </div>
                            <div className="info-text">
                                <h3>E-mail</h3>
                                <a href="mailto:escaline1@gmail.com" className="info-link">escaline1@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">🕒</span>
                            </div>
                            <div className="info-text">
                                <h3>Режим работы</h3>
                                <p>Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;