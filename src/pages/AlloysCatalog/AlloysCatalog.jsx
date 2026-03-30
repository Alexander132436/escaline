// pages/AlloysCatalog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getAlloysByCategory, getAlloysData } from '../../data/productData';
import './AlloysCatalog.css';

const AlloysCatalog = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    
    const [selectedCategory, setSelectedCategory] = useState(categoryId || 'high-resistance');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentAlloys, setCurrentAlloys] = useState([]);

    useEffect(() => {
        if (categoryId) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory('high-resistance');
        }
    }, [categoryId]);

    useEffect(() => {
        const alloys = getAlloysByCategory(selectedCategory);
        setCurrentAlloys(alloys);
    }, [selectedCategory]);

    const filteredAlloys = currentAlloys.filter(alloy => 
        alloy && (
            alloy.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alloy.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (alloy.properties && alloy.properties.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    );

    const categories = [
        { id: 'high-resistance', name: 'С высоким электрическим сопротивлением', count: getAlloysData['high-resistance']?.length || 0 },
        { id: 'welding-materials', name: 'Стали и сплавы для сварки', count: getAlloysData['welding-materials']?.length || 0 },
        { id: 'soft-magnetic', name: 'Прецизионные магнитно-мягкие', count: getAlloysData['soft-magnetic']?.length || 0 },
        { id: 'high-induction', name: 'Магнитно-мягкие с высокой магнитной индукцией', count: getAlloysData['high-induction']?.length || 0 },
        { id: 'hard-magnetic', name: 'Прецизионные магнитотвердые', count: getAlloysData['hard-magnetic']?.length || 0 },
        { id: 'elastic', name: 'Для упругих элементов', count: getAlloysData['elastic']?.length || 0 },
        { id: 'tclr', name: 'С заданным ТКЛР', count: getAlloysData['tclr']?.length || 0 },
        { id: 'heat-resistant-alloys', name: 'Жаропрочные сплавы', count: getAlloysData['heat-resistant-alloys']?.length || 0 },
        { id: 'corrosion-resistant', name: 'Стали специальные коррозионностойкие', count: getAlloysData['corrosion-resistant']?.length || 0 },
    ];

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        navigate(`/splavi/${categoryId}`);
        setSearchTerm('');
    };

    const currentCategoryName = categories.find(c => c.id === selectedCategory)?.name || 'Каталог сплавов';

    return (
        <div className="catalog-page">
            <div className="catalog-header">
                <h1>{currentCategoryName}</h1>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Поиск по сплавам..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="clear-search">
                            ✕
                        </button>
                    )}
                </div>
            </div>


            <div className="catalog-content">
                <aside className="categories-sidebar">
                    <h3>Категории сплавов</h3>
                    <ul className="categories-list">
                        {categories.map(category => (
                            <li 
                                key={category.id}
                                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(category.id)}
                            >
                                <span className="category-name">{category.name}</span>
                                <span className="category-count">{category.count}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                <section className="products-grid">
                    {filteredAlloys.length > 0 ? (
                        filteredAlloys.map(alloy => (
                            <ProductCard 
                                key={alloy.id} 
                                product={{...alloy, category: selectedCategory}} 
                                type="alloy"
                            />
                        ))
                    ) : (
                        <div className="no-products">
                            {searchTerm ? (
                                <>
                                    <p>По запросу "{searchTerm}" ничего не найдено</p>
                                    <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                                        Очистить поиск
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>В этой категории пока нет сплавов</p>
                                    <p className="coming-soon">Скоро добавятся новые материалы!</p>
                                </>
                            )}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default AlloysCatalog;