import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '../css/ProjectCard.css';

const ProjectCard = ({projects, removeProject}) => {





    return projects.map((project, index) =>(
        <div className='project-card' key={index}>
            <div key={project.id}>
                {project.title}
            </div>
            <div className='icons'>
                <AiIcons.AiOutlineCloseCircle
                    onClick={() => removeProject(project.id)}
                />
            </div>
        </div>
    ));
};

export default ProjectCard;