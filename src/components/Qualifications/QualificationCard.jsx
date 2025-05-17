import React, { useState } from 'react';
import styles from './Qualification.module.css'

function QualificationCard({name, date, grade, description}){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <div className={styles.Card} onClick={toggleExpand}>
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
  name: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default QualificationCard;