import React from 'react';
import styles from './Introduction.module.css'
import GuitarPhoto from '../../assets/GuitarPhoto.jpg'

function Introduction() {
    return (                
        <div className={styles.Section}>
            <div className={styles.Words}>
                <h1>Introduction</h1>
                <p className={styles.SmallText}>Hi! I'm Rachel, a Software Engineering Degree Apprentice working for Vodafone. I have a strong preference for front-end development work, but I've also got experience building backends using languages like Python, SQL and PHP. 
                    You can find evidence of this on the Projects page. <br/><br/>

                    I have strong communication and teamwork skills, and I'm comfortable working with agile methodologies and collaborating with key stakeholders. My hobbies include weightlifting, playing guitar, airsoft and - of course - programming!
                </p>
            </div>
            <img className={styles.Photo} src={GuitarPhoto} alt="Me playing guitar" />
        </div>
        )
}

export default Introduction;