import React, {useState, useEffect} from 'react';
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import '../css/ProjectComponent.css';

const ProjectComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/project', {})
            .then(res => {
                console.log(res);
                console.log('no error');
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log('error beginning');
            })
    }, [])


    const addProject = project => {
        console.log('bubub');
        console.log(project);
        console.log(JSON.stringify(project));
        axios.post('http://localhost:8080/api/project/', JSON.stringify(project),{
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(res => {
                console.log(res);
                const newProjects = [project.name, ...projects]
                setProjects(newProjects);
                window.location.reload();
            })
            .catch(err =>{
                console.log(err);
                console.log('fehler');
            })
        console.log('added project');
    }

    const removeProject = id =>{
        axios.delete(`http://localhost:8080/api/project/${id}`)
            .then(res =>{
                console.log(res);
                const removeArr = [...projects].filter(project => project.id !== id);
                setProjects(removeArr);
            })
            .catch(err =>{
                console.log(err)
            })

        console.log('Deleted Project');
    }

    return (
        <div className='projectOverview'>
            <ProjectForm onSubmit={addProject}/>
            <ProjectCard projects={projects} removeProject={removeProject}/>
        </div>
    );
};

export default ProjectComponent;