
import Button from '../components/Button';


const CTA = () => {

    const buttonInfo = { text: "Start Conversation", link: "/contact", class: "bg-primaryColor text-white mt-10" };

    return (
        <section className="relative overflow-auto md:overflow-visible">
            <div className="content-view py-10">
                {/* <!-- Center glow effect --> */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
                    aria-hidden="true">
                    <div className="relative flex h-60 w-60 items-center justify-center lg:h-100 lg:w-100">
                        {/* <!-- Color spread (center to outside fade) --> */}
                        <div className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle,rgba(30,100,200,0.65)_0%,rgba(30,100,200,0.3)_30%,rgba(30,100,200,0.08)_55%,transparent_70%)] blur-2xl">
                        </div>
                        {/* <!-- Dotted circles --> */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-primaryColor/70"></div>
                        <div className="absolute inset-[13%] rounded-full border border-dashed border-primaryColor/70"></div>
                        <div className="absolute inset-[26%] rounded-full border border-dashed border-primaryColor/70"></div>
                    </div>
                </div>

                {/* <!-- Content --> */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-semibold leading-tight text-4xl lg:text-5xl">
                        Let's Build Something special
                    </h2>
                    <p className="mt-4 leading-relaxed">
                        Whether you're launching a new business, redesigning an existing website,
                        or developing a custom web application, our team is ready to turn your
                        ideas into exceptional digital experiences.
                    </p>
                    <Button data={buttonInfo} />
                </div>
            </div>
        </section>
    );
};

export default CTA;