import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://picsum.photos/id/${id}/info`)
        .then(res => res.json())
        .then(photo => setPhoto(photo))
        .catch(err => console.log(err))
        .finally(_ => setIsLoading(false))
    }, [])

    if(isLoading) return <h3>Loading...</h3>
    return (
        <div className='container' style={{margin: "20px"}}>
            <div className='row'>
                <div className='col-6'>
                <img src={photo.download_url} alt="Photo" style={{width: "100%", borderRadius: "10px"}}/>
                </div>
                <div className='col-6'>
                    <h3>Author : {photo.author}</h3>
                    <h4>Width : {photo.width}</h4>
                    <h4>Height : {photo.height}</h4>
                    <h4>URL : <a href={photo.url} target="_blank">{photo.url}</a></h4>
                </div>
            </div>
            
        </div>
    )
}
