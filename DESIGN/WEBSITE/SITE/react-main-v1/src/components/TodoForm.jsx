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
        var random = Math.floor(Math.random() * 1000000);
        props.onSubmit({
            id: random,
            text: input
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

                <Button onClick={handleSubmit} type="button" buttonStyle='btn--primary--solid' buttonSize='btn--small'>Submit Todo</Button>
            </form>
        </div>
    );
};

export default TodoForm;

//<button>add</button>
//<Button onClick={handleSubmit} type="button" buttonStyle='btn--primary--solid' buttonSize='btn--small'>Submit Todo</Button>