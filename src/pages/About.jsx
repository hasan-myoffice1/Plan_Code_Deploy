import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import HeroAbout from '/src/assets/aboutpagehero.png';
import AboutSection from '/src/assets//aboutpage.png';
import CountdownSec from './../containers/CountdownSec';
import CTA from './../containers/CTA';
import WorkProcess from './../containers/WorkProcess';
import Testimonials from './../containers/Testimonials';
import SuperTitle from '../components/SuperTitle';

<img src="/src/assets//aboutpage.png" alt="" />

const title = {subtitle:"about Plan Code Deploy",text:'Building reliable ', highlight:'Digital Solution', afterText:"for ambitious businesses"}

const buttonInfo = { text: "Our Services", link: "/services", class: "bg-primaryColor text-white mt-10" };

const desc = "At PlanCodeDeploy, we combine strategy, design, and development to create modern websites and web applications that help businesses strengthen their online presence, improve customer experiences, and achieve sustainable growth."

const About = () => {
    return (
         <>
           <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={HeroAbout}/>

           {/* <!-- About Company Section --> */}
            <section className="py-20 px-4 lg:px-0 bg-light-section dark:bg-gray-section">
                <div className="content-view grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <img src={AboutSection} alt="Plan Code Deploy team" className="h-auto w-full rounded-2xl object-cover" />
                    </div>
                    <div className="mt-10 rounded-2xl border-l-2 border-primaryColor bg-white px-5 py-6 lg:-ml-45 lg:mt-0 lg:p-15 dark:bg-night">
                        <SuperTitle subtitle="about the company" />
                        <h2 className="text-2xl md:text-3xl mt-3 mb-5 font-semibold leading-tight">Your trusted
                        partner for modern web development and digital innovation</h2>
                        <p className="dark:text-gray-400">PlanCodeDeploy is a full-service web development agency dedicated to helping businesses succeed in an increasingly digital world. We specialize in designing and developing high-performance websites, scalable web applications, and intuitive user experiences that align with your business goals.</p>
                    </div>
                </div>
            </section>
            {/* <!-- About Company End --> */}
            
            <CountdownSec/>
            <WorkProcess/>
            <Testimonials/>
            <CTA/>

           <Footer/>
        </>
    );
};

export default About;