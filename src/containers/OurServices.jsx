import SectionTitle from './../components/SectionTitle';
import { ArrowRight, ChartLine, PanelsTopLeft, PencilRuler, PencilSparkles } from 'lucide-react';
import { Link } from 'react-router';

const servicesSection = {
    subtitle: 'Our Services',
    title: 'Professional web solutions designed for business growth',
    extraClass: 'max-w-170',
};

const services = [
    {
        title: 'Web Development',
        icon: PanelsTopLeft,
        description: 'Responsive and scalable websites built with modern technologies for businesses, startups, and personal brands.',
        link: '/services/web-development',
    },
    {
        title: 'UI/UX Design',
        icon: PencilRuler,
        description: 'Eye-catching and user-focused designs that make digital products intuitive, accessible, and enjoyable to use.',
        link: '/services/ui-ux-design',
    },
    {
        title: 'Content Writing',
        icon: PencilSparkles,
        description: 'Captivating, SEO-friendly content designed to connect with readers, strengthen your brand, and support business growth.',
        link: '/services/content-writing',
    },
    {
        title: 'SEO',
        icon: ChartLine,
        description: 'Practical search optimization that improves visibility, attracts relevant visitors, and supports sustainable growth.',
        link: '/services/seo',
    },
];

const OurServices = () => {
    return (
         <section>
            <div className="content-view">
                <div className="mb-25  xl:w-160">
                    <SectionTitle data={servicesSection} />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.link}
                                className="rounded-xl border-2 border-gray-100 bg-white p-6 transition-colors hover:border-primaryColor dark:border-gray-700 dark:bg-gray-800 shadow-xl"
                            >
                                <h3 className="text-xl font-semibold">{service.title}</h3>

                                <div className="mt-8 text-primaryColor">
                                    <Icon className="size-16 border-b border-primaryColor/40 pb-4" />
                                </div>

                                <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>

                                <Link
                                    to={service.link}
                                    className="mt-6 flex items-center justify-between font-semibold transition-colors hover:text-primaryColor"
                                >
                                    More details
                                    <ArrowRight className="size-5 text-primaryColor" />
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurServices;