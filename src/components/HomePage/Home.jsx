import HomeHeader from "../common/Header";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import LoginModal from "../Login/LoginModal";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Home() {

    const [modalShow, setModalShow] = useState(false);

    const handleLogin = () => {
        setModalShow(true);
    }

    const handleRegister = () => {
        setModalShow(true);
    }

    return (
        <>
            <HomeHeader handleLogin={handleLogin} handleRegister={handleRegister}/>
            <LoginModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ImageCarousel />
            <GridView />
        </>
    )
}

export default Home;