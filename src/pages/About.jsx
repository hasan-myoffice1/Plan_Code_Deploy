import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';


const About = () => {
    return (
         <>
          <Header/>
           <h1 className='text-center text-2xl mt-5 font-primary'>About page</h1>  
           <Hero/>
          <Footer/>
        </>
    );
};

export default About;