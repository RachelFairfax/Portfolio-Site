import React from 'react';
import SectionLayout from '../SectionLayout/SectionLayout'
import styles from '../Layout/Layout.module.css';


function Skills(){
    const leftContent = (       
                        <>       
                            <h1 className={styles.LeftAlign}>Soft Skills</h1>
                            <p className={styles.LeftAlign}>Here's a list of my soft skills:</p>
                                <ul className={styles.LeftAlign}>
                                    <li>Presenting</li>
                                    <li>Communication</li>
                                    <li>Teamwork</li>
                                    <li>Initiative</li>
                                </ul>
                        </>
                        );

    const rightContent = (
                        <>
                            <br></br>
                            <h1 className={styles.LeftAlign}>Competencies</h1>
                            <p className={styles.LeftAlign}>Here's a list of the technologies I have experience in:</p>
                            <ul className={styles.LeftAlign}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                        </>
    )
    return <SectionLayout title="" leftContent={leftContent} rightContent={rightContent}/>;
}

export default Skills;