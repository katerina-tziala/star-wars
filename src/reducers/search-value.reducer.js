const initialState = '';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_VALUE':
            return action.data;
        default:
            return state;
    }
};

export const setSearchValue = (filter) => {
    return {
        type: 'SET_SEARCH_VALUE',
        data: filter
    };
};

export default reducer;