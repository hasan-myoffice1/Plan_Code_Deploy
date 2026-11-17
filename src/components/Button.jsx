import React from 'react';
import { Link } from 'react-router';

const Button = ({ data = {} }) => {
    const text = data.text || 'Learn More';
    const link = data.link || '/';
    const bclass = data.class || 'bg-blue-700 text-white';

    return (
        <button className={`${bclass} px-7 py-3 transition-all hover:translate-y-1 duration-300 rounded-full`}>
            <Link to={link}>{text}</Link>
        </button>
    );
};

export default Button;