// Navigation.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import productsCategories from "../../../data/productsCategories.js";
import alloysCategories from "../../../data/alloysCategories.js";
import "./Navigation.css";

export default function Navigation() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleCategoryClick = () => {
        setOpenDropdown(null);
    };

    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                <ul className="nav-menu">
                    <li>
                        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                            ГЛАВНАЯ
                        </Link>
                    </li>

                    {/* Дропдаун для продукции */}
                    <li
                        className={`dropdown-container ${isActive('/produktsiya') ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => setOpenDropdown("products")}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <Link
                            to="/produktsiya"
                            className={`dropdown-trigger ${isActive('/produktsiya') ? 'active' : ''}`}
                            aria-expanded={openDropdown === "products"}
                        >
                            ПРОДУКЦИЯ ▼
                        </Link>

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
                        onMouseEnter={() => setOpenDropdown("alloys")}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <Link
                            to="/splavi"
                            className={`dropdown-trigger ${isActive('/splavi') ? 'active' : ''}`}
                            aria-expanded={openDropdown === "alloys"}
                        >
                            СПЛАВЫ ▼
                        </Link>

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
                        <Link to="/application" className={isActive('/application') ? 'active' : ''}>
                            ПРИМЕНЕНИЕ
                        </Link>
                    </li>

                    <li>
                        <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>
                            КОНТАКТЫ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}