import React from 'react';
import SectionTitle from "../SectionTitle";
import {UsersFeedbackData} from "../../../data/UsersFeedbackData";
import './Feedback.sass'

function Feedback() {
    return (
        <section className='users-feedback'>
            <SectionTitle title={`Отзывы наших\nпутешественников`} sectionName='users-feedback'/>

            <div className="feedback-container">
                {UsersFeedbackData.map((response, index) =>
                    <ResponseCreate responseInfo={response} key={index} index={index}/>)}
            </div>
        </section>
    );
}

function ResponseCreate({responseInfo, index}) {
    return(
        <div className={`user-response user-response__${index}`}>
            <p className="user-response__text">
                {responseInfo.text}
            </p>

            <div className="user-info-container">
                <div className="user-description">
                    <h2 className="user-info-container__name">
                        {responseInfo.userInfo.name}
                    </h2>

                    <p className="user-description__tour-name">
                        {`Тур: ${responseInfo.userInfo.tour}`}
                    </p>
                </div>

                <img className="user-info-container__profile-picture"
                     src={responseInfo.userInfo.profilePicture} alt=""/>
            </div>
        </div>
    )
}

export default Feedback;