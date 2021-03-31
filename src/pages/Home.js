import React, { useEffect, useState } from 'react'
import PhotoList from '../components/PhotoList'
import usePageBottom from '../helpers/hooks/usePageBottom'

export default function Home() {

    const [user, setUser] = useState('Folks')
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const isPageBottom = usePageBottom();
    
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${page}`)
        .then(res => res.json())
        .then(json => setPhotos([...photos, ...json]));
    }, [page])

    const ScrollToEnd = () => {
        setPage(page+1)
    }

    window.onscroll = function () {
        if(isPageBottom){
        console.log('sampe bawah');
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
