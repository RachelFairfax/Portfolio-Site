import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className={styles.Navbar}>
            <h1></h1>
            <h2>Navbar</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
//Navbar is an unordered list of links with default styling removed

export default Navbar;