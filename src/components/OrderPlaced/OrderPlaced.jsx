import classes from './OrderPlaced.module.css';
import checkmark from '../../helpers/checkmark.png';
import RetroButton, { RetroButtonType } from '../button/RetroButton';

function OrderPlaced ({ goToHome }) {

      const onClickReturn = () => {
        goToHome()
      }

    return (
        <>
            <div className={classes.container}>
                <p className={classes.titleConfig}>Thank you for placing the order</p>
                <p className={classes.subTitleConfig}>You will recieve the confirmation and details on your email</p>
                <div style={{padding: '2rem'}}>
                    <img style={{width: '200px', height: '200px', justifyContent: 'center'}} src={checkmark}/>
                </div>
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