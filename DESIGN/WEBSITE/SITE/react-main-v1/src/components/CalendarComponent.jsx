import React, {useState, useEffect} from 'react';
import '../css/CalendarComponent.css';
import axios from "axios";

const CalendarComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/calendar', {})
            .then(res => {
                console.log(res);
                setTodos(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])}
