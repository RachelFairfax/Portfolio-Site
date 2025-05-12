import React from 'react';
import styles from './Pages.module.css'
import VodafonePhoto from '../assets/VodafonePhoto.jpg';

function Home() {
    return (
        <>
            <h1>Homepage</h1>
            <div className={styles.Container}>
                <section className={styles.Left}>
                    <p className={styles.BigText}>An aspiring developer with a passion for building websites like this one!<br/> <br/>Check out the Projects page for more examples, or take a look at my Certifications to see what I've learnt. Hope you enjoy :)</p>
                </section>
                <section className={styles.Right}>
                    <img className={styles.Photo} src={VodafonePhoto} alt="A photo of me at Vodafone"/>
                    </section>
            </div>
        </>
);
}

export default Home;