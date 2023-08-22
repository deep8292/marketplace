import { useEffect, useRef, useState } from "react";

import BasePage from "../common/BasePage";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import Modal from "../common/Modal";
import ItemModal from "../ItemModalPage/ItemModalPage";

import result from '../../data/home.json';
import HomeBanner from "./HomeBanner/HomeBanner";

function Home() {
    const ref = useRef(null);
    const [isItemModalPresent, setItemModalPresent] = useState(false);
    const [item, setItem] = useState(null);
    const data = result.data;

    const onClickItem = (item) => {
        setItem(item);
        setItemModalPresent(true);
    }

    const hideModalHandler = () => {
        setItemModalPresent(false)
    }

    return(
        <BasePage>
        {isItemModalPresent ? <Modal ref={ref} onClose={hideModalHandler}>
                <ItemModal item={item} />
            </Modal> : null}
            <HomeBanner />
            {/* <ImageCarousel images={data.banner} /> */}
            <GridView items={data.recentlyAdded} itemInfo={onClickItem}/>
            
        </BasePage> 
    );
}

export default Home;