import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/About">About</Link>
            <Link to="/Discover">Discover</Link>
            <Link to="/Search">Search</Link>
        </div>
    )
}

export default Navbar;