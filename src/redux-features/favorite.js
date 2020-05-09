import { createAction, createReducer } from '@reduxjs/toolkit';

const addFavorite = createAction ('added to favorite');
const removeFavorite = createAction ('added to favorite');

const actions = { addFavorite, removeFavorite};

const listState = [{


}
]

const favoriteReducer = createReducer(listState, {
[addFavorite]: (state, action) => {



}


})



export {actions, favoriteReducer};


