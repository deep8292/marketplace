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
                <RetroButton buttonType={RetroButtonType.BLUE}>Add To Cart</RetroButton>
            </div>
    );
}

export default PriceInfo;