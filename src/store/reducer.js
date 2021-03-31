const initialState = {
    favorites: []
}

function reducer (state = initialState, action) {
    const { payload } = action
    if(action.type === 'favorite/added') {
        return { ...state, favorites: state.favorites.concat(payload)}
    }
    return state
}

export default reducer