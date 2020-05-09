import { combineReducers } from 'redux';
import { favoriteReducer } from './favorite';

const allReducer = combineReducers({
    // add all your reducers here
    favorite: favoriteReducer
})

export { allReducer };