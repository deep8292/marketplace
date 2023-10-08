import ListOfItems from "./ListOfItems/ListOfItems";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

import result from '../../../data/home.json';

function SearchComponent() {

    const [filter, setFilter] = useState('');
    const data = result.data.recentlyAdded;

    const handleFilterChange = (value) => {
        setFilter(value);
      };
    
    return (
        <div>
            <SearchBar setFilter={handleFilterChange}/>
            {filter && <ListOfItems items={data} filter={filter} />}
        </div>
    );
}

export default SearchComponent;