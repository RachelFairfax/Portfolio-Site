import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import profileImage from '../assets/ProfilePhoto.jpg';

const HomePage = () => {
  //Setting up routing for contact and projects buttons
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* Left Card */}
      <div className={styles.leftSide}>
        <div className={styles.PersonCard}>
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
            <br/>
            <br/>
            <br/>
            <div className={styles.halfBorder}></div>
            <p className={styles.title}>Front-End Developer</p>
            <div className={styles.socialIcons}>
            <a href="https://github.com/RachelFairfax" className={styles.socialIcon}>
            <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/rachel-fairfax-510b62356/" className={styles.socialIcon}>
            <FaLinkedin />
            </a>
            <a href="fairfaxr1@gmail.com" className={styles.socialIcon}>
            <MdEmail />
            </a>
        </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightContent}>
        <h1 className={styles.Name}>
          Rachel Fairfax
        </h1>
        <p className={styles.subTitle}>An aspiring developer with a passion for building websites like this one</p>
        <div className={styles.buttons}>
          <button className={styles.primary} onClick={() => navigate('/projects')}>Projects</button>
          <button className={styles.secondary} onClick={() => navigate('/contact')}>Contact</button>
        </div>
        <p className={styles.description}>
          I created this site to showcase my HTML, CSS and React skills as well as to display my qualifications and past projects.
        </p>
      </div>
    </div>
  );
};

export default HomePage;