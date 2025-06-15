import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function NavItem({ to, icon, label, active, dropdown }) {
  return (
    <li className={`${styles.NavbarItem} ${dropdown ? styles.Dropdown : ''}`}>
      <Link to={to} className={`${styles.NavbarLink} ${active ? styles.active : ''}`}>
        <span className={styles.NavIcon}>{icon}</span>
        {label}
        {dropdown && ' ▾'}
      </Link>
      {dropdown && (
        <ul className={styles.DropdownMenu}>
          {dropdown.map((item) => (
            <li key={item.to} className={styles.DropdownItem}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavItem;