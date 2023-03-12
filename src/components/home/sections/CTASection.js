import React from 'react';
import CTAPicture from '../../../images/png/cta/ctaPicture.png'

function CtaSection() {
    return (
        <section className='cta-section'>
            <img src={CTAPicture} alt="" className="cta-section__image"/>

            <div className="cta-description-container">
                <h3 className="cta-description-container__title">
                    Пора в путешествие вместе с нами!
                </h3>

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

export default CtaSection;