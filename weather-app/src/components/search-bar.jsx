import React, {useState} from 'react';
import './search-bar.scss';

function SearchBar({setQuery,units,setUnits}){    
    
    const[location, setLocation] = useState('');
    
    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){
            setUnits(selectedUnit);
        }
    };

    const handleSearchClick = () => {
        if(location !== ''){
            setQuery({q: location});
        }
    };


    return (
        <div className='container'>
            <div className='search-bar'>                           
                <input 
                    value={location}
                    onChange={(e) => setLocation(e.currentTarget.value)}
                    type='text'
                    placeholder='Search for a Location'
                    className='search-bar__input'                        
                />
                <button 
                    className='search-bar__button'
                    onClick={handleSearchClick }
                    >
                    Search
                </button>                       
            </div>           
        </div>
    );
};




export default SearchBar;