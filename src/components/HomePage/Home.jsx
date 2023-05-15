import HomeHeader from "../common/Header";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import EntryModal from "../Entry/EntryModal";
import { Modal } from "react-bootstrap";
import { useState } from "react";


function Home() {
    const [modalShow, setModalShow] = useState(false);
    const [loginTap, setLoginTap] = useState(true);

    const handleLogin = () => {
        setLoginTap(true);
        setModalShow(true);
    }

    const handleRegister = () => {
        setLoginTap(false);
        setModalShow(true);
    }

    return (
        <>
            <HomeHeader handleLogin={handleLogin} handleRegister={handleRegister}/>
            <EntryModal
                title= {loginTap ? 'Login' : 'Register'}
                isRegister= {loginTap ? false : true}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ImageCarousel />
            <GridView />
        </>
    )
}

export default Home;