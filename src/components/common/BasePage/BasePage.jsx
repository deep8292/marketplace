import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import Register from "../../Register/Register";
import Modal from "../Modal/Modal";
import HomeHeader from "./Header";
import Footer from "./Footer";


function BasePage({ children }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoginPressed, setLoginPressed] = useState(true);
  const modalRef = useRef(null);
  

  const showModalHandler = (loginSelected) => {
    setLoginPressed(loginSelected);
    setModalIsVisible(true);
  };

  const onClickAddItem = () => {
    
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
        showAddItem={true}
      />
      {modalIsVisible && (
        <Modal ref={modalRef}>
          <Register isLoginPressed={isLoginPressed} />
        </Modal>
      )}
      {children}
      <Footer />
    </div>
  );
}

export default BasePage;
