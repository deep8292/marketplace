import { useLocation } from "react-router-dom";

import HomeHeader from "../common/Header";
import Footer from "../common/Footer";
import ImageCarousel from "../common/ImageCarousel";
import ItemDescription from "./ItemDescription";

import classes from '../styles/ItemDetails.module.css';
import UserDetails from "./UserDeatils";

function ItemDetails() {
    let itemDetails = useLocation();
    return(
        <>
        <HomeHeader />
        <ImageCarousel />
        <div className={classes.container}>
            <ItemDescription />
            <UserDetails />
            {/* <div style={{ width: '50%', height: '200px', backgroundColor: 'red' }}></div>
            <div style={{ width: '50%', height: '200px', backgroundColor: 'blue' }}></div> */}
        </div>
        <Footer />
        </>
    );
}

export default ItemDetails;