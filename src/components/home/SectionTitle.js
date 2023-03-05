import React from 'react';

function SectionTitle({title}) {
    return (
        <div className='section-title'>
            <h1 className="section-title__header">
                {title}
            </h1>
            <p className="section-title__description">
                Идейные соображения высшего порядка,<br/>
                а также рамки и место обучения кадров
            </p>
        </div>
    );
}

export default SectionTitle;