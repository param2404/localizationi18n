import React from "react";
import { withRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next"

function About() {
    const { t } = useTranslation()
    return (
        <div >
            <h1>{t("About")}</h1>
            <h2>{t("This is about page")}</h2>
            <h3>{t("This is Localization Demo")}</h3>
            <h4>{t("i18n package is uses")}</h4>  
            <p>{t("Para")}</p>  
        </div>
    )
}

export default withRouter(About);