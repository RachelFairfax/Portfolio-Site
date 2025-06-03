import React from 'react';
import CodingBackground from '../../assets/coding background.png';
import styles from './WhyIBuilt.module.css'

function WhyIBuilt(){
    return (
        <div className={styles.Container}>
        <h1 className={styles.BigText}>Why Did I Build This Website?</h1>
        <br/>
        <p className={styles.SmallText}>I created this site to showcase my HTML, CSS and React skills as well as to display my qualifications and past projects.</p>
        <br/>
        <button>Interactive Timeline (useState and CSS animations)</button>
        <button>Embedded Videos</button>
        <button>Expandable Qualification Cards (CSS Flex)</button>
        </div>
    )
}

export default WhyIBuilt;