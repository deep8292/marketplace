import { useEffect, useRef, useState } from "react";

import BasePage from "../common/BasePage";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import Modal from "../common/Modal";
import ItemModal from "../ItemModalPage/ItemModalPage";

import result from '../../data/home.json';

function Home() {
    const ref = useRef(null);
    const [isItemModalPresent, setItemModalPresent] = useState(false);
    const data = result.data;

    const onClickItem = (item) => {
        console.log(item);
        setItemModalPresent(true);
    }

    const hideModalHandler = () => {
        setItemModalPresent(false)
    }

    return(
        <BasePage>
        {isItemModalPresent ? <Modal ref={ref} onClose={hideModalHandler}>
                <ItemModal />
            </Modal> : null}
            <ImageCarousel images={data.banner} />
            <GridView items={data.recentlyAdded} itemInfo={onClickItem}/>
            
        </BasePage> 
    );
}

export default Home;