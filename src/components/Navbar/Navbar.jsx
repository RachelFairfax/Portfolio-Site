import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { RiInformation2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.hash.startsWith(path);

  return (
    <nav className={styles.Navbar}>
      <ul className={styles.NavbarUl}>
        <li className={styles.NavbarItem}>
          <Link to="/" className={`${styles.NavbarLink} ${isActive('/') ? styles.active : ''}`}><FaHome className={styles.NavIcon}/>Home</Link>
        </li>

        <li className={`${styles.NavbarItem} ${styles.Dropdown}`}>
          <Link to="/about" className={`${styles.NavbarLink} ${location.pathname === '/about' ? styles.active : ''}`}>
            <RiInformation2Line className={styles.NavIcon}/>About ▾
          </Link>
          <ul className={styles.DropdownMenu}>
            <li className={styles.DropdownItem}><Link to="/about#introduction">Introduction</Link></li>
            <li className={styles.DropdownItem}><Link to="/about#skills">Skills</Link></li>
            <li className={styles.DropdownItem}><Link to="/about#timeline">My Programming Journey</Link></li>
          </ul>
        </li>

        <li className={styles.NavbarItem}>
          <Link to="/projects" className={`${styles.NavbarLink} ${isActive('/projects') ? styles.active : ''}`}><GoProjectRoadmap className={styles.NavIcon}/>Projects</Link>
        </li>

        <li className={`${styles.NavbarItem} ${styles.Dropdown}`}>
          <Link to="/qualifications" className={`${styles.NavbarLink} ${location.pathname === '/qualifications' ? styles.active : ''}`}>
            <TbSchool className={styles.NavIcon}/>Qualifications ▾
          </Link>
          <ul className={styles.DropdownMenu}>
            <li className={styles.DropdownItem}><Link to="/qualifications#GCSEs">GCSEs</Link></li>
            <li className={styles.DropdownItem}><Link to="/qualifications#A-Levels">A-Levels</Link></li>
            <li className={styles.DropdownItem}><Link to="/qualifications#Degree">Degree</Link></li>
            <li className={styles.DropdownItem}><Link to="/qualifications#Certifications">Certifications</Link></li>
          </ul>
        </li>

        <li className={styles.NavbarItem}>
          <Link to="/contact" className={`${styles.NavbarLink} ${isActive('/contact') ? styles.active : ''}`}><MdOutlinePhone className={styles.NavIcon}/>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;