import BasePage from "../common/BasePage";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import { useState } from "react";
import Modal from "../common/Modal";
import ItemModal from "../ItemModalPage/ItemModalPage";

function Home() {

    const [isItemModalPresent, setItemModalPresent] = useState(false);

    const onClickItem = (item) => {
        console.log(item);
        setItemModalPresent(true);
    }

    const hideModalHandler = () => {
        setItemModalPresent(false)
    }

    return(
        <BasePage>
            <ImageCarousel />
            <GridView itemInfo={onClickItem}/>
            {isItemModalPresent ? <Modal onClose={hideModalHandler}>
                <ItemModal />
            </Modal> : null}
        </BasePage> 
    );
}

export default Home;