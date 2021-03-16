import React from 'react';
import '../css/pages.css';
import '../css/calendar.css';
import CalendarComponent from "../components/CalendarComponent";


const Calendar = () => {
    return (
        <div className='calendar'>
            <h1>Calendar</h1>

            <div className='calendarWrapper'>
                <CalendarComponent/>

            </div>
        </div>
    );
};

export default Calendar;