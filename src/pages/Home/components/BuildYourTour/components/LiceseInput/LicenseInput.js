import React from 'react';
import styles from './LicenseInput.module.sass';

function LicenseInput() {
    return (
        <label className={styles.licence}>
            <input type="checkbox" className={styles.checkbox} required/>

            <div className={styles.customCheckbox}/>

            <p className={styles.contract}>
                Нажимая кнопку, я принимаю условия 

                <a href="" className={styles.link}>
                    Лицензионного договора
                </a>
            </p>
        </label>
    );
}

export default LicenseInput;