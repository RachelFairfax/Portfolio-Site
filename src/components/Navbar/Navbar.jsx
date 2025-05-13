import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className={styles.Navbar}>
            <h1></h1>
            <h2>Navbar</h2>
            <ul className={styles.NavbarUl}>
                <li className= {styles.NavbarItem}><Link to="/">Home</Link></li>
                <li className= {styles.NavbarItem}><Link to="/about">About</Link></li>
                <li className= {styles.NavbarItem}><Link to="/projects">Projects</Link></li>
                <li className= {styles.NavbarItem}><Link to="/certifications">Certifications</Link></li>
                <li className= {styles.NavbarItem}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
//Navbar is an unordered list of links with default styling removed

export default Navbar;