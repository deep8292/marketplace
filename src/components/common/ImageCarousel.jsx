import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './ImageCarousel.module.css';

function ImageCarousel({ images }) {
    return (
        <Carousel showIndicators={false} showThumbs={false} autoPlay={true} dynamicHeight={false}>
            {images.map(({imageURL, id}) => {
                return (
                    <div className={classes.imageHeight} key={id}>
                        <img className={classes.imageConfig} src={imageURL}/>
                    </div>
                )
            })}
        </Carousel>
    );
}

export default ImageCarousel;