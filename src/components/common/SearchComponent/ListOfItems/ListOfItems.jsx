import classes from './ListOfItems.module.css';
import { Link } from 'react-router-dom';

function ListOfItems({ items, filter }) {
    
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );

    const handleOnClickItem = () => {
        console.log('Handle on click');
        
    }  

    return(
        <div>
        {filteredItems.length != 0 ? (
            <div className={classes.searchListStyle}>
                <ul>
                {filteredItems.slice(0,5).map((item, index) => (
                    <li 
                        className={classes.searchResultText} 
                        key={index} 
                        onClick={() => handleOnClickItem(item)}>
                        <Link key={item.id} to={`/item/${item.id}`} state={item} style={{ textDecoration: 'none'}}>
                            <p className={classes.labelStyle}>{item.title}</p>
                        </Link>
                    </li>
                ))}
                </ul>
          </div>
        ): null}
        </div>
    );
}

export default ListOfItems;