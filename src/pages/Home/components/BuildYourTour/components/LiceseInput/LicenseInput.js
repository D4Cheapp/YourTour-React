import React from 'react';
import styles from './LicenseInput.module.sass';

function LicenseInput({licenseCheckboxRef}) {
    return (
        <label className={styles.licence}>
            <input type="checkbox" name='license'
                   className={styles.checkbox} ref={licenseCheckboxRef}/>

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