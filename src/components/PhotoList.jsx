import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

export default function PhotoList () {
    return (
        <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.photo.download_url} className="card-img-top" alt="Photo"></img>
                <a href="#" className="btn btn-primary" onClick={ () => Swal.fire('Author :', this.props.photo.author)}>Show Author</a>
            </div>
        </div>
    )
}
