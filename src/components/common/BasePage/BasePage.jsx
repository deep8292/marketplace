import { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom';

import Register from "../../Register/Register";
import Modal from "../Modal/Modal";
import HomeHeader from "./Header";
import Footer from "./Footer";
import UserContext from "../../../context/userContext";


function BasePage({ children, showRightButton = true }) {
  const { updateUserLoggedIn } = useContext(UserContext);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoginPressed, setLoginPressed] = useState(true);
  const modalRef = useRef(null);
  

  const showModalHandler = (loginSelected) => {
    setLoginPressed(loginSelected);
    setModalIsVisible(true);
  };

  const hideModalAfterLogin = () => {
    updateUserLoggedIn();
    setModalIsVisible(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalIsVisible(false);
      }
    };

    if (modalIsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalIsVisible]);

  return (
    <div className="container">
      <HomeHeader
        handleLogin={() => showModalHandler(true)}
        handleRegister={() => showModalHandler(false)}
        handleAddItem={() => onClickAddItem()}
        showAddItem={showRightButton}
      />
      {modalIsVisible && (
        <Modal ref={modalRef}>
          <Register isLoginPressed={isLoginPressed} didPressSubmit={hideModalAfterLogin} />
        </Modal>
      )}
      {children}
      <Footer />
    </div>
  );
}

export default BasePage;
