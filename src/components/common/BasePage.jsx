import { useState } from "react";

import Register from "../Register/Register";
import Modal from "./Modal";
import HomeHeader from "./Header";
import Footer from "./Footer";

function BasePage ({children}) {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [isLoginPressed, setLoginPressed] = useState(true);

    const showModalHandler = (loginSelected) => {
        setLoginPressed(loginSelected);
        setModalIsVisible(true)
    }

    const hideModalHandler = () => {
        setModalIsVisible(false)
    }

    return (
        <>
        <HomeHeader handleLogin={() => showModalHandler(true)} handleRegister={() => showModalHandler(false)}/>
            {modalIsVisible ? <Modal onClose={hideModalHandler}>
                    <Register isLoginPressed={isLoginPressed} />
                </Modal> : null}
            {children}
        <Footer />
        </>
    );
}

export default BasePage;
