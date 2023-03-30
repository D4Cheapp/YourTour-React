import React from 'react';
import HeaderBackground from '../../../../images/png/header/HeaderBackground.png';
import {useNavigate} from "react-router-dom";
import style from './Header.module.sass';

function Header() {
    const navigation = useNavigate()

    return (
        <header className={style.header} style={{backgroundImage: `url(${HeaderBackground})`}}>
            <div className={style.blackout}/>

            <h1 className={style.title}>
                Идеальные <br/>
                путешествия <br/>
                существуют
            </h1>

            <p className={style.description}>
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров
            </p>

            <button className={style.findTour} onClick={() => navigation('/tour')}>
                Найти тур
            </button>
        </header>
    )
}

export default Header;