import classes from './CartDetails.module.css';
import { useContext } from 'react';

import BasePage from '../common/BasePage/BasePage.jsx';
import UserContext from '../../context/userContext';
import RetroButton, { RetroButtonType } from '../button/RetroButton';

function CartDetails () {

    const { cartCount, cartItems, removeFromCart } = useContext(UserContext);

    const onClickDelete = (item) => {
        removeFromCart(item.id);
    }

    const closeButton = (item) => {
        return (
          <RetroButton buttonType={RetroButtonType.YELLOW} onClick={() => onClickDelete(item)}>
            &times;
          </RetroButton>
        );
    }

    const calculatedPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0)
    }

    const caculatedTax = () => {
        const tax = (calculatedPrice() * 15)/100
        return parseFloat(tax.toFixed(2));
    }

    const priceWithTax = () => {
        return parseFloat((calculatedPrice() + caculatedTax()).toFixed(2));
    }

    return (
        <BasePage>
            <div className={classes.headerTextContainer}>
                <p className={classes.headerTextConfig}>Your Cart ({cartCount} items)</p>
            </div>
            <div>
                <div className={classes.headerStyle}>
                    <p className={classes.titleConfig}>Item</p>
                    <p className={classes.titleConfig}>Price</p>
                </div>
                {cartItems.map((item) => {
                    return(
                    <div key={item.id} className={classes.listItemStyle}>
                    
                        <div className={classes.imageAndTitle}>
                            <div className={classes.imgaeContainer}>
                            <img className={classes.imageStyles} src={item.images[0].imageURL} />
                        </div>
                        <div style={{ width: '80%'}}>
                            <p className={classes.titleConfig}>{item.title}</p>
                            <p className={classes.descConfig}>{item.description}</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center'}}>
                        <p className={classes.titleConfig}>${item.price}</p>
                        {closeButton(item)}
                        </div>                    
                    </div>
                    )
                })}
            </div>
            <div className={classes.cartSummary}>
                <div className={classes.sectionLeft}></div>
                
                    <div className={classes.sectionRight}>
                        <div >
                            <div className={classes.orderSummary}>
                                <p className={classes.titleConfig}>SubTotal</p>
                                <p className={classes.priceConfig}>${calculatedPrice()}</p>
                            </div>
                            <div className={classes.orderSummary}>
                                <p className={classes.titleConfig}>Tax</p>
                                <p className={classes.priceConfig}>${caculatedTax()}</p>
                            </div>
                            <div className={classes.orderSummary}>
                                <p className={classes.titleConfig}>Total</p>
                                <p className={classes.priceConfig}>${priceWithTax()}</p>
                            </div>
                            <div className={classes.checkoutContainer}>
                                <div></div>
                                <RetroButton buttonType={RetroButtonType.BLUE}>
                                    Checkout
                                </RetroButton>
                            </div>
                            
                        </div>
                        
                    </div>
                
                
            </div>
            
        </BasePage>
    );
}

export default CartDetails;