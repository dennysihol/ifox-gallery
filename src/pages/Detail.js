import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailAsync } from '../store/actions/getDetail'

export default function Detail() {
    const { id } = useParams()
    const photo = useSelector(state => state.photo.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetailAsync(id))
    }, [])

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
