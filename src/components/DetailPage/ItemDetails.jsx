import { useLocation } from "react-router-dom";

import HomeHeader from "../common/Header";
import Footer from "../common/Footer";
import ImageCarousel from "../common/ImageCarousel";
import ItemDescription from "./ItemDescription";

import classes from '../styles/ItemDetails.module.css';
import UserDetails from "./UserDeatils";
import PriceInfo from "./PriceInfo";

function ItemDetails() {
    let itemDetails = useLocation().state;
    console.log(itemDetails);
    return(
        <>
        <HomeHeader />
        <div className={classes.imageConatiner}>
            <ImageCarousel images={itemDetails.images}/>
            </div>
        <div className={classes.parentContainer}>
            
        
        <div className={classes.container}>
            <ItemDescription itemInfo={itemDetails}/>
            <PriceInfo itemInfo={itemDetails}/>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default ItemDetails;