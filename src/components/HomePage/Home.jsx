import { useEffect, useRef, useState } from "react";

import BasePage from "../common/BasePage/BasePage";

import GridView from "../common/GridView";
import Modal from "../common/Modal/Modal";
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

    const limitedItems = data.recentlyAdded.slice(0, 8);

    return(
        <BasePage>
        {isItemModalPresent ? <Modal ref={ref} onClose={() => setItemModalPresent(false)}>
                <ItemModal item={item} />
            </Modal> : null}
            <HomeBanner />
            {/* <ImageCarousel images={data.banner} /> */}
            <GridView items={limitedItems} itemInfo={onClickItem}/>
        </BasePage> 
    );
}

export default Home;