import React from 'react';

import './sort.css';

export default class SortList extends React.Component{
    render(){
        return(
            <div className='sort'>

                <div className='sort-list_date'>
                        <div className='sort-list_up' onClick={this.props.onSortDateUp}> </div>
                        <div className='sort-list_down' onClick={this.props.onSortDateDown}> </div>
                </div>

                <div className='sort-list_text'>
                        <div className='sort-list_up' onClick={this.props.onSortTextUp}> </div>
                        <div className='sort-list_down' onClick={this.props.onSortTextDown}> </div>
                </div>

            </div>
          )
       }
   };

