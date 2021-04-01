import React, { useEffect, useState } from 'react'
import PhotoList from '../components/PhotoList'
import usePageBottom from '../helpers/hooks/usePageBottom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotosAsync } from '../store/actions/fetchPhotos'

export default function Home() {

    const [user, setUser] = useState('Folks')    
    const [page, setPage] = useState(1)
    const isPageBottom = usePageBottom();
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.data)
    
    useEffect(() => {
        dispatch(fetchPhotosAsync(page))
    }, [page])

    const ScrollToEnd = () => {
        setPage(page+1)
    }

    window.onscroll = function () {
        if(isPageBottom){
        ScrollToEnd()
        }
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Hello {user} !</h1>
            <div className="container">
                <div className="row">
                {
                    photos.length > 0 && photos.map((photo) => {
                    return  (
                        <PhotoList photo={photo} key={photo.id}></PhotoList>
                    )
                    })
                }
                </div>
            </div>
        </div>
    )
}
