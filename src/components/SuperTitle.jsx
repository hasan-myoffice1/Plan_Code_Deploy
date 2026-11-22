import { motion } from "motion/react";
const SuperTitle = ({ subtitle }) => {

    const subTitle = {
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
        <motion.div className="text-sm border inline-block dark:border-gray-700 border-gray-200 rounded-full px-4 py-1 uppercase leading-6" variants={{ ...subTitle }}> {subtitle}</motion.div >
    );
};

export default SuperTitle;