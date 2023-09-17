import classes from './GridView.module.css';
import images from '../../helpers/images';
import { Link } from 'react-router-dom';

function TitleView({ items, itemInfo }) {


    const onClickItem = (item) => {
        itemInfo(item)
    }

    return (
        <>
        <p className={classes.titleText}>Recently Added</p>
        <div className={classes.container}>
            {items.map((item) => 
                (
                    <div className={classes.itemContainer} key={item.id} onClick={() => onClickItem(item)}>
                        <img className={classes.image} src={item.images[0].imageURL} />
                        <div className={classes.text}>{item.name}</div>
                    </div>
                )
            )}
        </div>
        </>
    )
}

export default TitleView;