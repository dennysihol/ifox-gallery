import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#aed9e0"}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src="https://i.imgur.com/ijOZ4au.png" width="70px" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/favorites" className="navbar-brand">Favorites</Link></li>
                </ul>
            </div>
        </div>
    )
}
