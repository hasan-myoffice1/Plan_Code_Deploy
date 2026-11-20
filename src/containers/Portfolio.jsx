import React from 'react';
import SectionTitle from './../components/SectionTitle';
import Button from './../components/Button';


const Portfolio = () => {

    const faqSection = {
        subtitle: 'Our Portfolio',
        title: "We've Built For Growing Businesses",
        extraClass: 'max-w-170',
    };

     const buttonInfo = { text: "Preview", link: "#", class: "bg-primaryColor mt-10 text-white hidden lg:block" };

    return (
        <section>
            <div className='content-view'>
                <SectionTitle data={faqSection} />
                <div className='grid md:grid-cols-2 gap-20'>
                    <div className='bg-cyan-500 rounded-2xl h-80'>

                    </div>
                    <div>
                        <h3 className="text-2xl font-medium">Professiona Business Website</h3>
                        <p className="mt-4 leading-7">
                           We designed and developed a modern, conversion-focused business website featuring
                           responsive design, SEO optimization, fast performance, and an intuitive user experience
                           that helps generate more leads and strengthen the client's online presence.
                        </p>
                        <Button data={buttonInfo}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;