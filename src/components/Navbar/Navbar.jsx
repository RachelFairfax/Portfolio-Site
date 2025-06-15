import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { RiInformation2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";

import NavItem from './NavItem';

const NAV_ITEMS = [
  { label: 'Home', to: '/', icon: <FaHome /> },
  {
    label: 'About',
    to: '/about',
    icon: <RiInformation2Line />,
    dropdown: [
      { label: 'Introduction', to: '/about#introduction' },
      { label: 'Skills', to: '/about#skills' },
      { label: 'My Programming Journey', to: '/about#timeline' },
    ],
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: <GoProjectRoadmap />
  },
  {
    label: 'Qualifications',
    to: '/qualifications',
    icon: <TbSchool />,
    dropdown: [
      { label: 'GCSEs', to: '/qualifications#GCSEs' },
      { label: 'A-Levels', to: '/qualifications#A-Levels' },
      { label: 'Degree', to: '/qualifications#Degree' },
      { label: 'Certifications', to: '/qualifications#Certifications' },
    ],
  },
  { label: 'Contact', to: '/contact', icon: <MdOutlinePhone /> },
];

function Navbar() {
  const { pathname, hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => pathname === path || hash.startsWith(path);

  return (
    <div className={styles.Navbar}>
        <div className={styles.Left}>
          <button onClick={toggleMenu} className={styles.Hamburger}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`${styles.NavbarUl} ${isOpen ? styles.ShowMenu : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={isActive(item.to)}
              dropdown={item.dropdown}
            />
          ))}
        </ul>
      <div className={styles.Right}></div>
    </div>
  );
}

export default Navbar;