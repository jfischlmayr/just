import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HiIcons.HiHome />,
        cName: 'nav-text'
    },
    {
        title: 'Todo',
        path: '/todo',
        icon: <HiIcons.HiOutlineClipboardList />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <HiIcons.HiCalendar/>,
        cName: 'nav-text'
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <AiIcons.AiFillSetting/>,
      cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <HiIcons.HiOutlineLogout />,
        cName: 'nav-text'
    }
];