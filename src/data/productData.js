// data/productData.js
export const productsData = {
    'wire': [
        {
            id: 1,
            name: 'Проволока Х20Н80',
            description: 'Высоколегированная проволока для нагревательных элементов',
            properties: 'Диаметр: 0.1-8.0 мм, Рабочая температура: до 1200°C',
            category: 'wire',
            grade: 'Х20Н80',
            application: 'Нагревательные элементы, резисторы, термопары'
        },
        {
            id: 2,
            name: 'Проволока Х15Н60',
            description: 'Никель-хромовая проволока для электронагревателей',
            properties: 'Диаметр: 0.1-8.0 мм, Рабочая температура: до 1000°C',
            category: 'wire',
            grade: 'Х15Н60',
            application: 'Электронагреватели, реостаты'
        },
        {
            id: 3,
            name: 'Проволока Н80Х20Д',
            description: 'Проволока с повышенной жаростойкостью',
            properties: 'Диаметр: 0.2-6.0 мм, Рабочая температура: до 1100°C',
            category: 'wire',
            grade: 'Н80Х20Д',
            application: 'Промышленные печи, термопары'
        }
    ],
    'tape': [
        {
            id: 4,
            name: 'Лента 36НХТЮ',
            description: 'Прецизионная лента для упругих элементов',
            properties: 'Толщина: 0.05-2.0 мм, Ширина: 5-200 мм',
            category: 'tape',
            grade: '36НХТЮ',
            application: 'Мембраны, пружины, термобиметаллы'
        },
        {
            id: 5,
            name: 'Лента 50Н',
            description: 'Магнитно-мягкая лента для трансформаторов',
            properties: 'Толщина: 0.1-1.5 мм, Магнитная проницаемость: высокая',
            category: 'tape',
            grade: '50Н',
            application: 'Трансформаторы, дроссели, магнитные экраны'
        },
        {
            id: 6,
            name: 'Лента 80НХС',
            description: 'Лента с высоким электросопротивлением',
            properties: 'Толщина: 0.1-1.0 мм, Удельное сопротивление: 1.3 Ом·мм²/м',
            category: 'tape',
            grade: '80НХС',
            application: 'Резисторы, нагревательные элементы'
        }
    ],
    'rod': [
        {
            id: 7,
            name: 'Пруток 12Х18Н10Т',
            description: 'Коррозионностойкий пруток для машиностроения',
            properties: 'Диаметр: 6-100 мм, Длина: 2-6 м',
            category: 'rod',
            grade: '12Х18Н10Т',
            application: 'Детали машин, крепеж, арматура'
        },
        {
            id: 8,
            name: 'Пруток 38ХМЮА',
            description: 'Жаропрочный пруток для высоконагруженных деталей',
            properties: 'Диаметр: 10-80 мм, Термообработка: закалка+отпуск',
            category: 'rod',
            grade: '38ХМЮА',
            application: 'Валы, оси, шестерни'
        },
        {
            id: 9,
            name: 'Пруток 40ХН',
            description: 'Конструкционный пруток повышенной прочности',
            properties: 'Диаметр: 8-120 мм, Предел прочности: до 1200 МПа',
            category: 'rod',
            grade: '40ХН',
            application: 'Ответственные детали машин'
        }
    ]
};

