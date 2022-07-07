import React, { Component } from 'react';
// import { getCurrentWeather } from '../api/weather-api';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);        
    // }

    onInputChange(e){
        this.props.inputChange(e);
    }
 
    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted();
    }

    render() { 
        const location = this.props.location;

        return (
            <div className="search-bar">
                <form className='search-form' onSubmit={(e) => this.onFormSubmit(e)}>
                    <button className='search-form-btn' type="submit">
                        Search
                    </button>
                    <input 
                        className='search-form-input' 
                        id='search' 
                        name='search'
                        value={location}
                        onChange = {(e) => this.onInputChange(e)}
                    />
                </form>
            </div>
        );
    }
}
 
export default SearchBar;