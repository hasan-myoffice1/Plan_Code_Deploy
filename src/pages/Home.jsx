
import Header from './../containers/Header';
import Footer from './../containers/Footer';
import Hero from '../containers/Hero';
import heroImg from '/homeHeroImg.png';
import SectionTitle from '../components/SectionTitle';
import { Plus } from 'lucide-react';



const title = {subtitle:"Web Development Agency",text:'Web Development helps for', highlight:'your business', afterText:""}

const buttonInfo = { text: "Explore Our Services", link: "/contact", class: "bg-primaryColor text-white mt-10" };

const desc = "We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth."


const aboutSection = {
    subtitle : "About Company",
    title : "We create modern websites and scalable digital solutions",
    extraClass : "max-w-170 mx-auto",
}

const Home = () => {
    return (
        <>
            <Header/>
            <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={heroImg}/>
            {/* About Company Section  */}
            <section className='bg-gray-section'>
                <div className="content-view">
                    <div  className="max-w-230 m-auto text-center">
                        <SectionTitle data={aboutSection}/>
                        <p>Your website is more than an online presence—it is your most valuable digital asset. At PlanCodeDeploy, we build custom websites, business platforms, and web applications that combine exceptional design with reliable technology. Every project is developed with performance, security, scalability, and long-term business growth in mind, helping companies establish a stronger digital presence and deliver better customer experiences.</p>
                    </div>
                    <div className='flex flex-wrap justify-around pt-15 gap-10'>
                        <div className='text-center max-w-70'>
                            <span className='text-7xl flex font-semibold justify-center'>37<Plus className='text-primaryColor'/></span>
                            <h3 className='text-xl mt-4'>Projects Successfully Delivered</h3>
                        </div>
                        <div className='text-center max-w-60 '>
                            <span className='text-7xl flex font-semibold justify-center'>09<Plus className='text-primaryColor'/></span>
                            <h3 className='text-xl mt-4'>Years of Industry Experience</h3>
                        </div>
                        <div className='text-center max-w-60'>
                            <span className='text-7xl flex font-semibold justify-center'>12<Plus className='text-primaryColor'/></span>
                            <h3 className='text-xl mt-4'>Businesses Worldwide Served</h3>
                        </div>
                    
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Home;