import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
// import images from "../../helpers/images";

import classes from '../styles/Carousel.module.css';

function ImageCarousel({ images }) {
    // console.log(images);
    return (
        <div className={classes.carouselContainer}>
        <Carousel  showIndicators={false} showThumbs={false} autoPlay={true} dynamicHeight={true}>
            {images.map(({imageURL, id}) => {
                return (
                    <div key={id}>
                        <img src={imageURL}/>
                    </div>
                )
            })}
        </Carousel>
        </div>
    );
}

export default ImageCarousel;