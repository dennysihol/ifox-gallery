import { createStore } from 'redux'

const initialState = {
    favorites: []
}

function reducer (state = initialState, action) {
    if(action.type === 'favorite/added') {
        return { ...state, counter: state.counter + 1}
    }
    return state
}

const store = createStore(reducer)

export default store