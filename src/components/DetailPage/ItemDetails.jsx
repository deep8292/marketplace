import { useLocation } from "react-router-dom";

import BasePage from "../common/BasePage";
import ImageCarousel from "../common/ImageCarousel";

import ItemDescription from "./ItemDescription/ItemDescription";
import classes from './ItemDetails.module.css';

function ItemDetails() {
    let itemDetails = useLocation().state;
    return(
        <BasePage>ˇ
        <div className={classes.parentContainer}>
            <div className={classes.carouselAndDescStyles}>
                <ImageCarousel images={itemDetails.images}/>
                <ItemDescription itemInfo={itemDetails}/>
            </div>
        </div>
        {/* <div className={classes.parentContainer}>
        <div className={classes.carouselAndDescStyles}>
            <ImageCarousel images={itemDetails.images}/>
            <ItemDescription itemInfo={itemDetails}/>
        </div>    
        <PriceInfo itemInfo={itemDetails}/>
        <div className={classes.container}> */}
            {/* <ItemDescription itemInfo={itemDetails}/> */}
            
        {/* </div>
        </div> */}
        </BasePage>
    );
}

export default ItemDetails;