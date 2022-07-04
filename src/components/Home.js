import React from "react";
import { withRouter } from 'react-router';
import { useTranslation } from "react-i18next"

function Home() {
    const { t } = useTranslation()
    return (
        <div >
            {t("Home")}
        </div>
    )
}

export default withRouter(Home);