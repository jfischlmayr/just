import React, {useState, useEffect, useRef} from 'react';
import {Button} from "./Button";
import '../css/ProjectComponent.css';

const ProjectForm = (props) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
           id: null,
           title: input,
           tasks: null
        });
        setInput('');
    }

    return (
        <div>
            <form className='project-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a project'
                    value={input}
                    name='text'
                    className='project-input'
                    onChange={handleChange}
                    ref={inputRef}
                />

                <Button onClick={handleSubmit} type="button" buttonStyle='btn--submit--solid' buttonSize='btn--small'>Add Project</Button>
            </form>
        </div>
    );
};

export default ProjectForm;