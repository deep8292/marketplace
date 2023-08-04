import classes from '../styles/ItemDescription.module.css';

function ItemDescription ({itemInfo}) {
    return(
        <div className={classes.parentContainer}>
            <div className={classes.boxContainer}>
                <p className={classes.itemName}>{itemInfo.name}</p>
            </div>
            <div className={classes.boxContainer}>
                <p className={classes.descriptionTitle}> 
                Description
                </p>
                <p className={classes.descriptionDetails}>
                {itemInfo.description}
                </p>
            </div>
        </div>
    );
}

export default ItemDescription;