import { ChevronDown, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { useState } from 'react';

const navLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-base transition-colors duration-200 ${isActive
        ? 'bg-blue-50 text-blue-600 font-semibold dark:bg-gray-700 dark:text-blue-400'
        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400'}`;

const services = [
    'Web Development',
    'Web Design',
    'Content Writing',
    'SEO',
];

const SideBar = ({ isOpen, onClose }) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            <aside className={`absolute right-0 top-0 h-full w-72 bg-white p-5 shadow-xl transition-transform duration-300 dark:bg-gray-900 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='mb-6 flex items-center justify-between'>
                    <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>Menu</h2>
                    <button
                        type='button'
                        onClick={onClose}
                        className='rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                        aria-label='Close Menu'
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className='flex flex-col gap-2'>
                    <NavLink to='/' end onClick={onClose} className={navLinkClass}>Home</NavLink>

                    <div>
                        <button
                            type='button'
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className='flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400'
                        >
                            <span>Services</span>
                            <ChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} size={18} />
                        </button>

                        {isServicesOpen && (
                            <div className='mt-2 ml-3 flex flex-col gap-1 border-l border-gray-200 pl-3 dark:border-gray-700'>
                                {services.map((service) => (
                                    <NavLink
                                        key={service}
                                        to='/services'
                                        onClick={onClose}
                                        className='rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400'
                                    >
                                        {service}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to='/about' onClick={onClose} className={navLinkClass}>About</NavLink>
                    <NavLink to='/contact' onClick={onClose} className={navLinkClass}>Contact</NavLink>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;