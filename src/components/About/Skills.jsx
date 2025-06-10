import React from 'react';
import SectionLayout from '../SectionLayout/SectionLayout'
import styles from './Skills.module.css';


function Skills(){
    return (
                        <section className={styles.Container}>   
                            <h1 className={styles.Title}>Skills</h1>
                            <section className={styles.Body}> 
                                <section className={styles.Left}>  
                                <p className={styles.Subtitle}>My Soft Skills:</p>
                                <ul className = {styles.List}>
                                    <li className={styles.Item}>Presenting</li>
                                    <li className={styles.Item}>Communication</li>
                                    <li className={styles.Item}>Teamwork</li>
                                    <li className={styles.Item}>Initiative</li>
                                    <li className={styles.Item}>Stakeholder Engagement</li>
                                </ul>
                                </section>
                                <br></br>
                                <section className={styles.Right}>
                                <p className={styles.Subtitle}>My Competencies:</p>
                                <ul className={styles.List}>
                                    <li className={styles.Item}>HTML</li>
                                    <li className={styles.Item}>CSS</li>
                                    <li className={styles.Item}>Tailwind CSS</li>
                                    <li className={styles.Item}>JavaScript</li>
                                    <li className={styles.Item}>TypeScript</li>
                                    <li className={styles.Item}>Python</li>
                                    <li className={styles.Item}>SQL</li>
                                    <li className={styles.Item}>Jira</li>
                                    <li className={styles.Item}>VSCode</li>
                                    <li className={styles.Item}>GitHub</li>
                                </ul>
                                </section>
                                <section className={styles.ScrollingImages}>

                                </section>
                            </section>
                        </section>
    );
}

export default Skills;