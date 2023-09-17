import RetroButton, {RetroButtonType} from '../../button/RetroButton';
import classes from '../PriceInfo/PriceInfo.module.css';
// import UserDetails from './UserDeatils';

function PriceInfo ({itemInfo}) {
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return(
        <div className={classes.boxContainer}>
                <p className={classes.priceStyle}>{itemInfo.item_price}</p>
                {/* <button className={classes.offerButton}>MAKE AN OFFER</button> */}
                <RetroButton buttonType={RetroButtonType.BLUE}>Make An Offer</RetroButton>
            </div>
        // <div className={classes.parentContainer}>
            
        //     <div className={classes.boxContainer}>
        //         <UserDetails itemInfo={itemInfo}/>
        //     </div> 
        // </div>
    );
}

export default PriceInfo;