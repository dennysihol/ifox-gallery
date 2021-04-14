
export default function addToFavorites(payload) {
    return {type: 'favorite/added', payload}
}


export function addToFavoritesAsync(payload) {
    return (dispatch, getState) => {
        const { data } = getState().addFavReducer
        console.log(data)
        console.log(payload)
      
    }
  }