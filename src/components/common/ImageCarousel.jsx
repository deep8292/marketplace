import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from "../../helpers/images";

function ImageCarousel() {
    return (
        <Carousel>
            <div>
            {images.map((image, idx) => {
                return (
                    <div>
                        <img src={image}/>
                        <p className="legend">Image {idx}</p>
                    </div>
                )
            })}
            </div>
        </Carousel>

    );
}

export default ImageCarousel;