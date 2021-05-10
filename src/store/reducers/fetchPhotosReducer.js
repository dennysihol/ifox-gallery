const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer (state = initialState, action) {
    const { payload } = action
    if(action.type === 'photos/fetch') {
        return { ...state, data: state.data.concat(payload)}
    }
    return state
}

export default reducer