import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import productsCategories from "../../../data/productsCategories.js";
import alloysCategories from "../../../data/alloysCategories.js";
import './Navigation.css'

export default function Navigation() {
    const [openDropdown, setOpenDropdown] = useState(null); // null, 'products', 'alloys'
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleCategoryClick = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="navigation">
            <ul className="nav-menu">
                <li>
                    <Link to='/' className="nav-link">ГЛАВНАЯ</Link>
                </li>

                {/* Дропдаун для продукции */}
                <li 
                    className="dropdown-container"
                    onMouseEnter={() => setOpenDropdown('products')}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <Link 
                        to='/catalog'
                        className="dropdown-trigger"
                        aria-expanded={openDropdown === 'products'}
                    >
                        ПРОДУКЦИЯ ▼
                    </Link>

                    {openDropdown === 'products' && (
                        <ul className="dropdown-menu" ref={dropdownRef}>
                            {productsCategories.map(category => (
                                <li key={category.id}>
                                    <Link
                                        className="dropdown-link"
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
                    className="dropdown-container"
                    onMouseEnter={() => setOpenDropdown('alloys')}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <Link 
                        to='/catalog'
                        className="dropdown-trigger"
                        aria-expanded={openDropdown === 'alloys'}
                    >
                        СПЛАВЫ ▼
                    </Link>

                    {openDropdown === 'alloys' && (
                        <ul className="dropdown-menu" ref={dropdownRef}>
                            {alloysCategories.map(category => (
                                <li key={category.id}>
                                    <Link
                                        className="dropdown-link"
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
                    <Link to='/application'>ПРИМЕНЕНИЕ</Link>
                </li>

                <li>
                    <Link to='/contacts'>КОНТАКТЫ</Link>
                </li>
            </ul>
        </nav>
    );
}