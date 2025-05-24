import React from 'react';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import styles from '../components/Layout/Layout.module.css'

function Contact() {
    return (
        <div className={styles.ContactPage}>
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Feel free to reach out using the form or links below.</p>

        <div className={styles.ContactContainer}>
            {/* Left: Contact Form */}
            <form className={styles.ContactForm}>
            <label>
                Name:
                <input type="text" name="name" required placeholder="Joe Bloggs"/>
            </label>

            <label>
                Email:
                <input type="email" name="email" required placeholder="Joebloggs@gmail.com"/>
            </label>

            <label>
                Message:
                <textarea name="message" rows="5" required placeholder="Your message here."></textarea>
            </label>

            <button type="submit">Send Message</button>
            </form>

            {/* Right: Contact Details */}
            <div className={styles.ContactInfo}>
            <h2>Get in Touch</h2>
            <p><strong>Personal Email:</strong> fairfaxr1@gmail.com</p>
            <p><strong>Work Email:</strong> rachel.fairfax@vodafone.com</p>
            <p><strong>Phone:</strong> +44 7713 199721</p>

            <div className={styles.SocialLinks}>
                <a href="https://www.linkedin.com/in/rachel-fairfax-510b62356/" target="_blank" rel="noreferrer">
                <FaLinkedin className={styles.SocialIcons}/>
                </a>
                <a href="https://github.com/RachelFairfax" target="_blank" rel="noreferrer">
                <FaSquareGithub className={styles.SocialIcons}/>
                </a>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;