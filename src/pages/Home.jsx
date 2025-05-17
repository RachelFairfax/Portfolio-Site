import React from 'react';
import SectionLayout from '../components/SectionLayout/SectionLayout'
import styles from '../components/Layout/Layout.module.css'
import VodafonePhoto from '../assets/VodafonePhoto.jpg';

function Home() {
    const leftContent = <p className={styles.BigText}>An aspiring developer with a passion for building websites like this one!<br/> <br/>Check out the Projects page for more examples, or take a look at my Certifications to see what I've learnt. Hope you enjoy :)</p>
    const rightContent = <img className={styles.Photo} src={VodafonePhoto} alt="A photo of me at Vodafone"/>

    return <SectionLayout title="" leftContent={leftContent} rightContent={rightContent}/>
}

export default Home;