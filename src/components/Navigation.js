import React, {useRef} from 'react'
import logo from '../images/png/header/HeaderLogo.png'
import '../sass/navigation.sass'
import {NavLink, useNavigate} from "react-router-dom";

function Navigation() {
    let scrollPosition = 0

    window.addEventListener('scroll', scrollCheck)

    const navBar = useRef(null)

    const navigate = useNavigate()

    const isBasePage = !!window.location.href.split('/').at(-1)

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
        <nav ref={navBar} className={ isBasePage ? 'scroll-navigation__error scroll-navigation' : ''}>
            <img className="navigation__logo" src={logo} alt="" onClick={() => navigate('/')}/>

            <div className="navigation-links">
                <NavLink to="/tour" className="navigation-links__link">
                    Туры
                </NavLink>
                <NavLink to="/build-tour" className="navigation-links__link">
                    Создать тур
                </NavLink>
                <NavLink to="/feedback" className="navigation-links__link">
                    Отзывы
                </NavLink>
                <NavLink to="/history" className="navigation-links__link">
                    Истории
                </NavLink>
            </div>

            <a className="navigation__telephone" href="tel:+79999999999">
                +7 999 999 99 99
            </a>
        </nav>
    )
}

export default Navigation