// import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

export default function PhotoList ({photo}) {

    const showAuthor = (e) => {
        e.preventDefault()
        Swal.fire('Author :', photo.author)
    }

    return (
        <div className="col-4">
            <div className="card" style={{margin: "10px"}}>
                <img src={photo.download_url} className="card-img-top" alt="Photo"></img>
                <a href="#" className="btn btn-info" onClick={showAuthor}>Show Author</a>
            </div>
        </div>
    )
}
