import React from 'react';

import './search-panel.css';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js';

const SearchPanel = () =>{

    const searchText = 'Type search';
    const searchStyle = {
        fontSize: '20px'
    };

    return (
        <div className='search-panel-block'>

            <input
                className='form-control todo-task-date'
                type='date' />

             <input
               className='search-panel form-control'
               placeholder={searchText}
               style={searchStyle}
              />
            <ItemStatusFilter />
        </div>
    );
};

export default SearchPanel;