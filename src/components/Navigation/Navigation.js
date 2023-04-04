import React, {useEffect, useRef, useState} from 'react'
import checkIsErrorPage from "../../utils/checkIsErrorPage";
import logo from '../../images/png/header/HeaderLogo.png'
import {NavLink, useNavigate} from "react-router-dom";
import style from './Navigation.modules.sass'

function Navigation() {
    let scrollPosition = 0

    window.addEventListener('scroll', scrollCheck)

    const navBar = useRef(null)

    const navigate = useNavigate()

    const [isErrorPage, setIsErrorPage] = useState(checkIsErrorPage())

    function scrollCheck() {
        scrollPosition = window.scrollY

        if (scrollPosition >= 450){
            navBar.current.classList.add(style.scroll)
        }
        else{
            navBar.current.classList.remove(style.scroll)
        }
    }

    useEffect(() => {
        setIsErrorPage(checkIsErrorPage())
    }, [navigate])

    return (
        <nav ref={navBar} className={isErrorPage ? style.scrollError : ''}>
            <img className={style.logo} src={logo} alt="logo" onClick={() => navigate('/')}/>

            <div className={style.links}>
                <NavLink to="/tours" className={style.link}>
                    Туры
                </NavLink>
                <NavLink to="/build-tour" className={style.link}>
                    Создать тур
                </NavLink>
                <NavLink to="/feedback" className={style.link}>
                    Отзывы
                </NavLink>
                <NavLink to="/history" className={style.link}>
                    Истории
                </NavLink>
            </div>

            <a className={style.telephone} href="tel:+79999999999">
                +7 999 999 99 99
            </a>
        </nav>
    )
}

export default Navigation
