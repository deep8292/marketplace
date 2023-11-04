import { useLocation } from "react-router-dom";

import BasePage from "../common/BasePage/BasePage";
import ImageCarousel from "../common/ImageCarousel";

import ScrollableGrid from './ScrollableGrid/ScrollabelGrid';
import ItemDescription from "./ItemDescription/ItemDescription";
import classes from './ItemDetails.module.css';
import result from '../../data/home.json';


function ItemDetails() {
    let itemDetails = useLocation().state;
    const limitedItems = result.data.recentlyAdded.slice(0, 4);

    const onClickItem = (item) => {
        console.log(item);
    }

    return(
        <BasePage>
        <div className={classes.parentContainer}>
            <div className={classes.carouselAndDescStyles}>
                <ImageCarousel images={itemDetails.images}/>
                <ItemDescription itemInfo={itemDetails}/>
            </div>
        <ScrollableGrid items={limitedItems} itemInfo={onClickItem}/>
        </div>
        </BasePage>
    );
}

export default ItemDetails;