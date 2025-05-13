import React from 'react';
import styles from '../Layout/Layout.module.css';

function Skills(){
    return (
            <>
                <h1>Skills</h1>
                <div className={styles.Container}>
                <section className={styles.Left}>
                    <h1>Soft Skills</h1>
                    <p>Here's a list of my soft skills:
                        <ul>
                            <li>Presenting</li>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Initiative</li>
                        </ul>
                    </p>
                </section>
                <section className={styles.Right}>
                    <h1>Competencies</h1>
                    <p>Here's a list of the technologies I have experience in:
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </p>
                </section>
                </div>
            </>  
            );
}

export default Skills;