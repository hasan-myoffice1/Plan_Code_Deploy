
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import HeroContact from '/src/assets/contactpagehero.png';
import CTA from '../containers/CTA';
import { socialIcons } from '/src/containers/FooterLinks.jsx';
import { Mail } from 'lucide-react';


const Contact = () => {

    const title = {subtitle:"Get In Touch",text:"Let's", highlight:'Discuss ', afterText:"your next digital project"}

    const buttonInfo = { text: "Contact now", link: "#contactForm", class: "bg-primaryColor text-white mt-10" };

    const desc = "Whether you need a business website, custom web application, UI/UX design, or ongoing website support, our team is ready to help. Contact us today and let's build a digital solution that drives measurable business growth."

    return (
        <>
          <Header/>
           <Hero data={title} btnData={buttonInfo} descText= {desc} heroImg={HeroContact}/>

            <section className='bg-light-section dark:bg-gray-section'>
                <div className="content-view">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:p-20 items-center">
                        <div>
                            <img src="/favicon.svg" alt="company logo" title='Plan code deploy logo' />
                            <h2 className='text-2xl md:text-3xl lg:leading-16 leading-normal font-semibold mt-3'>Send us a Message.</h2>
                            <p>Have a question, project idea, or partnership opportunity? We'd love to hear from you. Fill out the form, and one of our specialists will get back to you as soon as possible.</p>
                            <div className="social-links flex gap-5 mt-3">
                                {socialIcons.map((social) => (
                                    <a
                                    key={social.label}
                                    href={social.link}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <img src={social.icon} alt={social.label} className='size-7'/>
                                    </a>
                                ))}
                            </div>
                            <a href="mailto:PlanCodeDeploy@gmail.com"
                                className="flex lg:mt-20 mt-10 items-center gap-3 text-xl hover:text-primaryColor transition-all">
                                <Mail  className={'size-5'}/>
                                <span>info@plancodedeploy.com</span>
                            </a>
                        </div>
                        {/* action="https://api.web3forms.com/submit" */}
                        <form id="contactForm" action="/contact"  method="POST" className="space-y-5 shadow-xl p-5 sm:p-10 rounded-2xl bg-white">
                            <input type="hidden" name="access_key" value="f7998665-97a6-42b3-b845-324305d5171a" />
                            <div>
                            <label htmlFor="name" className="mb-2 block text-peraFS text-black">Full Name*</label>
                            <input type="text" id="name" name="name" placeholder="Name" required
                                className="w-full rounded-md bg-[#F3F3F3] px-4 py-2.5 text-peraFS text-gray-700 placeholder-[#C0BFBF] outline-none focus:ring-1 focus:ring-primaryColor" />
                            </div>

                            <div>
                            <label htmlFor="phone" className="mb-2 block text-peraFS text-black">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Phone"
                                className="w-full rounded-md bg-[#F3F3F3] px-4 py-2.5 text-peraFS text-gray-700 placeholder-[#C0BFBF] outline-none focus:ring-1 focus:ring-primaryColor" />
                            </div>

                            <div>
                            <label htmlFor="email" className="mb-2 block text-peraFS text-black">Business Email*</label>
                            <input type="email" id="email" name="email" placeholder="Email" required
                                className="w-full rounded-md bg-[#F3F3F3] px-4 py-2.5 text-peraFS text-gray-700 placeholder-[#C0BFBF] outline-none focus:ring-1 focus:ring-primaryColor" />
                            </div>

                            <div>
                            <label htmlFor="details" className="mb-2 block text-peraFS text-black">Project Details</label>
                            <textarea id="details" name="details" placeholder="Your Message" rows="6"
                                className="w-full resize-none rounded-md bg-[#F3F3F3] px-4 py-2.5 text-peraFS text-gray-700 outline-none focus:ring-1 focus:ring-primaryColor"></textarea>
                            </div>

                            <div className="text-right">
                            <button type="submit"
                                className="w-full rounded-md bg-primaryColor px-8 py-2.5 text-peraFS font-medium text-white transition hover:bg-transparent border hover:text-primaryColor hover:border-primaryColor sm:w-auto">
                                Send Message
                            </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

           <CTA/>
          <Footer/>
        </>
    );
};

export default Contact;