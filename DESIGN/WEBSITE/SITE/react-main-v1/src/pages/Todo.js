import React from 'react';
import Dropdown from "../components/dropdown";
import projects from '../json test data/projects.json'

const Todo = () => {
    return (
        <div className='todo'>
            <h1>TODOS</h1>
            <div style={{width: 200}}>
                <Dropdown projects={projects}/>
            </div>
        </div>
    );
};
export default Todo;

