import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import deleteFav from '../store/actions/deleteFav'

export default function Favorites() {

    const favorites = useSelector(state => state.favorites.data)
    const dispatch = useDispatch()

    const deleteById = (fav) => {
        dispatch(deleteFav(fav))
    }

    return (
        <div className="container">
            <h2 style={{margin: '10xp', textAlign: 'center'}}>Pick Your Favorite Photos from Home</h2>
            <div className="row">
                {
                    favorites.map(fav => {
                        return (
                            <div className="col-4" key={fav.id}>
                                <div className="card" style={{margin: "10px"}}>
                                    <img src={fav.download_url} className="card-img-top" alt="Photo" />
                                    <div className="topright" style={{position: "absolute", top: "8px", right: "16px", fontSize: "18px"}}> 
                                        <a className="btn" onClick={() => deleteById(fav)}>
                                            <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" style={{height: "25px"}} alt="love"/>   
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
