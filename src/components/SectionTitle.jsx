

const SectionTitle = (t) => {
    return (
        <>
            <span className='text-sm border dark:border-gray-800 border-gray-200 rounded-full px-4 py-1 uppercase leading-5 tracking-widest text-primaryColor'>{t.data['subtitle']}</span>
            <h2 className={`text-title-h2 mb-6 lg:leading-16 leading-normal font-semibold mt-3 ${t.data.extraClass}`}>{t.data['title']}</h2>
        </>
    );
};

export default SectionTitle;