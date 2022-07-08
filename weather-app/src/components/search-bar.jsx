import React, {useState} from 'react';
import PropType from 'prop-types';

function SearchBar(props) {    
    
    const[location,setLocation] = useState('');
    
    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(`${location}`);
    }    

    return (
        <form className='search-form' onSubmit={handleSubmit }>                
            <input 
                className='search-form-input' 
                id='search' 
                name='search'
                placeholder='Search for location'
                value={location}
                onChange={e => console.log(setLocation(e.target.value))}
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