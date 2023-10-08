import { useEffect } from 'react';
import classes from './ListOfItems.module.css';

function ListOfItems({ items, filter }) {

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleOnClickItem = () => {
        console.log('Handle on click');
    }  

    useEffect( () => {

    },[]) 

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
                        {item.name}
                    </li>
                ))}
                </ul>
          </div>
        ): null}
        </div>
    );
}

export default ListOfItems;