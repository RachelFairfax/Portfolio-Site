import React from 'react';
import SectionLayout from '../../components/SectionLayout/SectionLayout';
import styles from '../Layout/Layout.module.css';
import AirsoftPhoto from '../../assets/AirsoftPhoto.jpg';

function Introduction(){
    const leftContent = (
                        <p className={styles.SmallText}>Hi! I'm Rachel, a Software Engineering Degree Apprentice working for Vodafone. I have a strong preference for front-end development work, but I've also got experience building backends using languages like Python, SQL and PHP. 
                    You can find evidence of this on the Projects page. <br/><br/>

                    I have strong communication and teamwork skills, and I'm comfortable working with agile methodologies and collaborating with key stakeholders. My hobbies include weightlifting, playing guitar, airsoft and - of course - programming!
                </p>
    )

    const rightContent = (                
        <div className={styles.PhotoContainer}>
            <img className={styles.Photo} src={AirsoftPhoto} alt="Me holding an Airsoft gun" />
            <p className={styles.HiddenCaption}>Not a real gun I promise!</p>
        </div>)

        return <SectionLayout title="Introduction" leftContent={leftContent} rightContent={rightContent}/>
}

export default Introduction;