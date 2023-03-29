import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {TourGalleryData} from "../../../../data/TourGalleryData";
import './TourPhotos.sass';

function TourPhotos() {
    return (
        <section className='tour-photos'>
            <SectionTitle title={`Фотографии путешествий`} sectionName='tour-photos'/>

            <div className="photos-section">
                <PhotosRowTemplate rowInfo={{
                    row: 'first-row',
                    pictures: TourGalleryData.slice(0,4)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: 'second-row',
                    pictures: TourGalleryData.slice(4,9)
                }}/>

                <PhotosRowTemplate rowInfo={{
                    row: 'third-row',
                    pictures: TourGalleryData.slice(9,13)
                }}/>
            </div>
        </section>
    );
}

function PhotosRowTemplate({rowInfo}) {
    return(
        <div className={`photos-row ${rowInfo.row}-photos`}>
            {rowInfo.pictures.map(picture =>
                <img src={picture.src} alt={picture.name} key={picture.name}
                    className={`photos-row__image photos-row__image__${picture.name}`} />)}
        </div>
    )
}

export default TourPhotos;