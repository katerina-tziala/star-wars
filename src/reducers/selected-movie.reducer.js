



import resourcesService from '../services/resourcesService';

const initialState = null;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED':
            return action.data;
        default:
            return state;
    }
};

export const getSelectedMovie = (title) => {
    return dispatch => {
        resourcesService.getSelectedMovie(title).then(movie => {
            dispatch({
                type: 'SELECTED',
                data: movie
            });
        });
    }
};

export const resetSelectedMovie = () => {
    return dispatch => {
        dispatch({
            type: 'SELECTED',
            data: null
        });
    }
};

export default reducer;