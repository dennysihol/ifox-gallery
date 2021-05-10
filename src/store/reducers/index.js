import { combineReducers } from 'redux'

import addFavReducer from './addFavReducer'
import fetchPhotosReducer from './fetchPhotosReducer'
import seeDetailReducer from "./seeDetailReducer";

const reducer = combineReducers({
    favorites: addFavReducer,
    photos: fetchPhotosReducer,
    photo: seeDetailReducer
})

export default reducer