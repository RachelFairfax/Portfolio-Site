import React from 'react';
import styles from './Navbar.module.css';

function Navbar () {
    return (
        <nav className={styles.Navbar}>
            <h1></h1>
            <h2>Navbar</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Certifications">Certifications</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
    )
}
//Navbar is an unordered list of links with default styling removed

export default Navbar;