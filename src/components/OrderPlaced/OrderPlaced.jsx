import classes from './OrderPlaced.module.css';

import Lottie from "lottie-react";
import animationData from '../../helpers/animation_check_mark.json';
import RetroButton, { RetroButtonType } from '../button/RetroButton';

function OrderPlaced ({ goToHome }) {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, 
      };

      const onClickReturn = () => {
        goToHome()
      }

    return (
        <>
            <div className={classes.container}>
                <p className={classes.titleConfig}>Thank you for placing the order</p>
                <p className={classes.subTitleConfig}>You will recieve the confirmation and details on your email</p>
                <Lottie animationData={animationData} loop={true} height={50} width={50} />
                <RetroButton 
                    buttonType={RetroButtonType.YELLOW}
                    onClick={onClickReturn}
                >
                    Return To Home
                </RetroButton>
            </div>
        </>
    );
}

export default OrderPlaced;