import React from 'react';

import SearchPanel from '../search-panel/search-panel.js';
import AppHeader from '../app-header/app-header.js';
import TodoList  from '../todo-list/todo-list.js';
import TodoListItemAdd from '../todo-list-item-add/todo-list-item-add.js';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js';

import './app.css'

export default class App extends React.Component {

    maxId = 3;

    state = {
        todoData : [
            {date:'18.03.2019', label: 'Drink Coffee', id: 0},
            {date:'18.03.2019', label: 'Make Awesome App', id: 1 },
            {date:'18.03.2019', label: 'Have a lunch', id: 2}
        ],
        term: '',
        valueMin: '',
        valueMax: ''
    };

   onSearchChange = (term) =>{
      this.setState({term});
    };

    onDateFilterMin = (valueMin) =>{
        this.setState({valueMin});
    };

    onDateFilterMax = (valueMax) =>{
        this.setState({valueMax});
    };

    LabelInDate = (label) => {
    return label.split('.').reverse().join('-');
    };


    filter(items, term, valueMin, valueMax){
        if(term.length === 0 && valueMin === '' && valueMax === ''){
            return items;
        }
        if(valueMin === ''){
            valueMin = "2000-01-01";
        }

        if(valueMax === ''){
            valueMax = '3000-01-01';
        }
       return items.filter((item) =>{
            return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1
                && +new Date(valueMin) <= +new Date(this.LabelInDate(item.date))
                && +new Date(this.LabelInDate(item.date)) <= +new Date(valueMax);
        })
    };

    deleteItem = (id) =>{
      this.setState((state) => {
          const idx = state.todoData.findIndex((el) => el.id === id);

          const newArray = [...state.todoData.slice(0, idx), ...state.todoData.slice(idx + 1)];

          return{
              todoData: newArray
          }

      });
    };

    addedItem = (date, text) =>{
     const newItem = {
         date: date,
         label: text,
         id: this.maxId++
     };

     this.setState((state) => {
         const newArr = [...state.todoData, newItem];

         return{
             todoData: newArr
         }
     });
    };

render(){

  const visibleItems = this.filter(this.state.todoData, this.state.term, this.state.valueMin, this.state.valueMax);

    return (
        <div className='todo-block'>

            <div className="d-flex filter-panel">
            <ItemStatusFilter
                  onDateFilterMin={this.onDateFilterMin}
                  onDateFilterMax={this.onDateFilterMax}/>

            <SearchPanel onSearchChange={this.onSearchChange}/>
            </div>
            <AppHeader/>
            <TodoListItemAdd onItemAdd={this.addedItem}/>
            <TodoList
                todos={visibleItems}
                onDeleted={this.deleteItem}
            />
            <div className="search-panel d-flex">
            </div>
        </div>
    );
}


}