import React, {useState} from 'react';
import Dropdown from "../components/dropdown";
import projects from '../json test data/projects.json';
import '../css/todo.css';
import TodoListComponent from "../components/TodoListComponent";

const Todo = () => {

    const [value, setValue] = useState(null)

    return (
        <div className='todo'>
            <h1>TODOS</h1>
            <div style={{width: 200}}>
                <Dropdown
                    prompt='Select project... '
                    options={projects}
                    id='id'
                    label='name'
                    value={value}
                    onChange={val => setValue(val)}
                />

                <div className='todoWrapper'>
                    <TodoListComponent/>
                </div>

            </div>
        </div>
    );
};
export default Todo;

