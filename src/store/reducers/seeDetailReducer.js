const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer (state = initialState, action) {
    const { payload } = action
    if(action.type === 'detail/get') {
        return { ...state, data: payload}
    }
    return state
}

export default reducer