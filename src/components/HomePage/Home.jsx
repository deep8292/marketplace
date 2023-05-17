import HomeHeader from "../common/Header";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import EntryModal from "../Entry/EntryModal";
import { Modal } from "react-bootstrap";
import { useState } from "react";


function Home() {
    const [modalShow, setModalShow] = useState(false);
    const [isLogin, setLoggingValue] = useState(true);

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
            console.log('Perform Login') 
        } else {
            console.log('Register User')
        }
    }

    return (
        <>
            <HomeHeader handleLogin={handleLogin} handleRegister={handleRegister}/>
            <EntryModal
                title= {isLogin ? 'Login' : 'Register'}
                isRegister= {isLogin ? false : true}
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={() => registerOrSignIn()}
            />
            <ImageCarousel />
            <GridView />
        </>
    )
}

export default Home;