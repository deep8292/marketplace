import classes from '../styles/UserDescription.module.css';

function UserDetails () {
    return(
        <div className={classes.boxContainer}>
            <p className={classes.descriptionTitle}>User Name</p>
            <p className={classes.descriptionDetails}>
            Phone: +1 (777)-999-999<br />
            Email: john@doe.com
            </p>
        </div>
    );
}

export default UserDetails;