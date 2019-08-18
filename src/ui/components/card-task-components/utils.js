import get from 'lodash/get';

export const handleSaveCurrentCoords = (e) => (
    {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
    }
);

export const defaultStyles =
[
    {
        featureType: 'poi',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit',
        // elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    }
];

export const getQuestions = (task) => get(task, 'content.questions');

export const getTask = () => (
    {
        id: 'uuid',
        description: 'Ответьте на карточку',
        markup: '<p>blabla</p>',
        content: {
            questions: [
                {
                    id: 'uuid',
                    type: 'radio',
                    title: 'Формы правления Сингапура',
                    options: [{
                        id: 'string',
                        value: 'Республика, парламентская'
                    },
                    {
                        id: 'string',
                        value: 'Республика, президентская'
                    }],
                },
            ],
            level: 2,
            interactions: [
                {
                    type: 'CARD'
                }
            ],
        }
    }
);
