// import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";



export default function PhotoList ({photo}) {
    
    let history = useHistory()
    
    const showAuthor = (e) => {
        e.preventDefault()
        Swal.fire('Author :', photo.author)
    }

    const goToDetail = (id) => {
        history.push(`/detail/${id}`)
    }

    return (
        <div className="col-4">
            <div className="card" style={{margin: "10px"}}>
                <img src={photo.download_url} className="card-img-top" alt="Photo"></img>
                <button className="btn btn-info" onClick={() => goToDetail(photo.id)}>Show Detail</button>
            </div>
        </div>
    )
}
