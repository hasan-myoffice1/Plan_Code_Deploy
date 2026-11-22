import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const Button = ({ data = {} }) => {
    const text = data.text || 'Learn More';
    const link = data.link || '/';
    const bclass = data.class || 'bg-primaryColor text-white';

    const btnAnimate = {
        hidden: {
            opacity: 0,
            y: 120
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.button className={`${bclass} px-7 py-3 transition-all hover:translate-y-1 duration-300 rounded-full`}
            variants={{ ...btnAnimate }}
        >
            <Link to={link}>{text}</Link>
        </motion.button>
    );
};

export default Button;