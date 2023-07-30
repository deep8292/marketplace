import classes from '../styles/UserDescription.module.css';

function UserDetails ({itemInfo}) {
    const phone = `Phone: + ${itemInfo.seller_info.phone}`;
    console.log(phone);
    return(
        <div className={classes.boxContainer}>
            <p className={classes.descriptionTitle}>{itemInfo.seller_info.name}</p>
            <p className={classes.descriptionDetails}>
                {phone}
            <br />
            </p>
        </div>
    );
}

export default UserDetails;