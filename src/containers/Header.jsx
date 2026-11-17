
import { useState } from 'react';
import { Menu } from "lucide-react";
import Nav from './../components/Nav';
import Button from './../components/Button';
import ThemeToggle from './../components/ThemeToggle';
import Logo from "../components/Logo";
import SideBar from './../components/SideBar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const buttonInfo = { text: "Free Quote", link: "/contact", class: "bg-blue-700 text-white hidden lg:block" };

    return (
        <>
            <header className='py-2 transition-colors'>
                <div className='content-view hidden md:flex flex-wrap justify-between items-center mx-auto'>
                    <Logo data={'max-w-60'} />
                    <Nav />
                    <div className='flex gap-5 items-center'>
                        <ThemeToggle />
                        <Button data={buttonInfo} />
                    </div>
                </div>

                <div className='content-view md:hidden flex flex-wrap justify-between items-center mx-auto'>
                    <Logo data={'max-w-30'} />
                    <div className='flex gap-5 items-center'>
                        <ThemeToggle />
                        <button
                            type='button'
                            onClick={() => setIsSidebarOpen(true)}
                            className='rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                            aria-label='Open Menu'
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>

            <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
};

export default Header;