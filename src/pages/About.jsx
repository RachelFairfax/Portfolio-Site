import React from 'react';
import Introduction from '../components/About/Introduction';
import Skills from '../components/About/Skills';
import Timeline from '../components/About/Timeline';

function About() {
    return (
    <>
        <h1>About</h1>
        <Introduction />
        <Skills />
        <Timeline />
    </>
    );
}

export default About;