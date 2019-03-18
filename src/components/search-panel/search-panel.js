import React from 'react';

import './search-panel.css';


export default class SearchPanel extends React.Component{

    state = {
        term: ''
    };

    onSearchChange = (event) =>{
      const term =  event.target.value;
      this.setState({term});
      this.props.onSearchChange(term);
    };

render(){
    const searchText = 'Search';
    const searchStyle = {
        fontSize: '20px'
    };

        return (
            <form  className="search-input">
                <input
                    className='search-panel form-control'
                    placeholder={searchText}
                    style={searchStyle}
                    value={this.state.term}
                    onChange={this.onSearchChange}
                    />
            </form>
        );
    }
};
