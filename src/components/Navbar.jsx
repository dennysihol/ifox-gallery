import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">I-Fox Gallery</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        </div>
    )
}
