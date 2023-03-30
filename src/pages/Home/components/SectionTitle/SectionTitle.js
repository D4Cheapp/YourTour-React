import React from 'react';
import style from './SectionTitle.module.sass';

function SectionTitle({title, isWrap, sectionStyle}) {
    return (
        <div className={`${style.title} ${sectionStyle.sectionTitle}`}>
            <h1 className={`${style.header} ${sectionStyle.sectionHeader}`}>
                {title}
            </h1>
            <p className={`${style.description} ${sectionStyle.sectionDescription}`}>
                Идейные соображения высшего порядка,{isWrap ? '\na ' : ' a\n'}
                также рамки и место обучения кадров
            </p>
        </div>
    );
}

export default SectionTitle;