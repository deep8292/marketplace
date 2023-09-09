import classes from '../ItemModalPage/ItemModal.module.css';
import { Link } from 'react-router-dom';

function ItemModal({ item }) {
    return(
        <>
            <div>
                <img className={classes.image}
                src={item.images[0].imageURL}
                />
            <h1 className={classes.titleText}>{item.name}</h1>
            <p className={classes.descriptionDetails}>{item.description}</p>
            <div className={classes.row}>
                <p className={classes.priceDetails}>{item.currency + item.item_price}</p>
                <Link key={item.id} to={`/item/${item.id}`} state={item}>
                    <p className={classes.priceDetails}>Learn More</p>
                </Link>
            </div>
            </div>
        </>
    );
}

export default ItemModal;