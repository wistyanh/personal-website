import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="topBar">
            <div className="AVP">
                <h2 className="initial">AVP</h2>
            </div>

            <div className="NavBar">

            <Link className="navLink" to="/">about me</Link>
            <Link className="navLink" to="/experiences">experiences</Link>
            <Link className="navLink" to="/projects">projects</Link>
            <Link className="navLink" to="/contact">contact</Link>
            </div>
        </div>
    );
}

export default NavBar;