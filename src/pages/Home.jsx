
import Header from './../containers/Header';
import Footer from './../containers/Footer';
import Hero from '../containers/Hero';
import heroImg from '/homeHeroImg.png';


const title = {subtitle:"Web Development Agency",text:'Web Development helps for', highlight:'your business', afterText:""}

const buttonInfo = { text: "Explore Our Services", link: "/contact", class: "bg-primaryColor text-white mt-10" };

const desc = "We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth."


const Home = () => {
    return (
        <>
          <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={heroImg}/>
          <Footer/>
        </>
    );
};

export default Home;