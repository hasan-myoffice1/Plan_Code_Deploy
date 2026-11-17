import { ChevronDown } from "lucide-react";
import { NavLink } from 'react-router';
import { useState } from 'react';

const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${isActive
        ? 'text-blue-500 font-semibold underline underline-offset-8'
        : 'text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400'}`;

const services = [
    'Web Development',
    'Web Design',
    'Content Writing',
    'SEO',
];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex flex-wrap items-center gap-10'>
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>

            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-gray-700 transition-colors hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                    aria-expanded={isOpen}
                >
                    <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                    <ChevronDown className='text-current' />
                </button>

                {isOpen && (
                    <div className='absolute left-0 top-full mt-3 min-w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800'>
                        {services.map((service) => (
                            <NavLink
                                key={service}
                                to="/services"
                                onClick={() => setIsOpen(false)}
                                className='block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400'
                            >
                                {service}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>

            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
    );
};

export default Nav;