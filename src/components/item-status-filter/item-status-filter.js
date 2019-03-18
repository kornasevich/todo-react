import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    state = {
        valueMin: "",
        valueMax: ""
    };

    onDateFilterMin = (event) =>{
        const valueMin =  event.target.value;
        this.setState({valueMin});
        this.props.onDateFilterMin(valueMin);
    };

    onDateFilterMax = (event) =>{
        const valueMax =  event.target.value;
        this.setState({valueMax});
        this.props.onDateFilterMax(valueMax);
    };

    render() {
        return(
            <div className='item-status'>
                <input type="date" className="form-control todo-task-date-filter min-date" value={this.state.valueMin} onChange={this.onDateFilterMin}/>
                <input type="date" className="form-control todo-task-date-filter max-date" value={this.state.valueMax} onChange={this.onDateFilterMax}/>

            </div>
        );
    };
}
