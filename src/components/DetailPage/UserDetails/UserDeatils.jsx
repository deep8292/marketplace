import classes from '../styles/UserDescription.module.css';

function UserDetails ({itemInfo}) {
    return(
        <div className={classes.boxContainer}>
            <p className={classes.descriptionTitle}>{itemInfo.seller_info.name}</p>
            <p className={classes.descriptionDetails}>
                Phone: {itemInfo.seller_info.phone}
            </p>
        </div>
    );
}

export default UserDetails;