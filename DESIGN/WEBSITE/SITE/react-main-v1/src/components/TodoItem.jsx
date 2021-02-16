import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import * as AiIcons from 'react-icons/ai';


const TodoItem = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
       <div className={todo.done ? 'todo-row complete' : 'todo-row'} key={index}>
           <div key={todo.id} >
               {todo.name}
           </div>
           <div className='icons'>
               <AiIcons.AiOutlineCloseCircle
                   onClick={() => removeTodo(todo.id)}
                   className='delete-icon'
               />
               <AiIcons.AiOutlineCheckCircle
                   onClick={() => completeTodo(todo.id)}
                   className='delete-icon'
               />
           </div>
       </div>
    ));
};

export default TodoItem;