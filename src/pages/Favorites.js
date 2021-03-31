import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Favorites() {

    const favorites = useSelector(state => state.favorites)

    return (
        <div className="container">
            <div className="row">
                {
                    favorites.map((photo) => {
                        return (
                            <div className="col-4">
                                <div className="card" style={{margin: "10px"}}>
                                    <img src={photo.download_url} className="card-img-top" alt="Photo" />
                                    <div className="topright" style={{position: "absolute", top: "8px", right: "16px", fontSize: "18px"}}> 
                                        <a className="btn">
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
