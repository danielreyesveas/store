const INITIAL_STATE = {
    sections: [
        {
            title: 'Pocket Operators',
            route: 'po',
            imageUrl: 'images/nicolas-nowak-pocket-operators.jpg',
            id: 1,
            linkUrl: 'shop/po'
        },
        {
            title: 'Synths',
            route: 'synths',
            imageUrl: 'images/synth.jpg',
            id: 2,
            linkUrl: 'shop/synths'
        },
        {
            title: 'Pocket Operators',
            route: 'po',
            imageUrl: 'images/nicolas-nowak-pocket-operators.jpg',
            id: 1,
            linkUrl: 'shop/po'
        },
        {
            title: 'Synths',
            route: 'synths',
            imageUrl: 'images/synth.jpg',
            id: 2,
            linkUrl: 'shop/synths'
        },
        {
            title: 'Pocket Operators',
            route: 'po',
            imageUrl: 'images/nicolas-nowak-pocket-operators.jpg',
            id: 1,
            linkUrl: 'shop/po'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;