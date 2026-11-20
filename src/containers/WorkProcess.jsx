
import SectionTitle from './../components/SectionTitle';

const processSteps = [
    {
        number: '01',
        title: 'Discovery & Consultation',
        description: 'We begin by understanding your business, objectives, target audience, and technical requirements to build a clear project roadmap.',
    },
    {
        number: '02',
        title: 'Strategy & Planning',
        description: 'Our team defines the website architecture, user journey, technology stack, and development strategy to ensure scalability and future growth.',
        className: 'md:mt-30',
    },
    {
        number: '03',
        title: 'UI/UX Design',
        description: 'We create engaging interfaces and intuitive user experiences that reflect your brand while improving usability and customer engagement.',
    },
    {
        number: '04',
        title: 'Discovery & Consultation',
        description: 'Our developers build clean, secure, and responsive websites while performing continuous testing for performance, compatibility, and security.',
        className: 'md:mt-30',
    },
    {
        number: '05',
        title: 'Launch & Ongoing Support',
        description: 'After deployment, we provide continuous maintenance, updates, optimization, and technical support to keep your website performing at its best.',
        className: 'md:col-span-2 mx-auto max-w-130 md:text-center',
    },
];

const WorkProcess = () => {

    
const WorkingProcess = {
    subtitle : "work flow",
    title : "Our Working Process",
    extraClass : "max-w-170 mx-auto",
}

    return (
        <section className='bg-light-section dark:bg-gray-section'>
            <div className="content-view">
                 <div className='xl:w-140 text-center m-auto'>
                    <SectionTitle data={WorkingProcess}/>
                    <p>A structured development process that ensures every project is delivered on time, within budget, and to the highest quality standards.</p>
                 </div>
                 <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 ps-5 relative mt-20'>
                    {processSteps.map((step) => (
                        <div key={step.number} className={step.className}>
                            <span className='text-4xl md:text-6xl font-extrabold '>{step.number}</span>
                            <h3 className='mt-3 text-xl font-Montserrat font-bold '>{step.title}</h3>
                            <p className='mt-3 leading-7 dark:text-gray-400 '>{step.description}</p>
                        </div>
                    ))}
                    <div className='absolute w-1 h-full md:h-190 bg-gray-200 top-0 md:right-[50%] rounded-2xl'></div>
                 </div>
            </div>
        </section>
    );
};

export default WorkProcess;