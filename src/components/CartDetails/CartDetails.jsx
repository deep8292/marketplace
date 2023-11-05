import classes from './CartDetails.module.css';
import { useContext, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import BasePage from '../common/BasePage/BasePage.jsx';
import Modal from '../common/Modal/Modal';
import UserContext from '../../context/userContext';
import RetroButton, { RetroButtonType } from '../button/RetroButton';
import OrderPlaced from '../OrderPlaced/OrderPlaced';

function CartDetails () {

    const { cartCount, cartItems, removeFromCart, emptyCart } = useContext(UserContext);
    const [isItemModalPresent, setItemModalPresent] = useState(false);
    const navigator = useNavigate();
    const ref = useRef(null);

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

    const returnToHome = () => {
        setItemModalPresent(false);
        emptyCart();
        navigator('/');
    }

    const cartDetails = () => {
        return (<>
        {isItemModalPresent ? orderPlaced() : null}
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
                            <RetroButton buttonType={RetroButtonType.BLUE} onClick={showOrderModal}>
                                Checkout
                            </RetroButton>
                        </div>
                    </div>
                </div>
        </div>
        </>
        )
    }

    const orderPlaced = () => {
        return (
            <Modal ref={ref} onClose={() => setItemModalPresent(false)}>
                <OrderPlaced goToHome={returnToHome}/>
            </Modal>
                
        );
    }

    const showOrderModal = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This adds smooth scrolling animation
          });
        setItemModalPresent(true);
    }

    const noItemsInCart = () => {
        return (
                <div className={classes.noItemPage}>
                    <div className={classes.content}>
                        <p className={classes.titleConfig}>No items in cart</p>
                    </div>
                </div>
        );
    }

    return (
        <BasePage showRightButton={false}>
            {cartCount > 0 ? cartDetails() : noItemsInCart()}
        </BasePage>
    );
}

export default CartDetails;