import classes from '../ItemModalPage/ItemModal.module.css';
import { Link } from 'react-router-dom';

function ItemModal({ item }) {
    return(
        <>
            <div>
                <img className={classes.image}
                src={item.images[0].imageURL}
                />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={classes.row}>
                <p>{item.currency + item.item_price}</p>
                <Link key={item.id} to={`/item/${item.id}`} state={item}>
                    <p>Learn More</p>
                </Link>
            </div>
            </div>
        </>
    );
}

export default ItemModal;