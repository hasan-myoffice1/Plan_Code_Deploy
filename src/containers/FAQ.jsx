import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from './../components/SectionTitle';

const faqSection = {
    subtitle: 'common questions',
    title: 'Frequently asked questions about our services',
    extraClass: 'max-w-170 mx-auto',
};

const faqItems = [
    {
        question: 'What services does PlanCodeDeploy offer?',
        answer: 'We provide custom web development, UI/UX design, content writing, SEO, and ongoing website support.',
    },
    {
        question: 'Can you build a website tailored to my business?',
        answer: 'Yes. We plan and build websites around your business goals, audience, brand, and technical requirements.',
    },
    {
        question: 'Will my website work on mobile devices?',
        answer: 'Yes. We create responsive websites designed to work across mobile phones, tablets, and desktop screens.',
    },
    {
        question: 'How do I get started with a project?',
        answer: 'Send us a message through the contact form with your project details. Our team will follow up to discuss your needs and next steps.',
    },
    {
        question: 'Do you provide support after launch?',
        answer: 'Yes. We can provide maintenance, updates, performance optimization, and technical support after your website launches.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className='bg-light-section dark:bg-gray-section'>
            <div className="content-view">
                <div className="mx-auto mb-25 text-center xl:w-160">
                    <SectionTitle data={faqSection} />
                    <p>Find answers to common questions about planning, building, and supporting your website.</p>
                </div>

                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <img src="/homeHeroImg.png" alt="Website development project illustration" className="h-auto w-full rounded-2xl object-cover" />
                    </div>
                    <div className="divide-y divide-gray-200 md:col-span-8 dark:divide-gray-700">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            const questionId = `faq-question-${index}`;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <div key={item.question} className="py-2">
                                    <h3>
                                        <button
                                            id={questionId}
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-gray-900 sm:text-lg dark:text-gray-100"
                                        >
                                            {item.question}
                                            <ChevronDown
                                                aria-hidden="true"
                                                className={`size-5 shrink-0 text-primaryColor transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    </h3>
                                    <div
                                        id={answerId}
                                        role="region"
                                        aria-labelledby={questionId}
                                        hidden={!isOpen}
                                        className="pb-4 text-gray-700 dark:text-gray-300"
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;