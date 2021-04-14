import Swal from 'sweetalert2'

export function addToFavorites(payload) {
    return {type: 'favorite/added', payload}
}


export function addToFavoritesAsync(payload) {
    return (dispatch, getState) => {
        const {data} = getState().favorites        
        let flag = false;
        data.forEach(favorite => {
        if (favorite.id === payload.id) {
            flag = true
            Swal.fire({
            icon: 'error',
            title: `it's already on your favorites list`
            })
        }
        })
        if (!flag) {
            fetch(`https://picsum.photos/id/${payload.id}/info`)
                .then(res => res.json())
                .then(data => {
                dispatch(addToFavorites(data))
                Swal.fire({
                    icon: 'success',
                    title: `photo by ${data.author} added on your favorite list!`
                })
                })
                .catch(err => {
                console.log(err)
                })
        }
    }
  }