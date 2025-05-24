import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import styles from '../components/Layout/Layout.module.css';
import VodafonePhoto from '../assets/VodafonePhoto.jpg';

function Home() {
    const navigate = useNavigate();
    const leftContent = (
    <>
        <p className={styles.Name}>Rachel Fairfax</p>
        <p className={styles.BigText}>An aspiring developer with a passion for building websites like this one!</p>
        <br/>
        <button className={styles.Button} onClick={() => navigate('/contact')} >Get In Touch</button>
    </>)
    const rightContent = <img className={styles.Photo} src={VodafonePhoto} alt="A photo of me at Vodafone"/>

    return <SectionLayout title="" leftContent={leftContent} rightContent={rightContent}/>
}
//<p className={styles.SmallText}>Check out the Projects page for more examples, or take a look at my Certifications to see what I've learnt. Hope you enjoy :)</p>

export default Home;