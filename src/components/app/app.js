import React from 'react';

import SearchPanel from '../search-panel/search-panel.js';
import AppHeader from '../app-header/app-header.js';
import TodoList  from '../todo-list/todo-list.js';

import './app.css'

const App = () => {

    const todoStyle = {
        margin: "10% auto 0 auto",
        width:'600px'
    };

    const todoData = [
        {date:'14.03.2019', label: 'Drink Coffee', id: 1},
        {date:'14.03.2019', label: 'Make Awesome App', id: 2 },
        {date:'14.03.2019', label: 'Have a lunch', id: 3}
    ];

    return (
        <div className='todo-block' style={todoStyle}>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;