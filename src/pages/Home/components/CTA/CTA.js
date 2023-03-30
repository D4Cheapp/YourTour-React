import React from 'react';
import CTAPicture from '../../../../images/png/cta/ctaPicture.png';
import style from './CTA.module.sass';

function CTA() {
    return (
        <section className={style.cta}>
            <img src={CTAPicture} alt="Glade" className={style.image}/>

            <div className={style.description}>
                <h2 className={style.title}>
                    Пора в путешествие вместе с нами!
                </h2>

                <p className={style.emailInfo}>
                    Напиши на почту и узнай подробности на 
                    <a className={style.emailLink} type='email'
                       href='mailto:yourtour@gmail.com'>
                        yourtour@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default CTA