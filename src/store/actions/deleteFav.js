export default function deleteFav(index) {
    return {type: 'favorite/delete', index}
}

export function deleteFavAsync (id) {
    return (dispatch, getState) => {
      const { data } = getState().addFavReducer
  
      data.forEach((favorite, i) => {
        if (favorite.id === id) {
          dispatch(deleteFav(i))
        }
      })
    }
  }