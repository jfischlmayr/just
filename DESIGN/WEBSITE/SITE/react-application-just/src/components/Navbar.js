import React, { useState } from 'react'
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

    window.addEventListener('resize', showButton);
    return(
        <>
            <nav className = "navbar" >
                <div className = "navbar-container" >
                    <Link to="/" className="navbar-logo">
                        <img src={OnlyLogo} alt="Logo"/>
                        <img src={OnlyText} alt="Logo"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Einloggen
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>EINLOGGEN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar