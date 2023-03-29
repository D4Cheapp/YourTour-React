import React, {useEffect, useState} from 'react';

import Instagram from '../../images/svg/Instagram.svg'
import Facebook from '../../images/svg/Facebook.svg'
import VKontakte from '../../images/svg/VKontakte.svg'

import './Footer.sass';
import {useNavigate} from "react-router-dom";

function Footer() {
    const navigate = useNavigate()

    const [isErrorPage, setIsErrorPage] = useState(checkIsErrorPage())

    useEffect(() => {
        setIsErrorPage(checkIsErrorPage())
    }, [navigate])

    function checkIsErrorPage() {
        return !!window.location.href.split('/').at(-1)
    }

    return (
        <footer className={isErrorPage ? 'error-footer' : ''}>
            <p className="footer-description">
                Наши социальные сети
            </p>

            <div className="footer-social-media">
                <SocialMediaLink image={Instagram} name='instagram' link='https://instagram.com/'/>

                <SocialMediaLink image={Facebook} name='facebook' link='https://facebook.com/'/>

                <SocialMediaLink image={VKontakte} name='vkontakte' link='https://vk.com/'/>
            </div>
        </footer>
    );
}

function SocialMediaLink({image, name, link}) {
    return (
        <div className={`social-media-container social-media-container__${name}`}>
            <div className="icon-container">
                <img src={image} alt={name} className="icon-container__icon"/>
            </div>

            <a target='_blank' href={link} className="social-media-container__link">
                {name}
            </a>
        </div>
    )
}

export default Footer;