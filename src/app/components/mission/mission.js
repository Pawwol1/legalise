import React from 'react';
import { useTranslation } from 'react-i18next'
import freedom from "../../images/freedom.jpg";


function Mission() {
    const { t } = useTranslation()

    return (
        <section className="container--mission" id="mission">
            <div className="mission_box">
                <img src={freedom} alt="free" className="freedom" />
                <div className="mission_text_box">
                    <h2>
                        {t(`mission.title`)}
                    </h2>
                    <p>
                        {t(`mission.about`)}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Mission;