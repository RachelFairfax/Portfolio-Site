import React from 'react';
import QualificationCard from './QualificationCard';
import styles from './Qualification.module.css';
import PropTypes from 'prop-types';

function QualificationCategory({ category, items }) {
    //For auto-scroll navigation and changing card colour based on type of Qualification 
    const typeName = {
        GCSE: "GCSEs",
        'A-Level': "A-Levels",
        Degree: "Degree",
        Certification: "Certifications"
    }[category] || '';


    return (
        <section className={styles.CategorySection} id={typeName}>  
        <h2 className={styles.CategoryTitle}>{typeName}</h2>
        <div className={styles.CardGrid}>
            {items.map((item, index) => (
            <QualificationCard key={index} {...item} category={category} />
            ))}
        </div>
        </section>
    );
}

QualificationCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      grade: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default QualificationCategory;