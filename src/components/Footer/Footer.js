import React, {useEffect, useState} from 'react';

import Instagram from '../../images/svg/Instagram.svg'
import Facebook from '../../images/svg/Facebook.svg'
import VKontakte from '../../images/svg/VKontakte.svg'

import {useNavigate} from "react-router-dom";
import {SocialMediaLink} from "./SocialMediaLink";
import checkIsErrorPage from "../../utils/checkIsErrorPage";
import styles from './Footer.module.sass';

function Footer() {
    const navigate = useNavigate()

    const [isErrorPage, setIsErrorPage] = useState(checkIsErrorPage())

    useEffect(() => {
        setIsErrorPage(checkIsErrorPage())
    }, [navigate])


    return (
        <footer className={isErrorPage ? styles.errorFooter : ''}>
            <p className={styles.description}>
                Наши социальные сети
            </p>

            <div className={styles.socialMedia}>
                <SocialMediaLink image={Instagram} name='instagram' link='https://instagram.com/'/>

                <SocialMediaLink image={Facebook} name='facebook' link='https://facebook.com/'/>

                <SocialMediaLink image={VKontakte} name='vkontakte' link='https://vk.com/'/>
            </div>
        </footer>
    );
}

export default Footer;