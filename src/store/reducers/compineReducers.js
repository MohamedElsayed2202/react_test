import {combineReducers} from 'redux'
import favoritReducer from './favoritReducer'
import LoaderReducer from './loaderReducer';
import MoviesReducer from './moviesReducer'
import SearchReducer from './searchReducer'


export default combineReducers({
    favorit: favoritReducer,
    movies: MoviesReducer,
    searchedMovies: SearchReducer,
    loading: LoaderReducer
});