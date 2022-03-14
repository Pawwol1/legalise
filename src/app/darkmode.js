import React, { useState, useEffect } from 'react';
import {MoonIcon} from "./images/moonicon";
import {SunIcon} from "./images/sunicon";
import { useTranslation } from 'react-i18next'


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function Darkmode() {
    const [theme, setTheme] = useState(getStorageTheme());
    const [icon, setIcon] = useState(false)

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    const toggleIcon = () => setIcon((prev) => !prev)

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    const { t } = useTranslation()
    return (
        <div className="container">
            <div style={{maxWidth: 1225}} className="d-flex justify-content-end align-items-center">
                {  icon ? t('dark') : t('light')}
                <button className="toggle_btn" onClick={() => { toggleTheme(); toggleIcon();}}>
                     {icon ? <SunIcon/> : <MoonIcon/>}
                </button>
            </div>
        </div>
    );
}

export default Darkmode;