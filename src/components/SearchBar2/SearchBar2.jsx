import React from 'react';
import './index.css'
import { AddressAutofill } from "@mapbox/search-js-react";
import { useGlobalContext } from '../../context/shelterContext'

import { RiArrowDropDownLine } from "react-icons/ri";
function SearchBar2() {


    

    return (
        <div className='search2-container'>
            <div className='text-above-search-2'>
                <h1>Make animals a part of your future and improve their quality of life. </h1>
                <h1>Begin your search today!</h1>

            </div>
            <form className='px-5 py-5' action="" method="GET">
                <input type="text" name="text" class="search" placeholder="Search by zip code" />
                <input type="submit" name="submit" class="submit" value="Search" />
                
            </form>
        
        <div className='filter-sort-service d-flex col-4 mb-5'>
            <span className='mx-2'>Sort:<span className='mx-1' id="bold-text">Distance<RiArrowDropDownLine /></span></span>
            <span className='mx-2'>Distance:<span className='mx-1' id="bold-text">Volunteer<RiArrowDropDownLine /></span></span>
            <span className='mx-2'>Service:<span className='mx-1' id="bold-text">Any<RiArrowDropDownLine /></span></span>
        </div>
        <div className='outset-border'></div>
        </div>
    );
}

export default SearchBar2;