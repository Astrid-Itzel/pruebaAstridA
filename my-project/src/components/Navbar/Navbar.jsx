import React from 'react';
import homeIcon from '../../assets/home.svg';
import './Navbar.css';

export default function Navbar(){

    return(
<nav className="navbar navbar-dark bg-dark fixed-top w-100">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler" 
                    id="navbarToggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggle" 
                    aria-controls="navbarToggle" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand">
                <img src={homeIcon} alt="Home" className="navbar-icon" />

                </span>
            </div>
            <div className="collapse" id="navbarToggle">
                <div className="bg-dark p-4">
                    <h5 className="text-body-emphasis h4">Collapsed content</h5>
                    <span className="text-body-secondary">Toggleable via the navbar brand.</span>
                </div>
            </div>
        </nav>
    )
}
