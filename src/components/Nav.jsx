import { ChevronDown, Menu } from "lucide-react";
import { NavLink } from 'react-router';
const Nav = () => {
    return (
        <nav className='flex flex-wrap gap-10'>
            <NavLink to="/">Home</NavLink>
            <div className="flex gap-2">
                <NavLink to="/services">Services</NavLink><ChevronDown />
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Nav;