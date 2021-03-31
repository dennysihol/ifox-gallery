import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorites() {

    const favorites = useSelector(state => state.favorites)

    const deleteFav = (favId) => {
        console.log(favId);
        let removeIndex = favorites.map(fav => { return fav.id; }).indexOf(favId);
        console.log(removeIndex);
        favorites.splice(removeIndex, 1)
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
                                        <a className="btn" onClick={() => deleteFav(fav.id)}>
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
