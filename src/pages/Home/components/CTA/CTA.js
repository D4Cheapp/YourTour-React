import React from 'react';
import CTAPicture from '../../../../images/png/cta/ctaPicture.png';
import './CTA.sass';

function CTA() {
    return (
        <section className='cta-section'>
            <img src={CTAPicture} alt="" className="cta-section__image"/>

            <div className="cta-description-container">
                <h2 className="cta-description-container__title">
                    Пора в путешествие вместе с нами!
                </h2>

                <p className="cta-description-container__email-info">
                    Напиши на почту и узнай подробности на 
                    <a className='cta-description-container__email-link' type='email'
                       href='mailto:yourtour@gmail.com'>
                        yourtour@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default CTA