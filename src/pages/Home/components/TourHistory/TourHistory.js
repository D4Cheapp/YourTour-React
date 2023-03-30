import React from 'react';
import {HistoryData} from "../../../../data/HistoryData";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardTemplate from "../CardTemplate/CardTemplate";
import style from './TourHistory.module.sass';

function TourHistory() {
    return (
        <section className={style.tourHistory}>
            <SectionTitle title='Истории путешествий' sectionStyle={style}/>

            <div className={style.container}>
                {HistoryData.map((history, index) =>
                    <CardTemplate info={history} key={index} cardStyles={style}/>)}
            </div>

        </section>
    );
}

export default TourHistory;
