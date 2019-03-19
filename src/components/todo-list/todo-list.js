import React from 'react'

import TodoListItem from '../todo-list-item/todo-list-item.js';
import './todo-list.css';


export default class TodoList extends React.Component {

    state = {
        check: false
    };

    checkTaskColor = () => {
        this.setState((state) =>{
            return{
                check: !state.check
            }
        });
    };

render(){

    let classLists = 'list-group-item';

    if(this.state.check){
        classLists += ' check-task';
    }

    const elements = this.props.todos.map((item) => {
        return(
                <TodoListItem key={item.id}
                              className={classLists}
                              date={item.date}
                              label={item.label}
                              onDeleted={()=>this.props.onDeleted(item.id)}
                              checkedTask={this.checkTaskColor}
                              check={item.check}
                />
        );
    });

    return (
        <div className='list-group todo-list '>
            { elements }
        </div>
    );
}

};