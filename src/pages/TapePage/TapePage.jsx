// pages/TapePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Tape from '../../images/image/Tape.jpg'
import './TapePage.css';

const TapePage = () => {
    // Данные для таблицы форм и размеров
    const formsAndSizesData = [
        {
            form: 'Лента(толщина)',
            sizes: {
                from: '0.02',
                to: '2.5'
            },
        },
        {
            form: 'Лента(ширина)',
            sizes: {
                from: '1.0',
                to: '250'
            },
        }
    ];

    // Данные для таблицы сплавов с группировкой
    const alloysGroupsData = [
        {
            group: 'Сплавы с высоким электрическим сопротивлением',
            grades: [
                { name: 'Х20Н80(нихром)', link: '/splavi/high-resistance/1' },
                { name: 'X20Н80-Н(нихром)', link: '/splavi/high-resistance/2' },
                { name: 'Х15Н60(нихром)', link: '/splavi/high-resistance/3' }
            ]
        },
        {
            group: 'Прецизионные магнитно-мягкие сплавы',
            grades: [
                { name: '36КНМ', link: '/splavi/soft-magnetic/17' },
                { name: '50Н', link: '/splavi/soft-magnetic/18' },
                { name: '50НХС', link: '/splavi/soft-magnetic/19' },
                { name: '76НХД', link: '/splavi/soft-magnetic/20' },
                { name: '79НМ', link: '/splavi/soft-magnetic/21' },
                { name: '80НХС', link: '/splavi/soft-magnetic/22' },
                { name: '81НМА', link: '/splavi/soft-magnetic/23' },
            ]
        },
        {
            group: 'Магнитно-мягкие с высокой магнитной индукцией',
            grades: [
                { name: '27КХ', link: '/splavi/high-induction/24' },
                { name: '49КФ', link: '/splavi/high-induction/25' }
                
            ]
        },
        {
            group: 'Сплавы прецизионные магнитотвердые',
            grades: [
                { name: '52К11Ф', link: '/splavi/hard-magnetic/26' },
            ]
        },
        {
            group: 'Для упругих элементов',
            grades: [
                { name: '36НХТЮ', link: '/splavi/elastic/27' },
                { name: '40КХНМ', link: '/splavi/elastic/28' },
                { name: '42НХТЮ', link: '/splavi/elastic/29' }
            ]
        },
        {
            group: 'С заданным ТКЛР',
            grades: [
                { name: '29НК', link: '/splavi/tclr/30' },
                { name: '32НКД', link: '/splavi/tclr/31' },
                { name: '36Н', link: '/splavi/tclr/32' },
                { name: '42Н', link: '/splavi/tclr/33' },
                { name: '52Н', link: '/splavi/tclr/34' },
            ]
        },
        
    ];

    // Типы обработки
    const processingTypes = [
        'с термической обработкой',
        'с термической обработкой и осветлением (в восстановительной среде водорода)'
    ];

    // Данные для таблицы упаковки (2 строки, 4 столбца)
    const packagingData = [
        { type: '2.5 - 5.0', weight: '20 - 100', diameter: '380 - 630', width: '8.0 - 65.0' },
        
    ];

    return (
        <div className="tape-page">
            {/* Картинка во всю ширину */}
            <div className="tape-hero">
                <img 
                    src={Tape} 
                    alt="Лента"
                    className="tape-hero-image"
                />
                <div className="tape-hero-overlay">
                    <div className="tape-hero-content">
                        <h1>Лента</h1>
                    </div>
                </div>
            </div>

            <div className="tape-content">
                <div className="tape-header">
                    <p className="tape-description">
                        Мы продаём как горячекатаную, так и холоднокатаную ленту.
                    </p>
                </div>

                {/* Таблица форм и размеров */}
                <div className="section">
                    <h2>Формы и размеры</h2>
                    <div className="forms-table-wrapper">
                        <table className="forms-table">
                            <thead>
                                <tr>
                                    <th rowSpan="2">Форма</th>
                                    <th colSpan="2">Размеры в мм</th>
                                </tr>
                                <tr>
                                    <th>от</th>
                                    <th>до</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formsAndSizesData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="form-name">{item.form}</td>
                                        <td className="form-size-from">{item.sizes.from}</td>
                                        <td className="form-size-to">{item.sizes.to}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Тип обработки */}
                <div className="section">
                    <h2>Тип обработки</h2>
                    <ul className="styled-list processing-list">
                        {processingTypes.map((type, index) => (
                            <li key={index}>{type}</li>
                        ))}
                    </ul>
                </div>

                {/* Таблица сплавов с группировкой */}
                <div className="section">
                    <h2>Сплавы для производства ленты</h2>
                    <div className="alloys-table-wrapper">
                        <table className="alloys-table">
                            <thead>
                                <tr>
                                    <th>Группа сплавов</th>
                                    <th>Марки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alloysGroupsData.map((group, index) => (
                                    <tr key={index}>
                                        <td className="group-name">{group.group}</td>
                                        <td className="grades-list">
                                            <div className="grades-container">
                                                {group.grades.map((grade, idx) => (
                                                    <Link 
                                                        key={idx}
                                                        to={grade.link}
                                                        className="grade-link"
                                                    >
                                                        {grade.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Таблица упаковки */}
                <div className="section">
                    <h2>Упаковка</h2>
                    <div className="packaging-table-wrapper">
                        <table className="packaging-table">
                            <thead>
                                <tr>
                                    <th>Толщина, мм</th>
                                    <th>Ширина, мм</th>
                                    <th>Диаметр мотка, мм</th>
                                    <th>Стандартный вес, кг</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packagingData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="packaging-type">{item.type}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.diameter}</td>
                                        <td>{item.width}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TapePage;