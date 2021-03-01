import React from 'react';
import '../css/pages.css';
import '../css/projects.css';
import ProjectComponent from "../components/ProjectComponent";

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>

            <div className='projectWrapper'>
                <ProjectComponent />

            </div>
        </div>
    );
};

export default Projects;