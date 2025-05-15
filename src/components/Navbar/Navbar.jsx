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
                <li className= {`${styles.NavbarItem} ${styles.Dropdown} `}>
                    About ▾
                    <ul className={styles.DropdownMenu}>
                        <li className={styles.DropdownItem}><Link to="/about#introduction">Introduction</Link></li>
                        <li className={styles.DropdownItem}><Link to="/about#skills">Skills</Link></li>
                        <li className={styles.DropdownItem}><Link to="/about#timeline">My Programming Journey</Link></li>
                    </ul>
                </li>
                <li className= {styles.NavbarItem}><Link to="/projects">Projects</Link></li>
                <li className= {`${styles.NavbarItem} ${styles.Dropdown} `}>
                    Qualifications ▾
                    <ul className={styles.DropdownMenu}>
                        <li className={styles.DropdownItem}><Link to="/qualifications#GCSEs">GCSEs</Link></li>
                        <li className={styles.DropdownItem}><Link to="/qualifications#A-Levels">A-Levels</Link></li>
                        <li className={styles.DropdownItem}><Link to="/qualifications#Degree">Degree</Link></li>
                        <li className={styles.DropdownItem}><Link to="/qualifications#Certifications">Certifications</Link></li>
                    </ul>
                </li>
                <li className= {styles.NavbarItem}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
//Navbar is an unordered list of links with default styling removed

export default Navbar;