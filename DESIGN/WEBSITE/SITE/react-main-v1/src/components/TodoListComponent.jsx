import React, {useState, Component} from 'react';
import TodoForm from "./TodoForm";
import '../css/TodoListComponent.css';
import TodoItem from "./TodoItem";



const TodoListComponent = () => {

    const [todos, setTodos] = useState([]);

    /*const componentDidMount = () => {
        fetch('http://localhost:8080/api/todo')
            .then(res => res.json())
            .then((data) => {
                this.setState({todos: data})
            }).catch(console.log)
    }
*/
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log('added todo');
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
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
