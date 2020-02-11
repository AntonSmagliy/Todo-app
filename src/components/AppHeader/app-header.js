import React from "react";

import './app-header.css';

const AppHeader = ({more, done}) => {
    return (
        <div className="header container">
            <h1>My ToDo list</h1>
            <p>{ more } to do, { done } done</p>
        </div>

    );
};

export default AppHeader;