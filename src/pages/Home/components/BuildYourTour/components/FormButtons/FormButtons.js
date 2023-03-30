import React from 'react';
import style from './FormButtons.module.sass';

function FormButtons() {
    return (
        <div className={style.buttons}>
            <button className={`${style.button} ${style.submit}`} type='submit'>
                Найти тур
            </button>

            <button className={`${style.button} ${style.reset}`} type='reset'>
                Сбросить
            </button>
        </div>
    );
}

export default FormButtons;