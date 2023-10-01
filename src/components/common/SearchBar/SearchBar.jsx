import { useState } from 'react';
import classes from './SearchBar.module.css';
import result from '../../../data/home.json';

function SearchBar () {

    
    const data = result.data.recentlyAdded;
    // State for the filter input
    const [filter, setFilter] = useState('');

    // Filter names based on user input
    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filter);
    console.log(filteredItems);

    return (
        <div className='relative'>
            <input 
                type = 'text'
                className={classes.searchBarStyle}
                placeholder='Search Products Here...'
                onChange={event => setFilter(event.target.value)}
            />
            {filter != "" ? (
                <div className={classes.searchListStyle}>
                    <ul>
                    {filteredItems.map((item, index) => (
                        <li className={classes.searchResultText} key={index}>{item.name}</li>
                    ))}
                    </ul>
              </div>
            ): null}
        </div>
    );
}

export default SearchBar;