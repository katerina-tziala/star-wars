import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './reducers/filter.reducer';
import moviesReducer from './reducers/movies.reducer';
import selectedMovieReducer from './reducers/selected-movie.reducer';
import searchValueReducer from './reducers/search-value.reducer';

const reducer = combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
  selectedMovie: selectedMovieReducer,
  searchValue: searchValueReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;