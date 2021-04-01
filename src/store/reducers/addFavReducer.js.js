const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer (state = initialState, action) {
    const { index, payload } = action
    if(action.type === 'favorite/added') {
        return { ...state, data: state.data.concat(payload)}
    } else if(action.type === 'favorite/delete') {
        return { ...state, data: state.data.splice(index, 1)}
    }
    return state
}

export default reducer