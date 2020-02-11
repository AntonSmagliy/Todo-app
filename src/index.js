import  React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/AppHeader/app-header";
import TodoList from "./components/TodoList/todo-list";
import SearchBar from "./components/SearchBar/search-bar";

const App = () => {

    const todoData = [
        {label: "Drink coffee!", important: false, id: 1},
        {label: "Some shit", important: true, id: 2},
        {label: "Vlad lox", important: false, id: 3},
    ];

    return (
        <div>
            <AppHeader more = "1" done = "3"/>
            <SearchBar />
            <TodoList todos = {todoData} />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));