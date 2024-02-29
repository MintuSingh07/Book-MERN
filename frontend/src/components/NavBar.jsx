import React from 'react';
import './comp_css/NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>  
            {/* NavBar */}
            {/* PC NavBar */}
            <nav id='pc-nav' className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{fontWeight: 'bolder'}}>Booker</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/allbooks'>Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Sell Books</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Community</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Mobile NavBar-Footer */}
            <div id="logo-bar">
                <h3>Booker</h3>
            </div>
            <div id="mobile-nav">
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
            </div>
        </>
    )
}

export default NavBar
