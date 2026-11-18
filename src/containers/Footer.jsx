import React from 'react';
import footerLogo from '/footerLogo.png';
import { Link } from 'react-router';
import { socialIcons, theCompanyLinks, serviceLinks, otherLinks } from './FooterLinks';


const Footer = () => {
    return (
        <footer className='bg-gray-900 py-20'>
            <div className="content-view grid lg:grid-cols-5 gap-10 text-gray-400 items-baseline">
                <div className='md:col-span-2'>

                    <img src={footerLogo} alt="Company logo" className='max-w-50' />
                    <p className='mt-5'>Plan Code Deploy is a professional web development agency delivering modern websites, custom web applications, UI/UX design, and digital solutions for businesses across the USA, UK, and Europe.</p>
                    <h3 className="text-gray-300 text-[20px] mt-6 mb-3">Contact</h3>
                    <a href="mailto:codeplandeploy@gmail.com" className="hover:text-gray-100">info@plancodedeploy.com</a>
                    <div className="social-links flex gap-5 mt-3">
                        {socialIcons.map((social) => (
                            <a
                            key={social.label}
                            href={social.link}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={social.icon} alt={social.label} className='size-7'/>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-gray-300 text-[20px] mb-5">The Company</h2>
                    <ul>
                        {theCompanyLinks.map(({ label, path }) => (
                        <li key={path} className='hover:text-gray-200'>
                            <Link to={path}>{label}</Link>
                        </li>
                        ))}
                    </ul>

                    <ul className='mt-4'>
                        {otherLinks.map(({ label, path }) => (
                        <li key={path} className='hover:text-gray-200'>
                            <Link to={path}>{label}</Link>
                        </li>
                        ))}
                    </ul>

                </div>
                <div>
                    <h2 className="text-gray-300 text-[20px] mb-5">Services</h2>
                    <ul>
                        {serviceLinks.map(({ label, path }) => (
                        <li key={path} className='hover:text-gray-200'>
                            <Link to={path}>{label}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-secondColor text-[20px] mb-4">Payment Methods</h2>
                    <div className='flex gap-3'>
                        <a href='#' className='w-20 h-10 bg-gray-800 rounded'></a>
                        <a href='#' className='w-20 h-10 bg-gray-800 rounded'></a>
                        <a href='#' className='w-20 h-10 bg-gray-800 rounded'></a>
                    </div>
                </div>
            </div>
    
            <p className="max-w-area mx-auto text-center border-t border-gray-700 pt-10 mt-10">© 2026 PlanCodeDeploy. All Rights Reserved.</p>
            
        </footer>
    );
};

export default Footer;