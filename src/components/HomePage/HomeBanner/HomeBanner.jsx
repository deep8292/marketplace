import classes from '../HomeBanner/HomeBanner.module.css';
import bannerImage from '../../../assets/delivery.webp';
import { useState, useRef, useEffect } from 'react';
import Modal from "../../common/Modal/Modal";
import Register from '../../Register/Register';
import RetroButton, {RetroButtonType} from '../../button/RetroButton';

function HomeBanner () {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [isLoginPressed, setLoginPressed] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
          };
          window.addEventListener('resize', handleResize);
      
          // Cleaning up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    const showModalHandler = (loginSelected) => {
        setLoginPressed(loginSelected);
        setModalIsVisible(true);
    };

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

    return(
        <div className={classes.container}>
            <div className={classes.leftContainer}>
                <label>"Connecting Hearts, Trading Goods, and Changing Lives – Buy, Sell, and Donate with Purpose!"</label>
                <div className={classes.buttonContainer}>
                <RetroButton buttonType={RetroButtonType.GREEN} onClick={() => showModalHandler(true)}>
                    Get Started Today
                </RetroButton>
                </div>
            </div> 
            {modalIsVisible && (
        <Modal ref={modalRef}>
          <Register isLoginPressed={isLoginPressed} />
        </Modal>
      )}
            { isMobile ? null : <div className={classes.rightContainer}>
                <img className={classes.imageContainer} src={bannerImage} />
            </div>}
        </div>
    );
}

export default HomeBanner;