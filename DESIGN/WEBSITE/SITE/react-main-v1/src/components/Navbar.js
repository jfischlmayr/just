import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import {SidebarData } from './SidebarData';
import '../css/Navbar.css';
import {IconContext} from 'react-icons';

function Navbar(){
    const [sidebar] = useState(true)
    return(
        <>
        <IconContext.Provider value={{color: 'white'}}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
