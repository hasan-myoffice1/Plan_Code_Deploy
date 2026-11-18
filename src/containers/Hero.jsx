
import { Mail } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';


const Hero = ({ data, btnData , descText, heroImg}) => {

    return (
        <section className=''>
            <div className="content-view grid md:grid-cols-2 items-center">

                <div>
                    <span className='text-sm border dark:border-gray-800 border-gray-200 rounded-full px-4 py-1 uppercase leading-6'>{data.subtitle}</span>
                    <SectionTitle data={data}/>
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

        </section>
    );
};

export default Hero;