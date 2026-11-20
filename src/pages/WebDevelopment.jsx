
import webDevImg from '/src/assets/aboutpagehero.png';
import Hero from '../containers/Hero';
import Header from './../containers/Header';
import Footer from './../containers/Footer';
import CTA from '../containers/CTA';
import Portfolio from './../containers/Portfolio';
import SectionTitle from '../components/SectionTitle';
import { CircleCheck, PanelsTopLeft, Server, Database } from 'lucide-react';


const WebDevelopment = () => {
     const title = {subtitle:"web development",text:'Custom', highlight:' web development', afterText:"solutions built for growth"}

    const buttonInfo = { text: "our all Services", link: "/services", class: "bg-primaryColor text-white mt-10" };

    const desc = "We design and develop fast, secure, and scalable websites and web applications that help businesses improve customer experiences, streamline operations, and achieve long-term digital success."

    const aboutSection = {
        subtitle : "services",
        title : "Our Web Development Technologies",
        extraClass : "max-w-170 mx-auto",
    }

    const applicationSection = {
        subtitle: "web application development",
        title: "Web Application Development Services",
        extraClass: "max-w-190 mx-auto",
    }

    const technologies = [
        {
            number: "01",
            title: "Frontend",
            descriptions: ["React, Vue.js, Angular, Next.js, Nuxt.js"],
            icon : <PanelsTopLeft />
        },
        {
            number: "02",
            title: "Backend",
            descriptions: [
                "Node.js, Python, PHP, Ruby, Java",
            ],
            icon: <Server />
        },
        {
            number: "03",
            title: "Databases",
            descriptions: ["MongoDB, MySQL, PostgreSQL, Firebase"],
            icon : <Database />
        },
    ];

    const applicationServices = [
        {
            number: "01",
            title: "Responsive Web Design",
            description: "Deliver seamless user experiences across desktops, tablets, and smartphones with fully responsive websites built for performance.",
            features: [
                "Responsive Layouts",
                "Mobile-First Development",
                "Optimized Images & Media",
                "Cross-Browser Compatibility",
            ],
        },
        {
            number: "02",
            title: "Progressive Web Apps",
            description: "Create app-like web experiences with offline functionality, push notifications, and lightning-fast performance.",
            features: [
                "Push Notifications",
                "Offline Functionality",
                "Fast Page Loading",
                "Home Screen Installation",
            ],
        },
        {
            number: "03",
            title: "E-commerce Solutions",
            description: "Build secure online stores designed to increase sales, simplify operations, and deliver exceptional shopping experiences.",
            features: [
                "Custom E-commerce Platforms",
                "Secure Payment Integration",
                "Inventory Management",
                "Customer Account Management",
            ],
        },
        {
            number: "04",
            title: "CMS Development",
            description: "Manage website content easily with flexible content management systems customized to your business workflow.",
            features: [
                "Custom CMS Development",
                "WordPress Solutions",
                "User Role Management",
                "Content Workflow Automation",
            ],
        },
    ];

    return (
        <>
           <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={webDevImg}/>

            <section className='bg-light-section dark:bg-gray-section'>
                <div className="content-view">
                    <div  className="max-w-230 m-auto text-center">
                        <SectionTitle data={aboutSection}/>
                        <p>We use modern technologies and proven development frameworks to build secure, scalable, and high-performing digital products tailored to your business goals.</p>
                    </div>
                    <div className='flex flex-wrap justify-around pt-15 gap-10'>
                        {technologies.map((technology) => (
                            <div key={technology.number} className='text-center max-w-60'>
                                <div className='text-5xl flex font-semibold justify-center items-center gap-5'>
                                    {technology.number} <span className='p-2 border border-primaryColor/50 rounded-md'> {technology.icon} </span>
                                </div>
                                <h3 className='text-xl mt-4 font-bold'>{technology.title}</h3>
                                {technology.descriptions.map((description) => (
                                    <p key={description}>{description}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           <section className='bg-white dark:bg-gray-900'>
                <div className='content-view max-w-230 mx-auto text-center'>
                    <SectionTitle data={applicationSection}/>
                    <p className='mt-6'>
                        From business websites to enterprise platforms, we create custom web solutions that combine exceptional user experiences with reliable, scalable technologies.
                    </p>
                    <div className='mt-12 grid gap-6 text-left md:grid-cols-2'>
                        {applicationServices.map((service) => (
                            <div
                                key={service.number}
                                className='rounded-xl border border-gray-200 bg-light-section p-6 dark:border-gray-700 dark:bg-gray-section'
                            >
                                <span className='text-4xl font-semibold text-primaryColor'>
                                    {service.number}
                                </span>
                                <h3 className='mt-4 text-xl font-bold'>{service.title}</h3>
                                <p className='mt-3'>{service.description}</p>
                                <ul className='mt-5 grid gap-2 sm:grid-cols-2'>
                                    {service.features.map((feature) => (
                                        <li key={feature} className='flex items-center gap-2'>
                                            <CircleCheck className='size-4 shrink-0 text-primaryColor'/>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
           </section>

           <Portfolio/>
           <CTA/>
           <Footer/> 
        </>
    );
};

export default WebDevelopment;