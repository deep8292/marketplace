import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import images from "../../helpers/images";

import classes from '../styles/Carousel.module.css';

function ImageCarousel() {
    return (
        <div className={classes.carouselContainer}>
        <Carousel  showIndicators={false} showThumbs={false} autoPlay={true} dynamicHeight={true}>
            {images.map((image, idx) => {
                return (
                    <div key={idx}>
                        <img src={image}/>
                    </div>
                )
            })}
        </Carousel>
        </div>
    );
}

export default ImageCarousel;