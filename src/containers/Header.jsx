import { Moon, Menu } from "lucide-react";
import Nav from './../components/Nav';
import logo from '/logo.png'
import Button from './../components/Button';


const Header = () => {
    const buttonInfo = {text:"Free Quote", link: "/contact", class:"bg-blue-700 text-white hidden lg:block"};
    return (
        <header className='bg-gray-600 text-white py-2'>
            <div className='content-view hidden md:flex flex-wrap justify-between items-center mx-auto'>
                <img src={logo} alt="plan code deploy logo" title='PCD Company Logo' className='max-w-50' />  
                <Nav/>
                <div className='flex gap-5 items-center'>
                    <Moon />
                    <Button data={buttonInfo}/>
                    <Menu className='md:hidden' />
                </div>
            </div>
            {/* For Mobile View */}
            <div className='content-view md:hidden flex flex-wrap justify-between items-center mx-auto'>
                <img src={logo} alt="plan code deploy logo" title='PCD Company Logo' className='max-w-40' />  
                <div className='flex gap-5 items-center'>
                    <Moon />
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;