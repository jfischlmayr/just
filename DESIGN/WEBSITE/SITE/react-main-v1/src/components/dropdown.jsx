import React from 'react';
import '../css/dropdown.css';

const Dropdown = ({projects}) => {
    return (
        <div className='dropdown'>
            <div className='control'>
                <div className = 'selected-value'>Select Project...</div>
                <div className='arrow'/>
            </div>
            <div className='options'>
                {
                    projects.map((project) => (
                        <div className='option'>{project.projectname}</div>
                    ))}
            </div>
        </div>
    );
};

export default Dropdown;