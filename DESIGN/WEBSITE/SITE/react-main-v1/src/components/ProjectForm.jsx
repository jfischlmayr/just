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
           id: 0,
           name: input,
           todoid: null,
           memberid: null
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

                <Button onClick={handleSubmit} type="button" buttonStyle='btn--submit--solid' buttonSize='btn--small'>Add </Button>
            </form>
        </div>
    );
};

export default ProjectForm;