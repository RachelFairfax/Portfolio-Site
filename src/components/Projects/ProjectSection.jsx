import React from 'react';
import styles from '../../pages/Projects/Projects.module.css';

function ProjectSection({ title, date, from, desc, mediaType, url }) {
    const photoDisplay = (
        <img src={url} alt={title} />
    );

    const videoDisplay = (
        <div className={styles.VideoWrapper}>
            <iframe
                src={url}
                title={`${title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );

    const mediaDisplay = mediaType === 'photo' ? photoDisplay : videoDisplay;

    return (
        <section className={styles.ProjectSection}>
            <div className={styles.Left}>
                <h2 className={styles.ProjectTitle}>{title}</h2>
                <p><strong>From:</strong> {from}</p>
                <p><strong>Date:</strong> {date}</p>
                <p>{desc}</p>
            </div>
            <div className={styles.Right}>
                {mediaDisplay}
            </div>
        </section>
    );
}

export default ProjectSection;