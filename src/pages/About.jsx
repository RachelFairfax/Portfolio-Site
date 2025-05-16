import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Introduction from '../components/About/Introduction';
import Skills from '../components/About/Skills';
import Timeline from '../components/About/Timeline/Timeline';
import styles from '../components/Layout/Layout.module.css'

function About() {
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
        <h1>About</h1>
        <section id="introduction" className={styles.Section}><Introduction /></section>
        <section id="skills" className={styles.Section}><Skills /></section>
        <section id="timeline" className={styles.Section}><Timeline /></section>
    </div>
    );
}

export default About;