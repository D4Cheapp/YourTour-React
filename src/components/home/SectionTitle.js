import React from 'react';

function SectionTitle({title, isWrap, sectionName}) {
    return (
        <div className={`section-title section-title-${sectionName}`}>
            <h1 className={`section-title__header section-title__header-${sectionName}`}>
                {title}
            </h1>
            <p className={`section-title__description section-title__description-${sectionName}`}>
                Идейные соображения высшего порядка,{isWrap ? '\na ' : ' a\n'}
                также рамки и место обучения кадров
            </p>
        </div>
    );
}

export default SectionTitle;