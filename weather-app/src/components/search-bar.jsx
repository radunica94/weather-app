import React, {useState} from 'react';
import './search-bar.scss';
import { UilSearch } from '@iconscout/react-unicons';

function SearchBar({setQuery, units,setUnits}){    
    
    const[location, setLocation] = useState('');
    
    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentLocation.name;
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
            
            <div>                           
                <input 
                    value={location}
                    onChange={e => setLocation(e.currentLocation.value)}
                    type='text'
                    placeholder='Search for a Location'
                    className='search-bar__input'                        
                />
                <UilSearch 
                    className='search-bar__search-icon'
                    onClick={handleSearchClick}
                    >
                    Search
                </UilSearch>                       
            </div>
            <div>
                <button
                    className='search-bar__celsius-button'
                    onClick={handleUnitsChange}
                >
                °C        
                </button>
                <button
                    className='search-bar__fahrenheit-button'
                    onClick={handleUnitsChange}
                >
                °F        
                </button>
            </div>
        </div>
    );
};




export default SearchBar;