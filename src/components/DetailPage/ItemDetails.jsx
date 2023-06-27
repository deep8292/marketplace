import { useLocation } from "react-router-dom";

import HomeHeader from "../common/Header";
import Footer from "../common/Footer";
import ImageCarousel from "../common/ImageCarousel";

function ItemDetails() {
    let itemDetails = useLocation();
    console.log(itemDetails.state);
    return(
        <>
        <HomeHeader />
        <ImageCarousel />
        <Footer />
        </>
    );
}

export default ItemDetails;