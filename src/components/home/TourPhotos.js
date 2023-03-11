import React from 'react';
import SectionTitle from "./SectionTitle";
import {TourGallery} from "../../data/TourGallery";

function TourPhotos() {
    return (
        <section className='tour-photos'>
            <SectionTitle title={`Фотографии путешествий`} sectionName='tour-photos'/>

            <div className="photos-section">
                <PhotosRowCreate rowInfo={{
                    row: 'first-row',
                    pictures: TourGallery.slice(0,4)
                }}/>

                <PhotosRowCreate rowInfo={{
                    row: 'second-row',
                    pictures: TourGallery.slice(4,9)
                }}/>

                <PhotosRowCreate rowInfo={{
                    row: 'third-row',
                    pictures: TourGallery.slice(9,13)
                }}/>
            </div>
        </section>
    );
}

function PhotosRowCreate({rowInfo}) {
    return(
        <div className={`photos-row ${rowInfo.row}-photos`}>
            {rowInfo.pictures.map(picture =>
                <img src={picture.src} alt={picture.name} key={picture.name}
                    className={`photos-row__image photos-row__image__${picture.name}`} />)}
        </div>
    )
}

export default TourPhotos;