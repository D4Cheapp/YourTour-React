import React from 'react';

function SectionTitle({title, isWrap}) {
    return (
        <div className='section-title'>
            <h1 className="section-title__header">
                {title}
            </h1>
            <p className="section-title__description">
                Идейные соображения высшего порядка,{isWrap ? '\na ' : ' a\n'}
                также рамки и место обучения кадров
            </p>
        </div>
    );
}

export default SectionTitle;