
import { Menu } from "lucide-react";
import Nav from './../components/Nav';
import Button from './../components/Button';
import ThemeToggle from './../components/ThemeToggle';
import Logo from "../components/Logo";

const Header = () => {
    

    const buttonInfo = { text: "Free Quote", link: "/contact", class: "bg-blue-700 text-white hidden lg:block" };

    return (
        <header className=' py-2 transition-colors'>
            <div className='content-view hidden md:flex flex-wrap justify-between items-center mx-auto'>
                <Logo data={'max-w-60'}/>
                <Nav />
                <div className='flex gap-5 items-center'>
                    <ThemeToggle />
                    <Button data={buttonInfo} />
                    <Menu className='md:hidden' />
                </div>
            </div>
            {/* For Mobile Screen */}
            <div className='content-view md:hidden flex flex-wrap justify-between items-center mx-auto'>
                <Logo data={'max-w-30'}/>
                <div className='flex gap-5 items-center'>
                    <ThemeToggle />
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;