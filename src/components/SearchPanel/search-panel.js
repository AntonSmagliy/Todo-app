import React from "react";

import './search-panel.css';

const SearchPanel = () => {
    const placeholderText = 'Type here to search';
    return (
        <div className="search-panel">
            <input type="text" placeholder={placeholderText}/>
        </div>

    );
};

export default SearchPanel;