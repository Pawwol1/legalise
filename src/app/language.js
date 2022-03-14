import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import {languages} from "./data/data";
import {GlobeIcon} from "./images/globeicon";

export default function Language() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()

    return (
        <div className="container">
            <div>
                <div style={{maxWidth: 1225}} className="d-flex justify-content-end align-items-center language-select-root">
                    <div className="dropdown"> {t(`choose`)}:
                        <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <GlobeIcon />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <span className="dropdown-item-text">{t('language')}</span>
                            </li>
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                    <a href="#" className={classNames('dropdown-item', {disabled: currentLanguageCode === code,})}
                                        onClick={() => { i18next.changeLanguage(code)}}>
                                        <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{opacity: currentLanguageCode === code ? 0.5 : 1,}}/>
                                        {name}
                                    </a>
                                </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
