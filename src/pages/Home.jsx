
import Header from './../containers/Header';
import Footer from './../containers/Footer';
import Hero from '../containers/Hero';

const Home = () => {
    return (
        <>
          <Header/>
           <h1 className='text-center text-2xl mt-5 font-primary'>Home page</h1>  
           <Hero/>
          <Footer/>
        </>
    );
};

export default Home;