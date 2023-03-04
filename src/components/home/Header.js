import React from 'react';
import '../../sass/home/header.sass';
import headerBackground from '../../images/png/header/HeaderBackground.png';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigation = useNavigate()

    return (
        <header style={{backgroundImage: `url(${headerBackground})`}}>
            <h1 className='header__title'>
                Идеальные <br/>
                путешествия <br/>
                существуют
            </h1>

            <p className='header__description'>
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров
            </p>

            <button className='header__find-tour' onClick={() => navigation('/tour')}>
                Найти тур
            </button>
        </header>
    )
}

export default Header;