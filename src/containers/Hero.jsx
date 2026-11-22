
import { Mail, Mouse } from 'lucide-react';
import Button from '../components/Button';
import SuperTitle from './../components/SuperTitle';
import { motion } from 'motion/react';



const Hero = ({ data, btnData, descText, heroImg }) => {

    // Animate Code
    const item = {
        hidden: {
            opacity: 0,
            y: 135
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    }

    return (
        <section className='md:h-210 flex items-center' id='#top'>
            <div className="content-view grid md:grid-cols-2 items-center">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.5
                            }
                        }
                    }}
                >
                    <SuperTitle subtitle={data.subtitle} />

                    <motion.h1 className='text-title-h1 mb-6 lg:leading-16 leading-normal font-semibold mt-3' variants={item}>{data.text} <span className="text-primaryColor">{data.highlight} </span>{data.afterText} </motion.h1>

                    <motion.p className='dark:text-gray-400' variants={item}>{descText}</motion.p>
                    <Button data={btnData} />
                    <motion.a
                        href="mailto:info@plancodedeploy.com"
                        aria-label="Email info@plancodedeploy.com"
                        className="flex lg:mt-20 mt-10 items-center gap-3 text-sm hover:text-primaryColor transition-all"
                        variants={item}
                    >
                        <Mail className="size-5" aria-hidden="true" />
                        <span>info@plancodedeploy.com</span>
                    </motion.a>
                </motion.div>
                <motion.div className='sm:p-20 mt-10 md:mt-0'
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        scale: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <img src={heroImg} alt={data.subtitle} className='w-full h-auto' />
                </motion.div>
            </div>

            <a href="#top" className='fixed bottom-10 right-20' title='go to top'><Mouse className='size-9 text-gray-500' /></a>

        </section>
    );
};

export default Hero;