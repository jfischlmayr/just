import React, {useState, useEffect, useRef} from 'react';
import {Button} from "./Button";

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
       inputRef.current.focus();
    });


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: 0,
            name: input,
            done: false,
            memberid: null,
            projectid: null
        });

        setInput('');
    };

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type='text'
                       placeholder='Add a todo'
                       value={input}
                       name='text'
                       className='todo-input'
                       onChange={handleChange}
                       ref={inputRef}
                />

                <Button onClick={handleSubmit} type="button" buttonStyle='btn--submit--solid' buttonSize='btn--small'>Add Todo</Button>
            </form>
        </div>
    );
};

export default TodoForm;
