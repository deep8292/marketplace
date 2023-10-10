import classes from './ScrollableGrid.module.css';


function ScrollableGrid({ items, itemInfo }) {

    const onClickItem = (item) => {
        itemInfo(item)
    }

    return (
        <div>
        <p className={classes.titleText}>Recently Viewed</p>
        <div className={classes.gridContainer}>
            {items.map((item) => 
                (
                    <div className={classes.gridItem} key={item.id} onClick={() => onClickItem(item)}>
                        <img className={classes.image} src={item.images[0].imageURL} />
                        <div className={classes.text}>{item.name}</div>
                    </div>
                )
            )}
        </div>
        </div>
    );
}

export default ScrollableGrid;