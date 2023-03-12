import React from 'react';

import Instagram from '../images/svg/Instagram.svg'
import Facebook from '../images/svg/Facebook.svg'
import VKontakte from '../images/svg/VKontakte.svg'

import '../sass/footer.sass';

function Footer() {
    return (
        <footer>
            <p className="footer-description">
                Наши социальные сети
            </p>

            <div className="footer-social-media">
                <CreateSocialMediaLink image={Instagram} name='instagram' link='https://instagram.com/'/>

                <CreateSocialMediaLink image={Facebook} name='facebook' link='https://facebook.com/'/>

                <CreateSocialMediaLink image={VKontakte} name='vkontakte' link='https://vk.com/'/>
            </div>
        </footer>
    );
}

function CreateSocialMediaLink({image, name, link}) {
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