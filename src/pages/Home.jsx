
import Header from './../containers/Header';
import Footer from './../containers/Footer';
import Hero from '../containers/Hero';
import heroImg from '/homeHeroImg.png';
import SectionTitle from '../components/SectionTitle';
import { Plus } from 'lucide-react';
import CTA from '../containers/CTA';
import FAQ from '../containers/FAQ';
import Testimonials from '../containers/Testimonials';
import OurServices from './../containers/OurServices';
import Portfolio from './../containers/Portfolio';



const title = {subtitle:"Web Development Agency",text:'Web Development helps for', highlight:'your business', afterText:""}

const buttonInfo = { text: "Explore Our Services", link: "/contact", class: "bg-primaryColor text-white mt-10" };

const desc = "We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth."


const aboutSection = {
    subtitle : "About Company",
    title : "We create modern websites and scalable digital solutions",
    extraClass : "max-w-170 mx-auto",
}

const whyChooseUsSection = {
    subtitle: "Why Choose Us",
    title: "Built Around Your Goals. Focused on Your Growth.",
    extraClass: "max-w-190 mx-auto",
}

const reasonsToChooseUs = [
    {
        number: "01",
        title: "Business-Focused Solutions",
        description: "We understand that a website is more than just a digital presence. We build solutions designed to attract the right audience, generate leads, and support long-term business growth.",
    },
    {
        number: "02",
        title: "Modern Technology",
        description: "We use modern development tools, frameworks, and industry best practices to create websites that are fast, secure, scalable, and easy to maintain.",
    },
    {
        number: "03",
        title: "User-Centered Design",
        description: "Every interface is designed with your customers in mind. We focus on intuitive navigation, responsive layouts, accessibility, and experiences that turn visitors into customers.",
    },
    {
        number: "04",
        title: "SEO-Ready Development",
        description: "We build with search visibility in mind—from technical performance and page structure to SEO-friendly content and optimization—helping your website compete in search results.",
    },
    {
        number: "05",
        title: "Transparent Communication",
        description: "You'll always know what's happening with your project. We maintain clear communication, provide regular updates, and keep the development process straightforward.",
    },
    {
        number: "06",
        title: "Long-Term Support",
        description: "Our work doesn't stop when your website goes live. We provide ongoing maintenance, optimization, and technical support to help your digital presence evolve with your business.",
    },
]

const Home = () => {
    return (
        <>
            <Header/>
            <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={heroImg}/>

            {/* About Company Section  */}
            <section className='bg-light-section dark:bg-gray-section'>
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

            <OurServices/>
            <Testimonials/>
            <Portfolio/>

            <section className='bg-light-section dark:bg-gray-section'>
                <div className='content-view'>
                    <div className='mx-auto max-w-230 text-center'>
                        <SectionTitle data={whyChooseUsSection} />
                        <p>
                            At PlanCodeDeploy, we don't just build websites—we create digital solutions that support your business goals. From strategy and design to development, SEO, and ongoing support, our team focuses on delivering measurable value at every stage.
                        </p>
                    </div>
                    <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {reasonsToChooseUs.map((reason) => (
                            <article
                                key={reason.number}
                                className='rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 hover:scale-105 duration-300 transition-all'
                            >
                                <span className='text-3xl font-semibold text-primaryColor'>
                                    {reason.number}
                                </span>
                                <h3 className='mt-4 text-xl font-semibold'>{reason.title}</h3>
                                <p className='mt-3 leading-relaxed'>{reason.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ/>
            <CTA/>
            <Footer/>
        </>
    );
};

export default Home;