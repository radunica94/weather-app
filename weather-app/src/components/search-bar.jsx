import React, {useState} from 'react';
import PropType from 'prop-types';

const SearchBar = ({submitSearch}) => {    
    
    const[location,setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    }    

    return (
        <form className='search-form' onSubmit={onSubmit}>                
            <input 
                className='search-form-input' 
                id='search' 
                name='search'
                placeholder='Search for location'
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button className='search-form-btn' type="submit">
                Search
            </button>
        </form>
    );
}

SearchBar.protoType = {
    submitSearch: PropType.func.isRequired,
};

export default SearchBar;