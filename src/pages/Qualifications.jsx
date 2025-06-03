import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QualificationCategory from '../components/Qualifications/QualificationCategory';
import qualificationsData from '../components/Qualifications/QualificationsData';
import styles from '../components/Layout/Layout.module.css';

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
            <h1 className={styles.Title}>Qualifications</h1>
            <main>
            {qualificationsData.map((section, index) => (
                <QualificationCategory
                key={index}
                category={section.category}
                items={section.items}
                />
            ))}
            </main>
        </div>
    );
}

export default Qualifications;