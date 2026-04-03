// pages/ProductsOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Prod from '../../images/image/Products.jpg';
import wireIcon from '../../images/image/wire_icon.jpg';
import tapeIcon from '../../images/image/tape_icon.jpg';
import barIcon from '../../images/image/bar_icon.jpg'
import './ProductsOverview.css';

const ProductsOverview = () => {
    // Данные для проволоки (2 строки)
    const wireData = [
        { 
            diameter: '0,1 - 8,0',
            packaging: 'Катушки К63, К100, К125, К160, К200, К250, К300',
            weight: '0.5 - 16',
            finish: 'светлоотожженая, оксидированная; горячекатаная, холоднотянутая'
        },
        { 
            diameter: '0,1 - 8,0',
            packaging: 'мотки (бухты)',
            weight: '20 - 130',
            finish: 'светлоотожженая, оксидированная; горячекатаная, холоднотянутая'
        }
    ];

    // Данные для ленты
    const tapeData = [
        {
            thickness: '2.0 - 4.0',
            width: 'до 100',
            weight: '5.0 - 40.0',
            finish: 'горячекатаная, холоднокатаная'
        }
    ];

    // Данные для прутка
    const rodData = [
        {
            diameter: '4.0 - 60.0',
            length: '500 - 6000',
            weight: 'до 200',
            finish: 'горячекатаный, холоднотянутый, обточенный, шлифованный'
        }
    ];

    // Ссылки на сплавы
    const alloyLinks = [
        { name: 'С высоким электросопротивлением', path: '/splavi/high-resistance' },
        { name: 'Стали и сплавы для сварки', path: '/splavi/welding-materials' },
        { name: 'Прецизионные магнитно-мягкие', path: '/splavi/soft-magnetic' },
        { name: 'Магнитно-мягкие с высокой магнитной индукцией', path: '/splavi/high-induction' },
        { name: 'Прецизионные магнитотвердые', path: '/splavi/hard-magnetic' },
        { name: 'Для упругих компонентов', path: '/splavi/elastic' },
        { name: 'С заданным ТКЛР', path: '/splavi/tclr' },
        { name: 'Жаропрочные', path: '/splavi/heat-resistant-alloys' },
        { name: 'Стали специальные коррозионностойкие', path: '/splavi/corrosion-resistant' }
    ];

    return (
        <div className="overview-page">
            {/* Картинка во всю ширину */}
            <div className="overview-hero">
                <img 
                    src={Prod} 
                    alt="Продукция"
                    className="overview-hero-image"
                />
                <div className="overview-hero-overlay">
                    <div className="overview-hero-content">
                        <h1>Продукция</h1>
                    </div>
                </div>
            </div>

            <div className="overview-content">
                {/* Описание */}
                <div className="overview-header">
                    <p className="overview-description">
                        Наша продукция отличается стабильностью характеристик и соответствует самым высоким стандартам качества.
                    </p>
                </div>

                {/* Информация о продукции */}
                <div className="info-box">
                    <p className="info-text">
                        Эскалайн предлагает к поставке металлопродукцию в виде: <strong>проволока, лента, пруток</strong>. 
                        Стандартный размерный ряд по каждому виду продукции указан ниже. Возможно изготовление 
                        иных размеров, в соответствии с требованиями клиента.
                    </p>
                </div>

                {/* Таблица для проволоки */}
                <div className="section">
                    <h2>Проволока</h2>
                    <div className="product-table-wrapper">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Вид продукции</th>
                                    <th>Диаметр, мм</th>
                                    <th>Вид упаковки</th>
                                    <th>Вес, кг</th>
                                    <th>Вид отделки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wireData.map((item, index) => (
                                    <tr key={index}>
                                        {index === 0 && (
                                            <td rowSpan={wireData.length} className="product-image-cell">
                                                <img 
                                                    src={wireIcon} 
                                                    alt="Проволока"
                                                    className="product-image"
                                                />
                                                <div className="product-name">Проволока</div>
                                            </td>
                                        )}
                                        <td>{item.diameter}</td>
                                        <td>{item.packaging}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.finish}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Таблица для ленты */}
                <div className="section">
                    <h2>Лента</h2>
                    <div className="product-table-wrapper">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Вид продукции</th>
                                    <th>Толщина, мм</th>
                                    <th>Ширина, мм</th>
                                    <th>Вес, кг</th>
                                    <th>Вид отделки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tapeData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="product-image-cell">
                                            <img 
                                                src={tapeIcon}
                                                alt="Лента"
                                                className="product-image"
                                            />
                                            <div className="product-name">Лента</div>
                                        </td>
                                        <td>{item.thickness}</td>
                                        <td>{item.width}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.finish}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Таблица для прутка */}
                <div className="section">
                    <h2>Пруток</h2>
                    <div className="product-table-wrapper">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Вид продукции</th>
                                    <th>Диаметр, мм</th>
                                    <th>Длина, мм</th>
                                    <th>Вес, кг</th>
                                    <th>Вид отделки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rodData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="product-image-cell">
                                            <img 
                                                src={barIcon}
                                                alt="Пруток"
                                                className="product-image"
                                            />
                                            <div className="product-name">Пруток</div>
                                        </td>
                                        <td>{item.diameter}</td>
                                        <td>{item.length}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.finish}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Информация о стандартах */}
                <div className="standards-box">
                    <p className="standards-text">
                        Продукция изготавливается в соответствии с <strong>ГОСТ, ТУ</strong>, 
                        также может быть изготовлена с зауженным содержанием определенных химических элементов.
                    </p>
                </div>

                {/* Ссылки на сплавы */}
                <div className="section">
                    <h2>Продукция изготавливается из различных сталей и сплавов на основе никеля:</h2>
                    <div className="alloys-links-grid">
                        {alloyLinks.map((alloy, index) => (
                            <Link key={index} to={alloy.path} className="alloy-link">
                                {alloy.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsOverview;