import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar () {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">IstanbulFox Gallery</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    )
}
