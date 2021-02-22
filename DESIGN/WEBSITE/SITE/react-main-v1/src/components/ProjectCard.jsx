import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '../css/ProjectCard.css';

const ProjectCard = ({projects, removeProject}) => {


    console.log(projects);


    return projects.map((project, index) =>(

            <div className='project-card'>

                <div key={project.id}>
                    <div className='project-title'>
                        {project.title}
                    </div>
                    {"\n"}
                    <div className='project-body'>
                        Projektmitglied 1: null
                    </div>

                </div>
                <AiIcons.AiOutlineCloseCircle
                        onClick={() => removeProject(project.id)}
                        className='icons'
                />



            </div>


    ));


};

export default ProjectCard;