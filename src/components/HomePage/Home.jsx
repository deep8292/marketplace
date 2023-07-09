import { useContext, useState } from "react";

import HomeHeader from "../common/Header";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import EntryModal from "../EntryPage/EntryModal";
import Footer from "../common/Footer";
import Modal from "../common/Modal";

import UserContext from "../../context/userContext";
import Register from "../Register/Register";
// import { Modal } from "react-bootstrap";

function Home() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [isLogin, setLoggingValue] = useState(true);
    const [item, setItem] = useState();
    const {setLoggedIn} = useContext(UserContext);
    
    const handleLogin = () => {
        setLoggingValue(true);
        setModalShow(true);
    }

    const handleRegister = () => {
        setLoggingValue(false);
        setModalShow(true);
    }

    const registerOrSignIn= () => {
        if (isLogin) {
            // console.log('Perform Login') 
            setLoggedIn(true);
        } else {
            console.log('Register User')
        }
        setModalShow(false);
    }

    const showModalHandler = () => {
        setModalIsVisible(true)
    }

    const hideModalHandler = () => {
        setModalIsVisible(false)
    }
    

    return (
        <>
            <HomeHeader handleLogin={showModalHandler} handleRegister={showModalHandler}/>
            {modalIsVisible ? <Modal onClose={hideModalHandler}>
                <Register />
            </Modal> : null}
            
            {/* <EntryModal
                title= {isLogin ? 'Login' : 'Register'}
                isRegister= {isLogin ? false : true}
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={() => registerOrSignIn()}
            /> */}
            <ImageCarousel />
            <GridView />
            <Footer />
        </>
    )
}

export default Home;