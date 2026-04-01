// pages/WirePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import wire from '../../images/image/wire-banner.jpg'
import './WirePage.css';

const WirePage = () => {
     // Данные для таблицы форм и размеров
    const formsAndSizesData = [
        { form: 'Проволока', size: 'Ø от 0.2 до 12.0 мм' }
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

        {
            group: 'Жаропрочные сплавы',
            grades: [
                { name: 'ХН78Т', link: '/splavi/heat-resistant-alloys/35' },
                { name: 'ХН77ТЮР', link: '/splavi/heat-resistant-alloys/36' },
                { name: 'ХН70Ю', link: '/splavi/heat-resistant-alloys/37' },
                { name: 'ХН65ВМТЮ', link: '/splavi/heat-resistant-alloys/38' },
                { name: 'ХН60ВТ', link: '/splavi/heat-resistant-alloys/39' },
                { name: 'ХН55ВМТКЮ', link: '/splavi/heat-resistant-alloys/40' },
                { name: 'ХН35ВТ', link: '/splavi/heat-resistant-alloys/41' },
                { name: 'ХН45Ю', link: '/splavi/heat-resistant-alloys/42' },
                { name: '20Х20Н14С2', link: '/splavi/heat-resistant-alloys/43' },
                { name: '20Х23Н18', link: '/splavi/heat-resistant-alloys/44' },
                { name: '20Х25Н20С2', link: '/splavi/heat-resistant-alloys/45' }
            ]
        },

        {
            group: 'Стали специальные коррозионностойкие',
            grades: [
                { name: '04Х19Н9', link: '/splavi/corrosion-resistant/46' },
                { name: '06ХН28МДТ', link: '/splavi/corrosion-resistant/47' },
                { name: '10Х17Н13М2Т', link: '/splavi/corrosion-resistant/51' },
                { name: '12Х18Н9', link: '/splavi/corrosion-resistant/52' }
                
            ]
        }
    ];

    // Типы обработки
    const processingTypes = [
        'с термической обработкой',
        'с термической обработкой и осветлением (в восстановительной среде водорода)'
    ];

    // Типы упаковки
    const packagingTypes = [
        'Проволока на катушках',
        'Проволока в мотках',
        'Проволока на кроненштоках'
    ];

    return (
        <div className="wire-page">
            {/* Картинка во всю ширину */}
            <div className="wire-hero">
                <img 
                    src={wire} 
                    alt="Нихромовая проволока от ВЗПС"
                    className="wire-hero-image"
                />
                <div className="wire-hero-overlay">
                    <div className="wire-hero-content">
                        <h1>Нихромовая и другие виды проволоки</h1>
                    </div>
                </div>
            </div>

            <div className="wire-content">
                <div className="wire-header">
                    <p className="wire-description">
                        В этом разделе вы можете 
                        ознакомиться с каталогом сплавов для производства проволоки и посмотреть описание и 
                        характеристики каждого сплава.
                    </p>
                </div>

                {/* Таблица форм и размеров */}
                <div className="section">
                    <h2>Формы и размеры</h2>
                    <div className="forms-table-wrapper">
                        <table className="forms-table">
                            <thead>
                                <tr>
                                    <th>Форма</th>
                                    <th>Размеры в мм</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formsAndSizesData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="form-name">{item.form}</td>
                                        <td className="form-size">{item.size}</td>
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

                {/* Упаковка */}
                <div className="section">
                    <h2>Упаковка</h2>
                    <ul className="styled-list packaging-list">
                        {packagingTypes.map((type, index) => (
                            <li key={index}>{type}</li>
                        ))}
                    </ul>
                </div>

                 {/* Таблица сплавов с группировкой */}
                <div className="section">
                    <h2>Сплавы для производства проволоки</h2>
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

                {/* Описание */}
                <div className="section">
                    <h2>Преимущества нашей проволоки</h2>
                    <div className="description-content">
                        <p>
                            Проволока из нихрома, фехрали и других прецизионных сплавов – материал  № 1 для изготовления жаростойких и жаропрочных элементов промышленного оборудования и бытовой техники. Никелевые сплавы устойчивы к высоким температурам и механическим нагрузкам, невосприимчивы к воздействию кислотных сред и тепловых ударов.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WirePage;