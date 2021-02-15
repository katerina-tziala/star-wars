import resourcesService from '../services/resourcesService';
const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_FILMS':
            return action.data;
        default:
            return state;
    }
};

export const loadMovies= () => {
    return dispatch => {
        resourcesService.getAllMovies().then(movies => {
            dispatch({
                type: 'INIT_FILMS',
                data: movies
            });
        });
    }
};

export default reducer;