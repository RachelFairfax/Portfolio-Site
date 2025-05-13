import React from 'react';
import styles from '../Layout/Layout.module.css';
import AirsoftPhoto from '../../assets/AirsoftPhoto.jpg';

function Introduction(){
    return (
            <>
                <div className={styles.Container}>
                <section className={styles.Left}>
                <h1>Introduction</h1>
                <br/>
                <p>Hi! I'm Rachel, a Software Engineering Degree Apprentice working for Vodafone. I have a strong preference for front-end development work, but do have some experience building backends using languages like Python, SQL and PHP. 
                    you can find evidence of this on the Projects page. <br/><br/>

                    I have strong communication and teamwork skills, and I'm comfortable working with agile methodologies and collaborating with key stakeholders. My hobbies include weightlifting, playing guitar, airsoft and - of course - programming!
                </p>
                </section>
                <section className={styles.Right}>
                    <img className={styles.Photo} src={AirsoftPhoto} alt="Me holding an Airsoft gun"/>
                </section>
                </div>
            </>  
    )
}

export default Introduction;