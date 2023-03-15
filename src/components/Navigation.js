import React, {useEffect, useRef, useState} from 'react'
import logo from '../images/png/header/HeaderLogo.png'
import {NavLink, useNavigate} from "react-router-dom";
import '../sass/navigation.sass'

function Navigation() {
    let scrollPosition = 0

    window.addEventListener('scroll', scrollCheck)

    const navBar = useRef(null)

    const navigate = useNavigate()

    const [isErrorPage, setIsErrorPage] = useState(checkIsErrorPage())

    function scrollCheck() {
        scrollPosition = window.scrollY

        if (scrollPosition >= 450){
            navBar.current.classList.add('scroll-navigation')
        }
        else{
            navBar.current.classList.remove('scroll-navigation')
        }
    }

    useEffect(() => {
        setIsErrorPage(checkIsErrorPage())
    }, [navigate])

    function checkIsErrorPage() {
        return !!window.location.href.split('/YourTour-React/').at(-1)
    }

    return (
        <nav ref={navBar} className={ isErrorPage ? 'scroll-navigation__error' : ''}>
            <img className="navigation__logo" src={logo} alt="" onClick={() => navigate('/')}/>

            <div className="navigation-links">
                <NavLink to="/tours" className="navigation-links__link">
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