export const getAlloysData = {
    'high-resistance': [
        {
            id: 1,
            name: 'Х20Н80',
            description: 'Прецизионный сплав с высоким электросопротивлением',
            properties: 'ρ = 1.08-1.12 Ом·мм²/м, Tmax = 1200°C',
            composition: 'Ni: 80%, Cr: 20%',
            application: 'Нагревательные элементы, реостаты, термопары',
            delivery: 'Проволока Ø0.1-8.0 мм, лента 0.05-3.0 мм'
        },
        {
            id: 2,
            name: 'Х15Н60',
            description: 'Никель-хромовый сплав для нагревательных приборов',
            properties: 'ρ = 1.05-1.10 Ом·мм²/м, Tmax = 1000°C',
            composition: 'Ni: 60%, Cr: 15%, Fe: основа',
            application: 'Электронагреватели, резисторы',
            delivery: 'Проволока Ø0.1-8.0 мм, лента 0.05-3.0 мм'
        },
        {
            id: 3,
            name: 'Н80Х20Д',
            description: 'Жаростойкий сплав для высокотемпературных печей',
            properties: 'ρ = 1.10 Ом·мм²/м, Tmax = 1100°C',
            composition: 'Ni: 80%, Cr: 20%, Cu: 0.5%',
            application: 'Промышленные печи, термопары',
            delivery: 'Проволока Ø0.2-6.0 мм'
        }
    ],
    'welding-materials': [
        {
            id: 4,
            name: 'Св-08Г2С',
            description: 'Сварочная проволока для углеродистых сталей',
            properties: 'Диаметр: 0.8-4.0 мм, Содержание Si: 0.7-1.1%',
            composition: 'C: 0.08%, Mn: 1.8-2.1%, Si: 0.7-1.1%',
            application: 'Сварка конструкций из углеродистых сталей',
            delivery: 'Катушки D200-400 мм, бухты'
        },
        {
            id: 5,
            name: 'Св-10Г2',
            description: 'Сварочная проволока для низколегированных сталей',
            properties: 'Диаметр: 1.0-5.0 мм, Высокая ударная вязкость',
            composition: 'C: 0.10%, Mn: 1.8-2.2%, Si: 0.3-0.6%',
            application: 'Сварка ответственных конструкций',
            delivery: 'Катушки, бухты, мотки'
        }
    ],
    'soft-magnetic': [
        {
            id: 6,
            name: '50Н',
            description: 'Прецизионный магнитно-мягкий сплав',
            properties: 'μmax > 40000, Bs = 1.6 Тл',
            composition: 'Ni: 50%, Fe: основа',
            application: 'Трансформаторы, дроссели, магнитные экраны',
            delivery: 'Лента 0.1-1.5 мм, пруток'
        },
        {
            id: 7,
            name: '79НМ',
            description: 'Сплав с высокой магнитной проницаемостью',
            properties: 'μmax > 80000, Hc < 0.05 А/см',
            composition: 'Ni: 79%, Mo: 4%, Fe: основа',
            application: 'Магнитные усилители, реле',
            delivery: 'Лента 0.05-1.0 мм'
        }
    ],
    'elastic': [
        {
            id: 8,
            name: '36НХТЮ',
            description: 'Сплав для упругих элементов с постоянным модулем',
            properties: 'E = 1.7·10⁵ МПа, Tmax = 350°C',
            composition: 'Ni: 36%, Cr: 12%, Ti: 1.5%, Fe: основа',
            application: 'Мембраны, пружины, термобиметаллы',
            delivery: 'Лента 0.05-2.0 мм, проволока'
        },
        {
            id: 9,
            name: '40КХНМ',
            description: 'Коррозионностойкий упругий сплав',
            properties: 'Высокая релаксационная стойкость',
            composition: 'Co: 40%, Cr: 20%, Ni: 15%, Mo: 5%',
            application: 'Точные пружины, часовые механизмы',
            delivery: 'Лента 0.1-1.0 мм, проволока'
        }
    ],
    'tclr': [
        {
            id: 10,
            name: '29НК',
            description: 'Инвар - сплав с низким ТКЛР',
            properties: 'α = 1.2·10⁻⁶ К⁻¹, T = -60...+100°C',
            composition: 'Ni: 29%, Co: 17%, Fe: основа',
            application: 'Измерительные приборы, криогенная техника',
            delivery: 'Пруток, лента, лист'
        },
        {
            id: 11,
            name: '32НКД',
            description: 'Сплав с заданным ТКЛР для спаев со стеклом',
            properties: 'α = 4.5·10⁻⁶ К⁻¹, T = 20...400°C',
            composition: 'Ni: 32%, Co: 4%, Fe: основа',
            application: 'Вакуумные приборы, электроника',
            delivery: 'Пруток, проволока'
        }
    ],
    'heat-resistant-alloys': [
        {
            id: 12,
            name: 'ХН78Т',
            description: 'Жаропрочный сплав для высокотемпературных печей',
            properties: 'Tmax = 1100°C, Высокая окалиностойкость',
            composition: 'Ni: 78%, Cr: 20%, Ti: 1.5%',
            application: 'Детали печей, нагревательные элементы',
            delivery: 'Проволока, лента, пруток'
        },
        {
            id: 13,
            name: 'ХН60В',
            description: 'Сплав с высокой жаропрочностью',
            properties: 'Tmax = 1050°C, Предел ползучести 100 МПа',
            composition: 'Ni: 60%, Cr: 15%, W: 5%, Fe: основа',
            application: 'Лопатки турбин, сопла',
            delivery: 'Пруток, штамповки'
        }
    ],
    'corrosion-resistant': [
        {
            id: 14,
            name: '12Х18Н10Т',
            description: 'Аустенитная коррозионностойкая сталь',
            properties: 'δ5 = 40%, HB < 190, Коррозионная стойкость',
            composition: 'Cr: 18%, Ni: 10%, Ti: 0.6%',
            application: 'Химическое машиностроение, пищевая промышленность',
            delivery: 'Пруток, лист, трубы'
        },
        {
            id: 15,
            name: '08Х18Н10Т',
            description: 'Коррозионностойкая сталь для сварных конструкций',
            properties: 'Высокая пластичность, свариваемость',
            composition: 'Cr: 18%, Ni: 10%, Ti: 0.5%',
            application: 'Сварные конструкции, емкости',
            delivery: 'Лист, трубы, пруток'
        }
    ]
};

export const getProductsByCategory = (category) => {
    return productsData[category] || [];
};

export const getAlloysByCategory = (category) => {
    return getAlloysData[category] || [];
};