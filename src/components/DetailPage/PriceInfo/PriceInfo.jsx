import RetroButton, {RetroButtonType} from '../../button/RetroButton';
import classes from '../PriceInfo/PriceInfo.module.css';
// import UserDetails from './UserDeatils';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/userContext';


function PriceInfo ({itemInfo}) {

    const [isItemInCart, setItemInCart] = useState(false);
    const { cartItems, addToCart, removeFromCart } = useContext(UserContext);

    useEffect(() => {
        let isInCart = cartItems.some((item) => item.id == itemInfo.id);
        setItemInCart(isInCart);
    }, []);

     const onClickAddToCart = () => {
        if (isItemInCart) {
            removeFromCart(itemInfo.id);
            setItemInCart(false);
        } else {
            addToCart(itemInfo);
            setItemInCart(true);
        }
     }

    return(
        <div className={classes.boxContainer}>
                <p className={classes.priceStyle}>{itemInfo.item_price}</p>
                <RetroButton 
                    buttonType={RetroButtonType.BLUE}
                    onClick={onClickAddToCart}
                >
                     {isItemInCart ?  `Remove From Cart` : `Add To Cart`}
                </RetroButton>
            </div>
    );
}

export default PriceInfo;