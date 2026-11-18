

const SectionTitle = (t) => {
    return (
        <div>
            <h1 className='text-title mb-6 lg:leading-16 leading-normal font-bold mt-3'>{t.data.text} <span className="text-primaryColor">{t.data.highlight}</span>{t.data.afterText} </h1>
        </div>
    );
};

export default SectionTitle;