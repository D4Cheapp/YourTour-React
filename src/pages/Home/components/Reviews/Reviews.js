import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {UsersFeedbackData} from "../../../../data/UsersFeedbackData";
import {ReviewTemplate} from "./components";
import style from './Reviews.module.sass'

function Reviews() {
    return (
        <section className={style.feedback}>
            <SectionTitle title={`Отзывы наших\nпутешественников`} sectionStyle={style}/>

            <div className={style.container}>
                {UsersFeedbackData.map((response, index) =>
                    <ReviewTemplate responseInfo={response} key={index} index={index}/>)}
            </div>
        </section>
    );
}

export default Reviews;