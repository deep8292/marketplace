import classes from '../HomeBanner/HomeBanner.module.css';
import bannerImage from '../../../assets/delivery.webp';
import RetroButton, {RetroButtonType} from '../../button/RetroButton';

function HomeBanner () {
    return(
        <div className={classes.container}>
            <div className={classes.leftContainer}>
                <label>"Connecting Hearts, Trading Goods, and Changing Lives – Buy, Sell, and Donate with Purpose!"</label>
                <div className={classes.buttonContainer}>
                    <RetroButton color={RetroButtonType.green} title='Get Started Today' />
                </div>
            </div> 
            <div className={classes.rightContainer}>
                <img className={classes.imageContainer} src={bannerImage} />
            </div>
        </div>
    );
}

export default HomeBanner;