import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
         state = {
             done: false
         };

        onLabelClick = () => {
            this.setState({
               done: true
            });
        };

    render() {
        const {date,  label} = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';

        if(done){
            classNames += ' done';
        }

        return(
            <span
                className={classNames}>
          <span className='todo-task-date'>{ date }</span>
                <span className='todo-task-text' >{ label }</span>
          <span className='btn btn-outline-danger complete-task' onClick={this.onLabelClick}><i className="fas fa-check"> </i> </span>
          <span className='btn btn-outline-danger delete-task' onClick={() =>{console.log('click me')}}><i className="far fa-trash-alt"> </i> </span>
      </span>
        );
    };
}
