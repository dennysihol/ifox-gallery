import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

export default class PhotoList extends Component {
    render() {
        const { photos } = this.props

        return (
            <div>
                <div className="container">
                    <div className="row">
                            {
                                photos.map(photo => {
                                    return (
                                        <div className="col-4">
                                            <div className="card" style={{width: "18rem"}}>
                                                <img src={photo.download_url} className="card-img-top" alt="Photo"></img>
                                                <a href="#" class="btn btn-primary" onClick={ () => Swal.fire('Author :', photo.author)}>Show Author</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}
