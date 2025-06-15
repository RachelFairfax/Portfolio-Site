import React from 'react';
import ProjectSection from '../../components/Projects/ProjectSection.jsx';
import projectsData from '../../components/Projects/ProjectsData.jsx'
import styles from './Projects.module.css'

function Projects() {
    return (
    <div className={styles.ProjectPage}>
        <h1 className={styles.Title}>Projects</h1>
        <div>
            {projectsData.map((project, index) => (
                <ProjectSection
                key={index}
                title={project.title}
                date={project.date}
                from={project.from}
                desc={project.desc}
                mediaType={project.mediaType}
                url={project.url}
                />
            ))}
        </div>
    </div>
);
}

export default Projects;