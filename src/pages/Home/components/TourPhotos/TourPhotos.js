import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {TourGalleryData} from "../../../../data/TourGalleryData";
import style from './TourPhotos.module.sass';
import {PhotosRowTemplate} from "./PhotosRowTemplate";

function TourPhotos() {
    return (
        <section className={style.tourPhotos}>
            <SectionTitle title={`Фотографии путешествий`} sectionStyle={style}/>

            <div className={style.photosContainer}>
                <PhotosRowTemplate rowInfo={{
                    row: 'firstRow',
                    pictures: TourGalleryData.slice(0,4)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: 'secondRow',
                    pictures: TourGalleryData.slice(4,9)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: 'thirdRow',
                    pictures: TourGalleryData.slice(9,13)
                }}/>
            </div>
        </section>
    );
}

export default TourPhotos;