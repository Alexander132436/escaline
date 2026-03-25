// components/Breadcrumbs/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const getBreadcrumbName = (path, index, allPaths) => {
        const routesMap = {
            'produktsiya': 'Продукция',
            'splavi': 'Сплавы',
            'application': 'Применение',
            'contacts': 'Контакты',
            'wire': 'Проволока',
            'tape': 'Лента',
            'rod': 'Пруток',
            'high-resistance': 'С высоким электросопротивлением',
            'welding-materials': 'Стали и сплавы для сварки',
            'soft-magnetic': 'Прецизионные магнитно-мягкие',
            'high-induction': 'Магнитно-мягкие с высокой магнитной индукцией',
            'hard-magnetic': 'Прецизионные магнитотвердые',
            'elastic': 'Для упругих элементов',
            'tclr': 'С заданным ТКЛР',
            'heat-resistant-alloys': 'Жаропрочные сплавы',
            'corrosion-resistant': 'Стали специальные коррозионностойкие',
        };

        const isAlloyId = /^\d+$/.test(path) && index === allPaths.length - 1;
        
        if (isAlloyId) {
            return `Сплав #${path}`;
        }

        return routesMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
    };

    if (pathnames.length === 0) {
        return null;
    }

    return (
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <div className="breadcrumbs-container">
                <ol className="breadcrumbs-list">
                    <li className="breadcrumb-item">
                        <Link to="/" className="breadcrumb-link">
                            Главная
                        </Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const breadcrumbName = getBreadcrumbName(name, index, pathnames);

                        return (
                            <li key={routeTo} className="breadcrumb-item">
                                <span className="breadcrumb-separator">/</span>
                                {isLast ? (
                                    <span className="breadcrumb-current">{breadcrumbName}</span>
                                ) : (
                                    <Link to={routeTo} className="breadcrumb-link">
                                        {breadcrumbName}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;