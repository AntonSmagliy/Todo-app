import React from "react";

import SearchPanel from "../SearchPanel/search-panel";
import SearchStatus from "../SearchStatus/search-status";

import './search-bar.css'

const SearchBar = () =>{
    return(
        <div className="container search-bar">
            <SearchPanel />
            <SearchStatus />
        </div>

    );
};
export default SearchBar;