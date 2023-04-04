import React from 'react';
import Dropdown from '../../../../../../images/svg/Dropdown.svg';
import styles from './FormInputFields.module.sass';
import {InputTemplate} from "./InputTemplate";

function FormInputFields() {
    return (
        <>
            <div className={styles.container}>
                <InputTemplate title='Имя' name='name' inputParams={{
                    type:'text',
                    placeholder:'Введите Ваше имя',
                    pattern:'[А-я]+'
                }}/>

                <div className={styles.inputBox}>
                    <h5 className='form-title'>
                        Направление
                    </h5>

                    <select className={styles.citySelect} style={{backgroundImage: `url(${Dropdown})`}} required>
                        <option value='' defaultValue>Куда хотите ехать</option>
                        <option value='Paris'>Париж</option>
                        <option value='London'>Лондон</option>
                        <option value='HongKong'>Гонконг</option>
                    </select>
                </div>

                <InputTemplate title='Email' name='email' inputParams={{
                    type:'email',
                    placeholder:'example@mail.com',
                    pattern: '\\w+@+\\w+\\.+\\w+'
                }}/>

                <InputTemplate title='Телефон' name='telephone' inputParams={{
                    type:'tel',
                    placeholder:'+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _',
                    mask: '+ 7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9',
                }}/>

                <InputTemplate title='Дата от' name='date-from' inputParams={{
                    type: 'text',
                    placeholder:'ДД.ММ.ГГГГ',
                    mask: '99.99.9999'
                }}/>

                <InputTemplate title='Дата до' name='date-before' inputParams={{
                    type: 'text',
                    placeholder: 'ДД.ММ.ГГГГ',
                    mask: '99.99.9999',
                }}/>
            </div>

            <div className={styles.commentBox}>
                <h5 className="form-title">
                    Комментарий
                </h5>

                <textarea rows="8" cols="135" className={styles.comment}/>
            </div>
        </>
    );
}

export default FormInputFields;