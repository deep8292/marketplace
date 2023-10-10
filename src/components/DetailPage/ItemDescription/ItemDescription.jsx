import classes from '../ItemDescription/ItemDescription.module.css';
import PriceInfo from '../PriceInfo/PriceInfo';



function ItemDescription ({itemInfo}) {

    return(
        <div className={classes.parentContainer}>
                <p className={classes.userDetails}> Posted By - {itemInfo.seller_info.name}</p>
                <p className={classes.itemName}>{itemInfo.name}</p>
                <PriceInfo itemInfo={itemInfo}/>
            <div>
                <p className={classes.descriptionTitle}> 
                Overview
                </p>
                <p className={classes.descriptionDetails}>
                {itemInfo.description}
                </p>
            </div>
        </div>
    );
}

export default ItemDescription;