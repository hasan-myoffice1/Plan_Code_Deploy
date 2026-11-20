import designImg from '/src/assets/aboutpagehero.png';
import Hero from '../containers/Hero';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import CTA from '../containers/CTA';
import Portfolio from '../containers/Portfolio';
import SectionTitle from '../components/SectionTitle';
import { CircleCheck, PanelsTopLeft, PencilRuler, Search } from 'lucide-react';

const UIUXDesign = () => {
    const title = {
        subtitle: "UI/UX Design",
        text: "Thoughtful",
        highlight: " UI/UX design",
        afterText: " for digital products",
    };

    const buttonInfo = {
        text: "our all Services",
        link: "/services",
        class: "bg-primaryColor text-white mt-10",
    };

    const desc = "We create intuitive, accessible, and visually engaging digital experiences that help people accomplish their goals and help businesses grow.";

    const approachSection = {
        subtitle: "design expertise",
        title: "Our UI/UX Design Approach",
        extraClass: "max-w-170 mx-auto",
    };

    const servicesSection = {
        subtitle: "user-centered design",
        title: "UI/UX Design Services",
        extraClass: "max-w-190 mx-auto",
    };

    const designApproach = [
        {
            number: "01",
            title: "User Research",
            description: "Understand user needs, behaviors, and challenges to guide every design decision.",
            icon: <Search />,
        },
        {
            number: "02",
            title: "UX Design",
            description: "Plan clear information architecture and intuitive journeys across your product.",
            icon: <PanelsTopLeft />,
        },
        {
            number: "03",
            title: "UI Design",
            description: "Create consistent, polished interfaces that bring your brand and product to life.",
            icon: <PencilRuler />,
        },
    ];

    const designServices = [
        {
            number: "01",
            title: "User Research & Strategy",
            description: "Build a strong foundation for your product with research and a clear, user-focused design strategy.",
            features: [
                "User Interviews",
                "Audience & Persona Research",
                "Competitor Analysis",
                "User Journey Mapping",
            ],
        },
        {
            number: "02",
            title: "Wireframing & Prototyping",
            description: "Explore and test product flows early with interactive prototypes and thoughtful page structures.",
            features: [
                "Information Architecture",
                "User Flows",
                "Low-Fidelity Wireframes",
                "Interactive Prototypes",
            ],
        },
        {
            number: "03",
            title: "Interface & Visual Design",
            description: "Deliver accessible, responsive interfaces that express your brand and work seamlessly across devices.",
            features: [
                "Web & Mobile App Design",
                "Responsive Layout Design",
                "Visual Design",
                "Accessibility Best Practices",
            ],
        },
        {
            number: "04",
            title: "Design Systems",
            description: "Create reusable design foundations that keep your product consistent as it grows.",
            features: [
                "Reusable UI Components",
                "Typography & Color Systems",
                "Design Documentation",
                "Developer Handoff",
            ],
        },
    ];

    return (
        <>
            <Header />
            <Hero data={title} btnData={buttonInfo} descText={desc} heroImg={designImg} />

            <section className='bg-light-section dark:bg-gray-section'>
                <div className='content-view'>
                    <div className='max-w-230 m-auto text-center'>
                        <SectionTitle data={approachSection} />
                        <p>
                            We combine user research, thoughtful interaction design, and consistent visual systems to make every digital experience useful and easy to navigate.
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-around pt-15 gap-10'>
                        {designApproach.map((step) => (
                            <div key={step.number} className='text-center max-w-60'>
                                <div className='text-5xl flex font-semibold justify-center items-center gap-5'>
                                    {step.number}
                                    <span className='p-2 border border-primaryColor/50 rounded-md'>
                                        {step.icon}
                                    </span>
                                </div>
                                <h3 className='text-xl mt-4 font-bold'>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-white dark:bg-gray-900'>
                <div className='content-view max-w-230 mx-auto text-center'>
                    <SectionTitle data={servicesSection} />
                    <p className='mt-6'>
                        From early product discovery to polished, developer-ready interfaces, we design digital experiences around your users and business goals.
                    </p>
                    <div className='mt-12 grid gap-6 text-left md:grid-cols-2'>
                        {designServices.map((service) => (
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
                                            <CircleCheck className='size-4 shrink-0 text-primaryColor' />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Portfolio />
            <CTA />
            <Footer />
        </>
    );
};

export default UIUXDesign;
