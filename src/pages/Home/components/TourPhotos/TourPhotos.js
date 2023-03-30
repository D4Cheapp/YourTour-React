import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {TourGalleryData} from "../../../../data/TourGalleryData";
import style from './TourPhotos.module.sass';

function TourPhotos() {
    return (
        <section className={style.tourPhotos}>
            <SectionTitle title={`Фотографии путешествий`} sectionStyle={style}/>

            <div className={style.photosContainer}>
                <PhotosRowTemplate rowInfo={{
                    row: style.firstRow,
                    pictures: TourGalleryData.slice(0,4)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: style.secondRow,
                    pictures: TourGalleryData.slice(4,9)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: style.thirdRow,
                    pictures: TourGalleryData.slice(9,13)
                }}/>
            </div>
        </section>
    );
}

function PhotosRowTemplate({rowInfo}) {
    return(
        <div className={`${style.photosRow} ${rowInfo.row}`}>
            {rowInfo.pictures.map(picture =>
                <img src={picture.src} alt={picture.name} key={picture.name}
                    className={style.image} />)}
        </div>
    )
}

export default TourPhotos;