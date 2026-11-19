import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import HeroAbout from '/src/assets/aboutpagehero.png';


const title = {subtitle:"about Plan Code Deploy",text:'Building reliable ', highlight:'Digital Solution', afterText:"for ambitious businesses"}

const buttonInfo = { text: "Our Services", link: "/services", class: "bg-primaryColor text-white mt-10" };

const desc = "At PlanCodeDeploy, we combine strategy, design, and development to create modern websites and web applications that help businesses strengthen their online presence, improve customer experiences, and achieve sustainable growth."

const About = () => {
    return (
         <>
           <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={HeroAbout}/>
           <Footer/>
        </>
    );
};

export default About;