import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'
import { links, social } from '../../data/data';
import logo from "../../images/logo.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    const { t } = useTranslation()

    return (
        <nav>
            <div className='nav-center' id="home">
                <div className='nav-header'>
                    <a href='#home'><img src={logo} className='logo' alt='logo'/></a>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{t(`links.${id - 1}.text`)}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;