
import SuperTitle from './SuperTitle';

const SectionTitle = (t) => {
    return (
        <>
            <SuperTitle subtitle={t.data.subtitle} />
            <h2 className={`text-title-h2 mb-6 lg:leading-16 leading-normal font-semibold mt-3 ${t.data.extraClass}`}>{t.data['title']}</h2>
        </>
    );
};

export default SectionTitle;