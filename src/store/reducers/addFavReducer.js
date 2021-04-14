const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer (state = initialState, action) {
    const { index, type, payload } = action
    if(type === 'favorite/added') {
        return { ...state, data: state.data.concat(payload)}
    } else if(type === 'favorite/delete') {
        return { ...state, data: state.data.filter(item => item !== index)}
    }
    return state
}

export default reducer