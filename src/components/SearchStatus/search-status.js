import React from "react";

import './search-status.css'

const SearchStatus = () =>{
  return(
      <div className="buttons">
          <button className="active">All</button>
          <button className="unactive">Active</button>
          <button className="unactive">Done</button>
      </div>
  );
};
export default SearchStatus;