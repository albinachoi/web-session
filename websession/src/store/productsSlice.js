import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        burgers: [
            {
                id: 1,
                img: 'IMG_0805.PNG',
                name: 'Воппер',
                description: 'Фирменный, сытный бургер с овощами, со 100% говядиной, приготовленной на открытом огне',
                bgColor: '#FFD700'
            },
            {
                id: 2,
                img: 'IMG_0806.PNG',
                name: 'Воппер Джуриор',
                description: 'Фирменный бургер среднего размера со свежими овощами и 100% говядиной, приготовленной на гриле. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#8B0000'
            },
            {
                id: 3,
                img: 'IMG_0807.PNG',
                name: 'Сырный Джуриор',
                description: 'Фирменный бургер среднего размера со свежими овощами и 100% говядиной, приготовленной на гриле. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#006400'
            },
            {
                id: 4,
                img: 'IMG_0878.PNG',
                name: 'Стейкхаус',
                description: 'Сытный говяжий бургер с сыром и хрустящим луком в кукурузной булочке с соусом барбекю. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#006400'
            },
            {
                id: 5,
                img: 'IMG_0879.PNG',
                name: 'Чизбургер',
                description: 'Бургер среднего размера с говяжей котлетой приготовленной на огне, с ломтиком сыра, горчицей и кетчупом.',
                bgColor: '#8B0000'
            },
            {
                id: 6,
                img: 'IMG_0881.PNG',
                name: 'Криспи Чикен',
                description: 'Куриный бургер со свежими овощами и хрустящей котлетой в панировке. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#FFD700'
            },
            {
                id: 7,
                img: 'IMG_0882.PNG',
                name: 'Двойной Криспи Чикен',
                description: 'Сытный куриный бургер со свежими овощами и с двойной хрустящей котлетой в кукурузной булочке. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#FFD700'
            },
            {
                id: 8,
                img: 'IMG_0884.PNG',
                name: 'Лонг Чикен',
                description: 'Сытный бургер с хрустящими листьями салата и нежным куриным филе. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#8B0000'
            },
            {
                id: 9,
                img: 'IMG_0885.PNG',
                name: 'Чизи Ролл',
                description: 'Сытный сырный ролл с хрустящими листьями салата и нежным куриным филе. *Дополни бургер сыром или халапеньо на вкус.',
                bgColor: '#006400'
            }
        ],
        drinks: [
            {
                id: 1,
                img: 'IMG_1077.PNG',
                name: 'Coca-cola',
                description: '',
                bgColor: '#006400'
            },
            {
                id: 2,
                img: 'IMG_1078.PNG',
                name: 'Fanta',
                description: '',
                bgColor: '#8B0000'
            },
            {
                id: 3,
                img: 'IMG_1079.PNG',
                name: 'Sprite',
                description: '',
                bgColor: '#FFD700'
            },
            {
                id: 4,
                img: 'IMG_1080.PNG',
                name: 'Coca-cola *in bottle',
                description: '',
                bgColor: '#FFD700'
            },
            {
                id: 5,
                img: 'IMG_1081.PNG',
                name: 'Piko',
                description: '',
                bgColor: '#8B0000'
            },
            {
                id: 6,
                img: 'IMG_1082.PNG',
                name: 'Fuse Tea',
                description: '',
                bgColor: '#006400'
            }
        ],
        others: [
            {
                id: 1,
                img: 'IMG_1071.PNG',
                name: 'Картофель по-деревенски',
                description: 'Попробуйте хрустящие, горячие картофельные дольки с неповторимым вкусом *Дополни соусом на выбор - сырный, кетчуп, барбекью.',
                bgColor: '#006400'
            },
            {
                id: 2,
                img: 'IMG_1072.PNG',
                name: 'Луковые кольца',
                description: 'Хрустящие луковые колечки, идеальная закуска *Дополни соусом на выбор - сырный, кетчуп, барбекью.',
                bgColor: '#8B0000'
            },
            {
                id: 3,
                img: 'IMG_1073.PNG',
                name: 'Наггетсы',
                description: 'Нежные наггетсы из белого куриного филе. *Дополни соусом на выбор - сырный, кетчуп, барбекью.',
                bgColor: '#FFD700'
            },
            {
                id: 4,
                img: 'IMG_1074.PNG',
                name: 'Крылышки',
                description: 'Острые куриные крылышки по фирменному рецепту, в соусе барбекью. *Дополни соусом на выбор - сырный, кетчуп, bbq.',
                bgColor: '#FFD700'
            },
            {
                id: 5,
                img: 'IMG_1075.PNG',
                name: 'Крылышки в панировке',
                description: 'Сочные куриные крылышки в хрустящей панировке. *Дополни соусом на выбор - сырный, кетчуп, барбекью.',
                bgColor: '#8B0000'
            },
            {
                id: 6,
                img: 'IMG_1076.PNG',
                name: 'Пирожок с вишней',
                description: 'Хрустящий пирожок с вишневой начинкой.',
                bgColor: '#006400'
            }
        ]
    },
    reducers: {

    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer