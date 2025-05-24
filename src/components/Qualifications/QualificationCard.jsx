import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Qualification.module.css'

function QualificationCard({name, from, date, grade, description, skills, category}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const typeClass = {
    GCSE: styles.gcse,
    'A-Level': styles.alevel,
    Degree: styles.degree,
    }[category] || '';

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <>
            <div className={`${styles.Card} ${typeClass}`} onClick={toggleExpand}>
                <div className={styles.Header}>
                    <h1>{name}</h1>
                </div>
                <div className={styles.Body}>
                    <p>From: {from}</p>
                    <p>Date: {date}</p>
                    <p className={styles.Grade}>Grade: {grade}</p>
                    <p>Skills:</p>
                <ul>
                {skills.slice(0,3).map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                {skills.length > 3 && <li>...</li>}
                </ul>
                </div>
            </div>

            {isExpanded && (
            <div className={styles.ModalOverlay} onClick={toggleExpand}>
                <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.CloseButton} onClick={toggleExpand}>×</button>
                    <h2>{name}</h2>
                    <p><strong>From:</strong> {from}</p>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Grade:</strong> {grade}</p>
                    <p><strong>Skills Learned:</strong></p>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <p>{description}</p>
                </div>
            </div>
        )}
    </>
    );
}

QualificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default QualificationCard;