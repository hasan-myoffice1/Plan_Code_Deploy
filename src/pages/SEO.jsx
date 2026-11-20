import seoImg from '/src/assets/aboutpagehero.png';
import Hero from '../containers/Hero';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import CTA from '../containers/CTA';
import Portfolio from '../containers/Portfolio';
import SectionTitle from '../components/SectionTitle';
import { ChartLine, CircleCheck, PanelsTopLeft, Search } from 'lucide-react';

const SEO = () => {
    const title = {
        subtitle: "search engine optimization",
        text: "Get found by",
        highlight: " the right audience",
        afterText: "",
    };

    const buttonInfo = {
        text: "our all Services",
        link: "/services",
        class: "bg-primaryColor text-white mt-10",
    };

    const desc = "We improve your website's search visibility with practical SEO strategies that attract relevant visitors and support sustainable business growth.";

    const approachSection = {
        subtitle: "search optimization",
        title: "A Smarter Approach to SEO",
        extraClass: "max-w-190 mx-auto",
    };

    const servicesSection = {
        subtitle: "SEO services",
        title: "Search Engine Optimization Services",
        extraClass: "max-w-190 mx-auto",
    };

    const seoApproach = [
        {
            number: "01",
            title: "Audit",
            description: "Identify technical issues and opportunities that affect your website's search performance.",
            icon: <Search />,
        },
        {
            number: "02",
            title: "Optimize",
            description: "Improve your site structure, content, and on-page signals for users and search engines.",
            icon: <PanelsTopLeft />,
        },
        {
            number: "03",
            title: "Measure",
            description: "Track meaningful search performance indicators and use insights to guide ongoing improvements.",
            icon: <ChartLine />,
        },
    ];

    const seoServices = [
        {
            number: "01",
            title: "Technical SEO",
            description: "Improve the technical foundations that help search engines crawl, understand, and index your website.",
            features: [
                "Technical SEO Audits",
                "Site Structure Improvements",
                "Indexing & Crawlability",
                "Website Speed Optimization",
            ],
        },
        {
            number: "02",
            title: "On-Page Optimization",
            description: "Make each important page more useful to visitors and easier for search engines to understand.",
            features: [
                "Page Content Optimization",
                "Metadata & Headings",
                "Internal Linking",
                "Image Optimization",
            ],
        },
        {
            number: "03",
            title: "Keyword Strategy",
            description: "Focus your content on relevant searches that align with your audience and business objectives.",
            features: [
                "Keyword Research",
                "Search Intent Analysis",
                "Topic Opportunities",
                "Content Recommendations",
            ],
        },
        {
            number: "04",
            title: "Local SEO & Reporting",
            description: "Strengthen local visibility and understand progress with clear, useful performance reporting.",
            features: [
                "Local SEO",
                "Business Listing Guidance",
                "Performance Reporting",
                "Ongoing Recommendations",
            ],
        },
    ];

    return (
        <>
            <Header />
            <Hero data={title} btnData={buttonInfo} descText={desc} heroImg={seoImg} />

            <section className='bg-light-section dark:bg-gray-section'>
                <div className='content-view'>
                    <div className='max-w-230 m-auto text-center'>
                        <SectionTitle data={approachSection} />
                        <p>
                            Effective SEO connects technical foundations, helpful content, and ongoing measurement to build long-term organic visibility.
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-around pt-15 gap-10'>
                        {seoApproach.map((step) => (
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
                        From technical fixes to content optimization, we help your website become easier to discover, navigate, and grow.
                    </p>
                    <div className='mt-12 grid gap-6 text-left md:grid-cols-2'>
                        {seoServices.map((service) => (
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

export default SEO;
