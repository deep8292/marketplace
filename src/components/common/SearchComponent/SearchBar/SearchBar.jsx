import classes from './SearchBar.module.css';

function SearchBar (props) {
    return (
        <div className='relative'>
            <input 
                type = 'text'
                className={classes.searchBarStyle}
                placeholder='Search Products Here...'
                onChange={event => props.setFilter(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;