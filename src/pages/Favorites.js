import React from 'react'
import { useSelector } from 'react-redux'
import PhotoList from '../components/PhotoList'

export default function Favorites() {

    const favorites = useSelector(state => state.favorites.data)

    return (
        <div className="container">
            <h2 style={{margin: '10xp', textAlign: 'center'}}>Pick Your Favorite Photos from Home</h2>
            <div className="row">
                {
                    favorites.map(fav => {
                        return (
                            <PhotoList photo={fav} key={fav.id}></PhotoList>
                        )
                    })
                }
            </div>
        </div>
    )
}
