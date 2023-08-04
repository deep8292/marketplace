import classes from '../DetailPage/PriceInfo.module.css';
import UserDetails from './UserDeatils';

function PriceInfo ({itemInfo}) {
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return(
        <div className={classes.parentContainer}>
            <div className={classes.boxContainer}>
                <p className={classes.priceStyle}>{currencyFormat(itemInfo.item_price)}</p>
                <button className={classes.offerButton}>MAKE AN OFFER</button>
            </div>
            <div className={classes.boxContainer}>
                <UserDetails itemInfo={itemInfo}/>
            </div>
        </div>
    );
}

export default PriceInfo;