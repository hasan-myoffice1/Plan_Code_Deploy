import { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
import SectionTitle from './../components/SectionTitle';

const testimonials = [
    {
        quote: 'PlanCodeDeploy transformed our outdated website into a modern platform that reflects our brand perfectly. The communication was excellent, deadlines were met, and the final product exceeded expectations.',
        name: 'Hasan Ali',
        role: 'Business Owner',
    },
    {
        quote: 'Working with PlanCodeDeploy was a seamless experience. Their attention to detail and clean frontend structure helped elevate our digital presence significantly.',
        name: 'Sainmun All Basar',
        role: 'Product Manager',
    },
    {
        quote: 'Reliable, fast, and highly professional. They delivered exactly what we needed on time and with exceptional visual polish.',
        name: 'Hasinur HR',
        role: 'Tech Founder',
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const workingProcess = {
        subtitle: 'Testimonials',
        title: 'Businesses trust us to deliver measurable digital results',
        extraClass: 'max-w-170 mx-auto',
    };

    const changeTestimonial = (direction) => {
        setActiveIndex((index) => (index + direction + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[activeIndex];

    return (
        <section>
            <div className="content-view">
                <div className="mx-auto mb-25 text-center xl:w-160">
                    <SectionTitle data={workingProcess} />
                    <p>From startups to established companies, our clients rely on PlanCodeDeploy to create reliable, modern, and high-performing websites that support long-term business success and customer growth.</p>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 ">
                    <div className="md:col-span-4">
                        <h2 className="mb-4 text-6xl font-bold leading-none">
                            4.7<span className="text-primaryColor">/5</span>
                        </h2>
                        <div className="mb-3 flex items-center gap-2 text-primaryColor" aria-label="Rated 4.7 out of 5">
                            <Star aria-hidden="true" />
                            <Star aria-hidden="true" />
                            <Star aria-hidden="true" />
                            <Star aria-hidden="true" />
                            <StarHalf aria-hidden="true" />
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            Trusted by businesses across the USA, UK, and Europe for quality web development services.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between border-primaryColor pt-6 md:col-span-7  md:border-l md:py-4 md:pl-8">
                        <div key={activeIndex} aria-live="polite">
                            <p className="text-[15px] leading-relaxed text-gray-700 sm:text-peraFS dark:text-gray-300">
                                {testimonial.quote}
                            </p>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                                <p className="mt-1 text-sm font-medium text-primaryColor">{testimonial.role}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-4 md:mt-8">
                            <button
                                type="button"
                                onClick={() => changeTestimonial(-1)}
                                aria-label="Previous testimonial"
                                className="text-primaryColor transition-colors hover:text-blue-700"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => changeTestimonial(1)}
                                aria-label="Next testimonial"
                                className="text-primaryColor transition-colors hover:text-blue-700"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
