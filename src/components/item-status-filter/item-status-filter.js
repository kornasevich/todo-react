import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    render() {
        return(
            <div className='item-status'>
                <button className='btn btn-info '>All</button>
                <button className='btn btn-outline-primary'>Active</button>
                <button className='btn btn-outline-primary'>Done</button>
            </div>
        );
    };
}
