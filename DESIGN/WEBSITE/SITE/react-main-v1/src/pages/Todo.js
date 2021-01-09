import React, {useState} from 'react';
import Dropdown from "../components/dropdown";
import projects from '../json test data/projects.json'

const Todo = () => {

    const [value, setValue] = useState(null)

    return (
        <div className='todo'>
            <h1>TODOS</h1>
            <div style={{width: 200}}>
                <Dropdown
                    prompt='Select project... '
                    options={projects}
                    value={value}
                    onChange={val => setValue(val)}
                />

            </div>
        </div>
    );
};
export default Todo;

