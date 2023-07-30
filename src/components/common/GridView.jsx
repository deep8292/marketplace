import classes from '../styles/GridView.module.css'
import images from '../../helpers/images';
import { Link } from 'react-router-dom';

function TitleView({ items, itemInfo }) {

    // const items = [
    //     {
    //         'image': '../../assets/1.jpg',
    //         'name': 'Item 1',
    //         'id': 1
    //     },
    //     {
    //         'image': '../../assets/2.jpg',
    //         'name': 'Item 2',
    //         'id': 2
    //     },
    //     {
    //         'image': '../../assets/3.jpg',
    //         'name': 'Item 3',
    //         'id': 3
    //     },
    //     {
    //         'image': '../../assets/4.jpg',
    //         'name': 'Item 4',
    //         'id': 4
    //     },
    //     {
    //         'image': '../../assets/5.jpg',
    //         'name': 'Item 5',
    //         'id': 5
    //     },
    // ]

    const onClickItem = (item) => {
        itemInfo(item)
    }

    return (
        <>
        <p className={classes.titleText}>Recently Added</p>
        <div className={classes.container}>
            {items.map((item) => 
                (
                // <Link key={item.id} style={{textDecoration: 'none'}} to={`/item/${item.id}`} state={item}>
                    <div key={item.id} onClick={() => onClickItem(item)}>
                        <img className={classes.image} src={images[item.id-1]} />
                        <div className={classes.text}>{item.name}</div>
                    </div>
                // </Link>
                )
            )}
        </div>
        </>
    )
}

export default TitleView;