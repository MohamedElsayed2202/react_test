import {combineReducers} from 'redux'
import favoritReducer from './favoritReducer'


export default combineReducers({
    favorit: favoritReducer
})