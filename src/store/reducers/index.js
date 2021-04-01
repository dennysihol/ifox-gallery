import { combineReducers } from 'redux'

import addFavReducer from './addFavReducer.js'
import fetchPhotosReducer from './fetchPhotosReducer'
import seeDetailReducer from "./seeDetailReducer";

const reducer = combineReducers({
    favorites: addFavReducer,
    photos: fetchPhotosReducer,
    photo: seeDetailReducer
})

export default reducer