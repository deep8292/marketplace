import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from "../../helpers/images";

function ImageCarousel() {
    return (
        <Carousel  showIndicators={false} showThumbs={false} autoPlay={true} dynamicHeight={false}>
            {images.map((image, idx) => {
                return (
                    <div>
                        <img src={image}/>
                    </div>
                )
            })}
        </Carousel>

    );
}

export default ImageCarousel;