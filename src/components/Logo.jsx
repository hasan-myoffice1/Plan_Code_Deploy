import { useEffect, useState } from "react";
import logo from '/logo.png'
import logoL from '/logo_light_mood.png'
import { Link } from "react-router";


const Logo = (p) => {

    const [isDark, setIsDark] = useState(() => {
        if (typeof document === 'undefined') return false;
        return document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        const root = document.documentElement;
        const syncTheme = () => setIsDark(root.classList.contains('dark'));

        syncTheme();

        const observer = new MutationObserver(syncTheme);
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
      <Link to='/'><img src={isDark ? logo : logoL} alt="plan code deploy logo" title='PCD Company Logo' className={p.data} /></Link>
    );
};

export default Logo;