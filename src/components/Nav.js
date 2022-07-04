import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Nav = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("en")

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
        i18n.changeLanguage(e.target.value);
    }

    return (
        <header className="nav">
            <div>i18n React POC</div>
            <div>
                <Link to="/">{t('Home')}</Link>
                <Link to="/about">{t('About')}</Link>
                <button onClick={changeLanguage} value={language === "en" ? "fr" : "en"}>{language === "en" ? t("French") : t("English")}</button>
            </div>
        </header>
    );
}

export default Nav;
