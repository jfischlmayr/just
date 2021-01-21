import React, {useState, useEffect} from 'react';
import TodoForm from "./TodoForm";
import '../css/TodoListComponent.css';
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoListComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/todo', {})
            .then(res => {
                console.log(res);
                setTodos(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])




    /*const [] = useAxios({
    });
    /*useEffect(async () => {
        const response = await fetch("http://localhost:8080/api/todo");
        const data = await response.json();
        const item = data.results[0];
        console.log("fetch");
    }, []);*/


    const addTodo = todo => {
        console.log(todo);
        console.log(JSON.stringify(todo));

        axios.post('http://localhost:8080/api/todo', todo, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                const newTodos = [todo, ...todos]
                setTodos(newTodos);
            })
            .catch(err =>{
                console.log(err)
            })
        console.log('added todo');
    };

    const removeTodo = id => {
        //const removeArr = [...todos].filter(todo => todo.id !== id);
        axios.delete(`http://localhost:8080/api/todo/${id}`)
            .then(res => {
                console.log(res);
                const removeArr = [...todos].filter(todo => todo.id !== id);
                setTodos(removeArr);
            })
            .catch(err =>{
                console.log(err)
            })

        console.log('removed todo');
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
           if(todo.id === id){
               todo.isComplete = !todo.isComplete;
           }

           return todo;
        });
        setTodos(updatedTodos);
        console.log('completed todo');
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
