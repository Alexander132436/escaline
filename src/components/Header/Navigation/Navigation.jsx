// Navigation.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import productsCategories from "../../../data/productsCategories.js";
import alloysCategories from "../../../data/alloysCategories.js";
import "./Navigation.css";

export default function Navigation() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
            // Закрываем мобильное меню при клике вне его
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpenDropdown(null);
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isMobileMenuOpen]);

    // Закрываем меню при смене маршрута
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const handleCategoryClick = () => {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                {/* Бургер-кнопка для мобильных */}
                <button 
                    className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Десктопное меню */}
                <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`} ref={mobileMenuRef}>
                    <li>
                        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                            ГЛАВНАЯ
                        </Link>
                    </li>

                    {/* Дропдаун для продукции */}
                    <li
                        className={`dropdown-container ${isActive('/produktsiya') ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown("products")}
                        onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                    >
                        <div className="dropdown-trigger-wrapper">
                            <Link
                                to="/produktsiya"
                                className={`dropdown-trigger ${isActive('/produktsiya') ? 'active' : ''}`}
                                onClick={() => window.innerWidth <= 768 && setOpenDropdown(openDropdown === "products" ? null : "products")}
                            >
                                ПРОДУКЦИЯ
                            </Link>
                            <button 
                                className="dropdown-arrow"
                                onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                            >
                                ▼
                            </button>
                        </div>

                        {openDropdown === "products" && (
                            <ul className="dropdown-menu" ref={dropdownRef}>
                                {productsCategories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            className={`dropdown-link ${isActive(category.path) ? 'active' : ''}`}
                                            to={category.path}
                                            onClick={handleCategoryClick}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Дропдаун для сплавов */}
                    <li
                        className={`dropdown-container ${isActive('/splavi') ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown("alloys")}
                        onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                    >
                        <div className="dropdown-trigger-wrapper">
                            <Link
                                to="/splavi"
                                className={`dropdown-trigger ${isActive('/splavi') ? 'active' : ''}`}
                                onClick={() => window.innerWidth <= 768 && setOpenDropdown(openDropdown === "alloys" ? null : "alloys")}
                            >
                                СПЛАВЫ
                            </Link>
                            <button 
                                className="dropdown-arrow"
                                onClick={() => setOpenDropdown(openDropdown === "alloys" ? null : "alloys")}
                            >
                                ▼
                            </button>
                        </div>

                        {openDropdown === "alloys" && (
                            <ul className="dropdown-menu" ref={dropdownRef}>
                                {alloysCategories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            className={`dropdown-link ${isActive(category.path) ? 'active' : ''}`}
                                            to={category.path}
                                            onClick={handleCategoryClick}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="/application" className={isActive('/application') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                            ПРИМЕНЕНИЕ
                        </Link>
                    </li>

                    <li>
                        <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                            КОНТАКТЫ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}