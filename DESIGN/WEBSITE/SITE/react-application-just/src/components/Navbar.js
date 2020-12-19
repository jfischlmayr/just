import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";
import OnlyLogo from "../images/OnlyLogo.svg";
import OnlyText from "../images/OnlyText.svg";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    let logoStyle = {
        marginLeft: '10%',
        position:'absolute',
        left:'20px',
        top:'20px'

    };

    let signUpButtonStyle = {
        borderBottom: 'none'
    };



    window.addEventListener('resize', showButton);
    return(
        <>
            <nav className = "navbar" >
                <div className = "navbar-container" >

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to="/home" className="navbar-logo" style={logoStyle} onClick={closeMobileMenu}>
                            <img src={OnlyLogo} alt="Logo"/>
                        </Link>
                        <li className='nav-item'>
                            <Link to='/calendar' className='nav-links' onClick={closeMobileMenu}>
                                Kalender
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/todo' className='nav-links' onClick={closeMobileMenu}>
                                Todo
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projekte
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                                Einstellungen
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-links' style={signUpButtonStyle} onClick={closeMobileMenu}>
                                {button && <Button buttonStyle='btn--outline'>EINLOGGEN</Button>}
                            </div>

                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar