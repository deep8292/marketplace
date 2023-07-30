import classes from '../ItemModalPage/ItemModal.module.css';

function ItemModal({ item }) {
    return(
        <>
            <div>
                <img className={classes.image}
                src={item.images[0].imageURL}
                />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.currency + item.item_price}</p>
            </div>
        </>
    );
}

export default ItemModal;