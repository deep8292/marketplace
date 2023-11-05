import classes from './CartDetails.module.css';
import { useContext } from 'react';

import BasePage from '../common/BasePage/BasePage.jsx';
import UserContext from '../../context/userContext';

function CartDetails () {

    const { cartCount, cartItems } = useContext(UserContext);

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
                    <p className={classes.titleConfig}>${item.price}</p>
                </div>
                )
            })}
            </div>
      </BasePage>
    );
}

export default CartDetails;