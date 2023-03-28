import React from 'react';
import {HistoryData} from "../../../../data/HistoryData";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardCreating from "../CardCreating/CardCreating";
import './TourHistory.sass';

function TourHistory() {
    return (
        <section className="tour-history">
            <SectionTitle title='Истории путешествий' sectionName='tour-history'/>

            <div className="history-card-container">
                {HistoryData.map((history, index) =>
                    <CardCreating info={history} key={index} cardName={'history'}/>)}
            </div>

        </section>
    );
}

export default TourHistory;
