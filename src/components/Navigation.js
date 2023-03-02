import React, {useRef} from 'react'
import logo from '../images/png/header/HeaderLogo.png'
import '../sass/navigation.sass'

const Navigation = () => {
    let scrollPosition = 0
    window.addEventListener('scroll', scrollCheck)

    const navBar = useRef(null)

    function scrollCheck() {
        scrollPosition = window.scrollY

        if (scrollPosition >= 450){
            navBar.current.classList.add('scroll-navigation')
        }
        else{
            navBar.current.classList.remove('scroll-navigation')
        }
    }

    return (
        <nav ref={navBar}>
            <img className="navigation__logo" src={logo} alt=""/>

            <div className="navigation-links">
                <a href="/tour" className="navigation-links__link">
                    Туры
                </a>
                <a href="/build-tour" className="navigation-links__link">
                    Создать тур
                </a>
                <a href="/feedback" className="navigation-links__link">
                    Отзывы
                </a>
                <a href="/history" className="navigation-links__link">
                    Истории
                </a>
            </div>

            <a className="navigation__telephone" href="tel:+79999999999">
                +7 999 999 99 99
            </a>
        </nav>
    );
};

export default Navigation;