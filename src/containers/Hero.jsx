
import { Mail , Mouse} from 'lucide-react';
import Button from '../components/Button';



const Hero = ({ data, btnData , descText, heroImg}) => {

    return (
        <section className='' id='#top'>
            <div className="content-view grid md:grid-cols-2 items-center">

                <div>
                    <span className='text-sm border dark:border-gray-800 border-gray-200 rounded-full px-4 py-1 uppercase leading-6'>{data.subtitle}</span>

                    <h1 className='text-title-h1 mb-6 lg:leading-16 leading-normal font-bold mt-3'>{data.text} <span className="text-primaryColor">{data.highlight}</span>{data.afterText} </h1>
                    
                    <p className='dark:text-gray-400'>{descText}</p>
                    <Button data={btnData}/>
                    <a href="mailto:PlanCodeDeploy@gmail.com"
                        className="flex lg:mt-20 mt-10 items-center gap-3 text-sm hover:text-primaryColor transition-all">
                        <Mail  className={'size-5'}/>
                        <span>info@plancodedeploy.com</span>
                    </a>
                </div>
                <div className='sm:p-20 mt-10 md:mt-0'>
                    <img src={heroImg} alt={data.subtitle}  className='w-full h-auto'/>
                </div>
            </div>

            <a href="#top" className='fixed bottom-10 right-20' title='go to top'><Mouse className='size-9 text-gray-500' /></a>

        </section>
    );
};

export default Hero;