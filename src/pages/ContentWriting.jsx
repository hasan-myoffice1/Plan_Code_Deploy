import contentImg from '/src/assets/aboutpagehero.png';
import Hero from '../containers/Hero';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import CTA from '../containers/CTA';
import Portfolio from '../containers/Portfolio';
import SectionTitle from '../components/SectionTitle';
import { CircleCheck, FileText, PencilSparkles, Search } from 'lucide-react';

const ContentWriting = () => {
    const title = {
        subtitle: "content writing",
        text: "Content that",
        highlight: " connects",
        afterText: " and converts",
    };

    const buttonInfo = {
        text: "our all Services",
        link: "/services",
        class: "bg-primaryColor text-white mt-10",
    };

    const desc = "We create clear, compelling, and search-friendly content that communicates your value, builds trust, and helps turn visitors into customers.";

    const approachSection = {
        subtitle: "content strategy",
        title: "Content Built Around Your Audience",
        extraClass: "max-w-190 mx-auto",
    };

    const servicesSection = {
        subtitle: "content writing services",
        title: "Content Strategy & Copywriting",
        extraClass: "max-w-190 mx-auto",
    };

    const contentApproach = [
        {
            number: "01",
            title: "Discover",
            description: "Understand your audience, business goals, and brand voice before creating content.",
            icon: <Search />,
        },
        {
            number: "02",
            title: "Plan",
            description: "Shape useful topics and content structures around customer needs and search intent.",
            icon: <FileText />,
        },
        {
            number: "03",
            title: "Create",
            description: "Write engaging, polished copy that makes your message clear and encourages action.",
            icon: <PencilSparkles />,
        },
    ];

    const contentServices = [
        {
            number: "01",
            title: "Website Copywriting",
            description: "Explain what makes your business valuable with clear, consistent copy across your website.",
            features: [
                "Home Page Copy",
                "About Us Content",
                "Service Page Copy",
                "Brand Messaging",
            ],
        },
        {
            number: "02",
            title: "Landing Page Content",
            description: "Create focused landing page messaging that speaks to customer needs and supports conversions.",
            features: [
                "Campaign Landing Pages",
                "Product Page Copy",
                "Calls to Action",
                "Conversion-Focused Messaging",
            ],
        },
        {
            number: "03",
            title: "SEO Content Writing",
            description: "Publish useful, reader-first content structured to support organic visibility and business goals.",
            features: [
                "Search-Friendly Articles",
                "Topic Research",
                "Content Optimization",
                "Readable Page Structure",
            ],
        },
        {
            number: "04",
            title: "Blog & Editorial Content",
            description: "Share expertise and build audience trust with thoughtful, consistent editorial content.",
            features: [
                "Blog Posts",
                "Editorial Planning",
                "Content Refreshes",
                "Consistent Brand Voice",
            ],
        },
    ];

    return (
        <>
            <Header />
            <Hero data={title} btnData={buttonInfo} descText={desc} heroImg={contentImg} />

            <section className='bg-light-section dark:bg-gray-section'>
                <div className='content-view'>
                    <div className='max-w-230 m-auto text-center'>
                        <SectionTitle data={approachSection} />
                        <p>
                            We combine audience research, thoughtful planning, and careful writing to deliver content that sounds like your brand and serves your customers.
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-around pt-15 gap-10'>
                        {contentApproach.map((step) => (
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
                        From first impressions to in-depth articles, we create useful content that makes your business easier to understand and engage with.
                    </p>
                    <div className='mt-12 grid gap-6 text-left md:grid-cols-2'>
                        {contentServices.map((service) => (
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

export default ContentWriting;
