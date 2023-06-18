import HomeHeader from "../common/Header";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";
import EntryModal from "../EntryPage/EntryModal";
import { useContext, useState } from "react";
import Footer from "../common/Footer";
import UserContext from "../../context/userContext";


function Home() {
    const [modalShow, setModalShow] = useState(false);
    const [isLogin, setLoggingValue] = useState(true);
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
            <Footer />
        </>
    )
}

export default Home;