import React from 'react';

import './todo-list-item-add.css';

export default class TodoListItemAdd extends React.Component {

    state = {
        label: '',
        date: ''
    };

    onLabelChange = (event) =>{
      this.setState({
          label: event.target.value
      });
    };

    onDateChange = (event) =>{
        this.setState({
            date: event.target.value.split('-').reverse().join('.')
        });
    };



    onSubmit = (event) =>{
        event.preventDefault();
        if(this.state.date !== '' && this.state.label !== ''){
            this.props.onItemAdd(this.state.date, this.state.label);
            document.querySelector('.todo-task-text-add').style.border = '1px solid #ced4da';
            document.querySelector('.todo-task-date').style.border = '1px solid #ced4da';
        } else if(this.state.date === '' && this.state.label === ''){
            document.querySelector('.todo-task-text-add').style.border = '1px solid red';
            document.querySelector('.todo-task-date').style.border = '1px solid red';
        } else if(this.state.date === ''){
            document.querySelector('.todo-task-date').style.border = '1px solid red';
            document.querySelector('.todo-task-text-add').style.border = '1px solid #ced4da';
        } else if(this.state.label === ''){
            document.querySelector('.todo-task-date').style.border = '1px solid #ced4da';
            document.querySelector('.todo-task-text-add').style.border = '1px solid red';
        }


    };

      render() {
         return(
          <form className='todo-list-item-add'
          onSubmit={this.onSubmit}>

            <input
                 className='form-control todo-task-date'
                 type='date' onChange={this.onDateChange}/>
             <input
                 className='form-control todo-task-text-add'
                 type='text' placeholder='Add task' onChange={this.onLabelChange}/>

        <button className='btn btn-info btn-add' >Add</button>
        </form>
       );
    };
};

