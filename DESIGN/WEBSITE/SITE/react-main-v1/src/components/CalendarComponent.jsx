import React, {useState, useEffect} from 'react';
import '../css/CalendarComponent.css';
import axios from "axios";
import TodoListComponent from "./TodoListComponent";

const CalendarComponent = () => {
    const [calendars, setCalendars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/calendar', {})
            .then(res => {
                console.log(res);
                setCalendars(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])}

    const addCalendar = calendar => {
        console.log(calendar);
        console.log(calendar.name);
        console.log(JSON.stringify(calendar));

        axios.post('http://localhost:8080/api/calendar/', JSON.stringify(calendar), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                const newCalendar = [calendar.name, ...calendars]
                setCalendars(newCalendar);
                window.location.reload();
            })
            .catch(err =>{
                console.log(err)
            })

        console.log('added');
    };

export default CalendarComponent;
