import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GCSEs from '../components/Qualifications/GCSEs';
import ALevels from '../components/Qualifications/A-Levels';
import Degree from '../components/Qualifications/Degree';
import Certifications from '../components/Qualifications/Degree';
import styles from './Pages.module.css'

function Qualifications() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash){
            const section = document.querySelector(location.hash);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [location])

    return (
    <div>
        <h1>Qualifications</h1>
        <section id="GCSEs" className={styles.Section}><GCSEs /></section>
        <section id="A-Levels" className={styles.Section}><ALevels /></section>
        <section id="Degree" className={styles.Section}><Degree /></section>
        <section id="Certifications" className={styles.Section}><Certifications /></section>
    </div>
    );
}

export default Qualifications;