import uuidv4 from 'uuid/v4';
// import actionTypes from '../../actions/types';

const mockedTasks = [
    {
        id: uuidv4(),
        description: 'Отметьте страны, которые имеют выход к Черному морю и подпишите их столицы',
        level: 1,
        visuals: [
            {
                id: uuidv4(),
                name: 'Украина',
                type: 'TERRITORY',
                location: [],
                init: false,
                hover: true
            }
        ],
        interactions: [
            {
                type: 'MAP_TEXT'
            },
            {
                type: 'COLOR',
                value: 'blue'
            }
        ]
    },
    {
        id: uuidv4(),
        description: 'Соотнести зависимые территории с их статусом и стрелочками связать с метрополиями',
        level: 2,
        visuals: [
            {
                id: uuidv4(),
                name: 'Мартиника',
                type: 'TERRITORY',
                location: [],
                init: true,
                hover: false
            },
            {
                id: uuidv4(),
                name: 'Франция',
                type: 'TERRITORY',
                location: [],
                init: true,
                hover: false
            }
        ],
        interactions: [
            {
                type: 'JOIN'
            }
        ]
    },
    {
        id: uuidv4(),
        description: 'Ответьте на карточку',
        content: {
            markup: '<p>blabla</p>',
            questions: [
                {
                    id: uuidv4(),
                    type: 'radio',
                    options: [
                        'Республика, парламентская',
                        'Республика, президентская'
                    ],
                    title: 'Формы правления Сингапура'
                }
            ]
        },
        level: 2,
        visuals: [
            {
                id: uuidv4(),
                name: 'Сингапур',
                type: 'TERRITORY',
                location: [],
                init: true,
                hover: false
            }
        ],
        interactions: [
            {
                type: 'CARD'
            }
        ]
    },
    {
        id: uuidv4(),
        description: 'Соотнести изображения со странами',
        content: {
            markup: '<p>blabla</p>',
            questions: [
                {
                    id: uuidv4(),
                    type: 'icon',
                    options: [
                        'Флаг Дании(uri)'
                    ],
                    title: 'флаги'
                }
            ]
        },
        level: 2,
        visuals: [
            {
                id: uuidv4(),
                name: 'Дания',
                type: 'TERRITORY',
                location: [],
                init: true,
                hover: false
            }
        ],
        interactions: [
            {
                type: 'ATTACH'
            }
        ]
    }
];

const initialState = {
    list: mockedTasks,
    activeTaskId: ''
};

/**
 * Tasks reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const tasksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    // case actionTypes.SHOW_PASSWORD_MODAL:
    //     return {
    //         ...state,
    //         passwordModal: {
    //             isHidden: false
    //         }
    //     };

    default:
        return state;
    }
};

export default tasksReducer;
