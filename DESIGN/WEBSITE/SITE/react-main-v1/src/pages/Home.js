import React from 'react';
import '../css/home.css';
import '../css/pages.css';
import {Button} from '../components/Button';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';


function Home() {
    return (
        <div className='home'>
            <h1>Willkommen!</h1>
            <div className='button-area'>
                <Button onClick={() => { window.location.href = "todo"}}><HiIcons.HiOutlineClipboardList /></Button>
                <Button onClick={() => {window.location.href = "projects"}}><AiIcons.AiFillProject /></Button>
                <Button onClick={() => {window.location.href = "calendar"}}><HiIcons.HiCalendar/></Button>
                <Button onClick={() => {window.location.href = "settings"}}><AiIcons.AiFillSetting/></Button>

            </div>
            <h1>Anstehende Tasks</h1>
            <h1>Anstehende Termine</h1>
        </div>
    );
}

export default Home;

