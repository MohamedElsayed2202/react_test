import {createStore} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import compineReducers from './reducers/compineReducers'

const store = createStore(compineReducers, composeWithDevTools());

export default store;