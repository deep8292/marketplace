import classes from '../styles/ItemDescription.module.css';

function ItemDescription ({itemInfo}) {
    return(
        <div className={classes.boxContainer}>
            <p className={classes.descriptionTitle}>{itemInfo.name}</p>
            <p className={classes.descriptionDetails}>
            {itemInfo.description}
            </p>
        </div>
    );
}

export default ItemDescription;