import React from 'react';
import './FormButtons.sass';

function FormButtons() {
    return (
        <div className='form-building-buttons'>
            <button className="form-building-buttons__button form-building-buttons__button__submit" type='submit'>
                Найти тур
            </button>

            <button className="form-building-buttons__button form-building-buttons__button__reset" type='reset'>
                Сбросить
            </button>
        </div>
    );
}

export default FormButtons;