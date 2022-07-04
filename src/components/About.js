import React from "react";
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next"

function About() {
    const { t } = useTranslation()
    return (
        <div >
            {t("About")}
        </div>
    )
}

export default withRouter(About);