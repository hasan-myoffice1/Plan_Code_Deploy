
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import HeroServices from '/src/assets/services_page_img.png';
import { PanelsTopLeft, CircleCheck, PencilRuler, PencilSparkles, ChartLine } from 'lucide-react';
import Button from '../components/Button';
import CountdownSec from '../containers/CountdownSec';
import CTA from '../containers/CTA';
import FAQ from './../containers/FAQ';
import Portfolio from './../containers/Portfolio';

const title = {subtitle:"Our Services",text:'Professional web solutions designed for', highlight:'modern businesses', afterText:""}

const buttonInfo = { text: "About Web Development", link: "#", class: "bg-primaryColor text-white mt-10" };

const desc = "We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth."

const servicesData = [
  {
    category: "DEVELOPMENT",
    title: "Web Development",
    icon: <PanelsTopLeft  className='size-30 border-b pb-10'/>,
    description:
      "We build fast, secure, and scalable websites tailored to your business objectives. Every solution is developed using modern technologies and industry best practices to ensure outstanding performance, security, and future scalability.",
    features: [
      "Custom Website Development",
      "Business & Corporate Websites",
      "Responsive Mobile-First Design",
      "CMS & Admin Dashboard",
      "API Integration",
      "Performance Optimization",
    ],
    buttonInfo: {
      text: "About Web Development",
      link: "#",
      class: "bg-primaryColor text-white mt-10",
    },
  },
  {
    category: "DESIGN",
    title: "UI/UX Design",
    icon: <PencilRuler  className='size-30 border-b pb-10'/>,
    description:
      "Our design process focuses on creating intuitive digital experiences that improve usability, strengthen brand identity, and maximize user engagement across every device.",
    features: [
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "CMS & Admin Dashboard",
      "Responsive Layout Design",
      "Accessibility Best Practices",
    ],
    buttonInfo: {
      text: "About UI/UX Design",
      link: "#",
      class: "bg-primaryColor text-white mt-10",
    },
  },
  {
    category: "WRITING",
    title: "Content Strategy & Copywriting",
    icon: <PencilSparkles  className='size-30 border-b pb-10'/>,
    description:
      "We optimize websites to improve search engine visibility, increase qualified traffic, and generate sustainable business growth through proven SEO strategies.",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Website Speed Optimization",
      "Keyword Strategy",
      "Local SEO",
      "Performance Reporting",
    ],
    buttonInfo: {
      text: "About Content Writing",
      link: "#",
      class: "bg-primaryColor text-white mt-10",
    },
  },
  {
    category: "WRITING",
    title: "SEO Optimization",
    icon: <ChartLine  className='size-30 border-b pb-10'/>,
    description:
      "High-quality content builds trust, improves search visibility, and converts visitors into customers. We create compelling website content that communicates your value and supports your marketing goals.",
    features: [
      "Website Copywriting",
      "Landing Page Content",
      "SEO Content Writing",
      "Service Page Copy",
      "Blog Content",
      "Brand Messaging",
    ],
    buttonInfo: {
      text: "About SEO",
      link: "#",
      class: "bg-primaryColor text-white mt-10",
    },
  },
];


const Services = () => {
    return (
        <>
           <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={HeroServices}/>
           {/* <!-- Services Section --> */}
           <section className='bg-light-section dark:bg-gray-section'>
              <div className='content-view grid md:grid-cols-2 gap-30'>
                 {
                    servicesData.map((service, index)=> (
                        <div key={index} className="grid-cols-1">
                            <span className='text-sm border dark:border-gray-700 border-gray-200 rounded-full px-4 py-1 uppercase leading-6'>{service.category}</span>
                            <h2 className='text-2xl mb-6 lg:leading-16 leading-normal font-semibold mt-3'>{service.title}</h2>
                            <div className=''> {service.icon}</div>
                            <p className='mt-10'>{service.description}</p>

                            <ul className='list-disc ps-6 mt-6'>
                                {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 mb-2">
                                    <CircleCheck className='size-4' />
                                    <span>{feature}</span>
                                </li>
                                ))}
                            </ul>
                        <Button data={service.buttonInfo} />
                        </div>
                    ))
                 }
              </div>
           </section>
           <CountdownSec />
           <FAQ/>
           <Portfolio/>
           <CTA/>
           <Footer/>
        </>
    );
};

export default Services;