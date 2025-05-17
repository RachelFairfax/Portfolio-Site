import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Qualification.module.css'

function QualificationCard({name, date, grade, description, skills, category}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const typeClass = {
        'GCSE': 'styles.gcse',
        'A-Level': 'styles.alevel',
        'Degree': 'styles.degree'
    }[category] || '';

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <div className={`${styles.Card} ${typeClass}`}>
            <div className={styles.Header}>
                <h1>{name}</h1>
            </div>
            <div className={styles.Body}>
                <p>Date: {date}</p>
                <p>Grade: {grade}</p>
            </div>
        </div>
)

}

QualificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default QualificationCard;