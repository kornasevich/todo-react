import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
         state = {
             done: this.props.check
         };

        checkTask = () => {
            this.setState((state) => {
                return {
                    done: !state.done

                }
            });
            this.props.checkedTask();
            this.props.onCheck();
        };


    render() {
        const {date,  label} = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        let classNamesBlocks = 'todo-list-item-block form-control';

        if(done){
            classNames += ' done';
            classNamesBlocks += ' check-task'
        }

        return(
            <div className={classNamesBlocks}>
                <div className='todo-list-item-content'>
                 <span
                     className={classNames}>

                <span className='todo-task-date'>{ date }</span>

                    <span className='todo-task-text' >{ label }</span>

                <span className='btn btn-outline-danger complete-task'
                    onClick={this.checkTask} >
                  <i className="fas fa-check"> </i>
                </span>

                 <span className='btn btn-outline-danger delete-task'
                       onClick={this.props.onDeleted}>
                     <i className="far fa-trash-alt"> </i>
                     </span>

                  </span>
                </div>
            </div>
        );
    };
}
