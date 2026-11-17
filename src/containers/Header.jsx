import React from 'react';
import { NavLink } from 'react-router';
import { Moon, ChevronDown } from "lucide-react";

const Header = () => {
    return (
        <header className='bg-gray-600 p-3 flex justify-center gap-20 text-white'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services" className={'flex gap-3'}>Services<ChevronDown /></NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Moon />
        </header>
    );
};

export default Header;