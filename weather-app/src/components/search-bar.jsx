import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './search-bar.scss';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';

function SearchBar({setQuery}){    
    
    const[location, setLocation] = useState('');

    const handleSearchClick = () => {
        if(location !== ''){
            setQuery({q: location});
        }
    };
    
    return (
        <div className='container'>            
            <div className='search-bar'>                 
                <TextField 
                    value={location}
                    onChange={(e) => setLocation(e.currentTarget.value)} 
                    type='text'
                    placeholder='Search for a Location'
                    className='search-bar__input'              
                />
                <FormControl className='select__city'>                    
                    <Select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}                        
                    >
                        <MenuItem value="Sibiu">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Paris'} >Paris</MenuItem >
                        <MenuItem value={'Berlin'}>Berlin</MenuItem >
                        <MenuItem value={'Madrid'}>Madrid</MenuItem >
                        <MenuItem value={'London'}>London</MenuItem >
                        <MenuItem value={'Rome'}>Rome</MenuItem >
                        <MenuItem value={'New York'}>New York</MenuItem >
                        <MenuItem value={'Tokyo'}>Tokyo</MenuItem >
                        <MenuItem value={'Melbourne'}>Melbourne</MenuItem >
                        <MenuItem value={'Bucarest'}>Bucarest</MenuItem >
                        <MenuItem value={'Ottawa'}>Ottawa</MenuItem >                        
                    </Select>
                </FormControl>                                    
                <Button 
                    className='search-bar__button'
                    variant="contained"
                    onClick={handleSearchClick }
                    >
                    <SearchIcon/>
                </Button>                       
            </div>           
        </div>
    );
};




export default SearchBar;