import React, {useState} from 'react';
import * as AiIcons from 'react-icons/ai';


const TodoItem = ({todos, completeTodo, removeTodo}) => {

    console.log(todos);

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