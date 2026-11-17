import React from 'react';
import { Link } from 'react-router';

const Button = () => {
    return (
        <button className='bg-blue-700 text-white px-7 py-3 transition-all hover:translate-y-1 duration-300 rounded-full'>
           <Link to='/'>Click</Link> 
        </button>
    );
};

export default Button;