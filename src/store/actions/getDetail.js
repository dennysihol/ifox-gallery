export function getDetail(payload) {
    return {type: 'detail/get', payload}
}

export function getDetailAsync(id) {
    return (dispatch) => {
        fetch(`https://picsum.photos/id/${id}/info`)
            .then(res => res.json())
            .then(data => dispatch(getDetail(data)))
            .catch(err => console.log(err))
    }
}