import React, { useRef, useState, useEffect } from 'react';
import styles from './Skills.module.css';

// Import logo images
import htmlLogo from '../../assets/logos/html.png';
import cssLogo from '../../assets/logos/css.png';
import tailwindLogo from '../../assets/logos/tailwind.png';
import javascriptLogo from '../../assets/logos/javascript.png';
import typescriptLogo from '../../assets/logos/typescript.png';
import pythonLogo from '../../assets/logos/python.png';
import sqlLogo from '../../assets/logos/sql.png';
import jiraLogo from '../../assets/logos/jira.png';
import vscodeLogo from '../../assets/logos/vscode.png';
import githubLogo from '../../assets/logos/github.png';

// Map skills to image imports
const skillToLogoMap = {
    HTML: 'html',
    CSS: 'css',
    'Tailwind CSS': 'tailwind',
    JavaScript: 'javascript',
    TypeScript: 'typescript',
    Python: 'python',
    SQL: 'sql',
    Jira: 'jira',
    VSCode: 'vscode',
    GitHub: 'github',
};

const skillToLogoImage = {
    html: htmlLogo,
    css: cssLogo,
    tailwind: tailwindLogo,
    javascript: javascriptLogo,
    typescript: typescriptLogo,
    python: pythonLogo,
    sql: sqlLogo,
    jira: jiraLogo,
    vscode: vscodeLogo,
    github: githubLogo,
};

function Skills() {
    const logoRefs = useRef({});
    const logosContainerRef = useRef();

    const [hoveredSkill, setHoveredSkill] = useState(null);

    const allLogos = Object.values(skillToLogoMap);
    const loopedLogos = [...allLogos, ...allLogos, ...allLogos]; //Create illusion of endless looping logos

    useEffect(() => {
        if (logosContainerRef.current) {
            const container = logosContainerRef.current;
            const middleIndex = allLogos.length; // start of 2nd loop
            const middleLogo = logoRefs.current[loopedLogos[middleIndex]];
            middleLogo?.scrollIntoView({ inline: 'center', behavior: 'instant', block: 'nearest' });
        }
    }, []);

    const scrollToLogo = (skillName) => {
        const logoKey = skillToLogoMap[skillName];
        const logoElements = loopedLogos
            .map((key, index) => ({ key, index }))
            .filter(obj => obj.key === logoKey);
        
        // Use the one in the middle group (2nd instance)
        const targetIndex = logoElements[Math.floor(logoElements.length / 2)].index;
        const logoElement = logoRefs.current[`${logoKey}-${targetIndex}`];

        if (logoElement && logosContainerRef.current) {
            logoElement.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    };

    const handleMouseEnter = (skill) => {
        setHoveredSkill(skill)
        scrollToLogo(skill)
    }

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    }




    return (
        <section className={styles.Container}>   
            <h1 className={styles.Title}>Skills</h1>
            <section className={styles.Body}> 
                <section className={styles.Left}>  
                    <p className={styles.Subtitle}>My Soft Skills:</p>
                    <ul className={styles.List}>
                        <li className={styles.Item}>Presenting</li>
                        <li className={styles.Item}>Communication</li>
                        <li className={styles.Item}>Teamwork</li>
                        <li className={styles.Item}>Initiative</li>
                        <li className={styles.Item}>Problem-solving</li>
                        <li className={styles.Item}>Agile Methodologies</li>
                        <li className={styles.Item}>Time Management</li> 
                        <li className={styles.Item}>Priority Management</li>                       
                        <li className={styles.Item}>Stakeholder Engagement</li>
                    </ul>
                </section>

                <section className={styles.Right}>
                    <p className={styles.Subtitle}>My Competencies:</p>
                    <ul className={styles.List}>
                        {Object.keys(skillToLogoMap).map((skill) => (
                            <li
                                key={skill}
                                className={styles.Item}
                                onMouseEnter={() => handleMouseEnter(skill)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
            </section>

            <section
                className={styles.ScrollingImages}
                ref={logosContainerRef}
            >
                <div className={styles.LogosRow}>
                    {loopedLogos.map((logoKey, index) => (
                        <img
                            key={`${logoKey}-${index}`}
                            ref={(el) => (logoRefs.current[`${logoKey}-${index}`] = el)}
                            src={skillToLogoImage[logoKey]}
                            alt={`${logoKey} logo`}
                            className={`${styles.Logo} ${
                                hoveredSkill && skillToLogoMap[hoveredSkill] === logoKey ? styles.Active : styles.Faded
                            }`}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Skills;