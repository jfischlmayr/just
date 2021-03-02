import React, {useState, useEffect} from 'react';
import TodoForm from "./TodoForm";
import '../css/TodoListComponent.css';
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoListComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks', {})
            .then(res => {
                console.log(res);
                setTodos(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])




    const addTodo = todo => {
        console.log(todo);
        console.log(todo.name);
        console.log(JSON.stringify(todo));

        axios.post('http://localhost:8080/api/tasks/', JSON.stringify(todo), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                const newTodos = [todo.name, ...todos]
                setTodos(newTodos);
                window.location.reload();
            })
            .catch(err =>{
                console.log(err)
            })

        console.log('added task');
    };

    const removeTodo = id => {
        //const removeArr = [...todos].filter(todo => todo.id !== id);
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(res => {
                console.log(res);
                const removeArr = [...todos].filter(todo => todo.id !== id);
                setTodos(removeArr);
            })
            .catch(err =>{
                console.log(err)
            })

        console.log('removed task');
    };

    const completeTodo = id => {
       let updatedTodos = todos.map(todo => {
           if(todo.id === id){
               const tempTodo = {
                   id: id,
                   name: todo.name,
                   done: !todo.done,
                   memberid: todo.memberid,
                   projectid: todo.projectid
               }
               axios
                   .put(`http://localhost:8080/api/tasks/${todo.id}`, tempTodo)
                   .then(res => {
                       console.log(res);
                       window.location.reload();
                   })
                   .catch(err => {
                       console.log(err)
                   })

           }
           return todo;
        });

        console.log(updatedTodos);
        setTodos(updatedTodos);
        console.log('completed task');
    }

    return (
        <div className='todoList'>
            <TodoForm onSubmit={addTodo}/>
            <TodoItem todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            />
        </div>
    );

};

export default TodoListComponent;
