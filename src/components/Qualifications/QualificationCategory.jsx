import React from 'react';
import QualificationCard from './QualificationCard';
import styles from './Qualification.module.css';
import PropTypes from 'prop-types';

function QualificationCategory({ category, items }) {
  return (
    <section className={styles.CategorySection}>  
      <h2 className={styles.CategoryTitle}>{category}</h2>
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