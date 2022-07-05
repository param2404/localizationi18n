import React from "react";
import { withRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next"

function Home() {
    const { t } = useTranslation()
    return (
        <div >
            <h1>{t("Home")}</h1>
            <h2>{t("This is home page")}</h2>
            <h3>{t("This is Localization Demo")}</h3>
            <h4>{t("i18n package is uses")}</h4>  
            <p>{t("Para")}</p>   
            {["First","Second","Third","Fourth","Fifth","Sixth"].map((val)=>{
                return <h6>{t(val)}</h6>
            })}   
        </div>
    )
}

export default withRouter(Home);