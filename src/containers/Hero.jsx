
import Button from '../components/Button';
const Hero = () => {
    return (
        <section className='lg:h-180 text-center bg-light-section my-20'>
            <div className='content-view border border-gray-200 m-auto'>
                <img src="/public/favicon.svg" alt="" className='m-auto' />
                <h2 className="text-xl font-bold text-center lg:w-170 m-auto mt-20">hello world, I am Saimun Al Bashar A Web developer. Now i Start a new Project, name Plan code deploy. This is our Company Website.</h2>
                <p className='lg:w-140 m-auto my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam, error nulla non odit libero tempora repudiandae recusandae iste porro.</p>
                <Button/>
            </div>
        </section>
    );
};

export default Hero;