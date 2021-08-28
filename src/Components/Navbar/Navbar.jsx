import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__item'>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className='nav__item' >
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to='/music'>Music</NavLink>
            </div >
            <div className='nav__item'>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
