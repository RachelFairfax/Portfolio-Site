import React from 'react';
import styles from './SectionLayout.module.css';
import PropTypes from 'prop-types';

function SectionLayout({ title, leftContent, rightContent }) {
    return(
        <div className={styles.Container}>
            <section className={styles.Left}>
                <h1 className={styles.Title}>{title}</h1>
                <br />
                {leftContent}
            </section>
            <section className={styles.Right}>
                {rightContent}
            </section>
        </div>
    )
}

SectionLayout.propTypes = {
  title: PropTypes.string.isRequired,
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};


export default SectionLayout