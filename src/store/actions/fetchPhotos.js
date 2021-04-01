export function fetchPhotos(payload) {
    return {type: 'photos/fetch', payload}
}

export function fetchPhotosAsync (page) {
    return (dispatch) => {
        fetch(`https://picsum.photos/v2/list?page=${page}`)
            .then(res => res.json())
            .then(data => dispatch(fetchPhotos(data)))
            .catch(err => console.log(err))
    }

}