import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {UsersFeedbackData} from "../../../../data/UsersFeedbackData";
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

function ReviewTemplate({responseInfo, index}) {
    return(
        <div className={`${style.response} ${style.response}__${index}`}>
            <p className={style.text}>
                {responseInfo.text}
            </p>

            <div className={style.userInfo}>
                <div className={style.description}>
                    <h2 className={style.name}>
                        {responseInfo.userInfo.name}
                    </h2>

                    <p className={style.tourName}>
                        {`Тур: ${responseInfo.userInfo.tour}`}
                    </p>
                </div>

                <img className={style.profilePicture}
                     src={responseInfo.userInfo.profilePicture} alt={responseInfo.userInfo.name}/>
            </div>
        </div>
    )
}

export default Reviews;