import { Plus } from 'lucide-react';

const CountdownSec = () => {
    const statsData = [
        {
            value: "07",
            label: "Running Projects",
        },
        {
            value: "37",
            label: "Projects Successfully Delivered",
        },
        {
            value: "09",
            label: "Years of Industry Experience",
        },
        {
            value: "12",
            label: "Businesses Worldwide Served",
        },
    ];
    
    return (
        <section className='bg-linear-to-r from-[#0a1a3c] via-[#0f2f6b] to-[#1a4aa6] py-20 sm:py-20 font-Poppins'>
            <div className="content-view grid grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    statsData.map((item) => (
                        <div key={item.label} className="text-center max-w-60 text-gray-100">
                            <span className='text-6xl md:text-7xl flex font-semibold justify-center'>{item.value}<Plus /></span>
                            <h3 className='md:text-xl mt-4'>{item.label}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default CountdownSec;