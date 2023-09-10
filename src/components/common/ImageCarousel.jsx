import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel({ images }) {
    return (
        <Carousel  showIndicators={false} showThumbs={false} autoPlay={true} dynamicHeight={false}>
            {images.map(({imageURL, id}) => {
                return (
                    <div key={id}>
                        <img src={imageURL}/>
                    </div>
                )
            })}
        </Carousel>
    );
}

export default ImageCarousel;