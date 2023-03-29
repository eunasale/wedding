import React from 'react';
import ImageGallery from 'react-image-gallery';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import main from '../assets/img/main_new.jpeg';
import photo1 from '../assets/img/001.jpeg';
import photo2 from '../assets/img/002.jpeg';
import photo3 from '../assets/img/003.jpeg';
import photo4 from '../assets/img/004.jpeg';
import photo5 from '../assets/img/005.jpeg';
import photo6 from '../assets/img/006.jpeg';
import photo7 from '../assets/img/007.jpeg';
import photo8 from '../assets/img/008.jpeg';
import photo9 from '../assets/img/009.jpeg';
import photo10 from '../assets/img/010.jpeg';

const images = [
    { original: main, thumbnail: main },
    { original: photo1, thumbnail: photo1 },
    { original: photo2, thumbnail: photo2 },
    { original: photo3, thumbnail: photo3 },
    { original: photo4, thumbnail: photo4 },
    { original: photo5, thumbnail: photo5 },
    { original: photo6, thumbnail: photo6 },
    { original: photo7, thumbnail: photo7 },
    { original: photo8, thumbnail: photo8 },
    { original: photo10, thumbnail: photo10 },
    { original: photo9, thumbnail: photo9 },
];
function Gallery() {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content gallery">
            <h2 className="title">갤러리</h2>
            <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </div>
    );
}

export default Gallery;
