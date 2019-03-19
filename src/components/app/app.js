import React from 'react';

import SearchPanel from '../search-panel/search-panel.js';
import AppHeader from '../app-header/app-header.js';
import TodoList  from '../todo-list/todo-list.js';
import TodoListItemAdd from '../todo-list-item-add/todo-list-item-add.js';
import ItemStatusFilter from '../item-status-filter/item-status-filter.js';
import SortList from '../sort/sort';

import './app.css'

export default class App extends React.Component {

    maxId = Math.random();

    state = {
        todoData : JSON.parse(localStorage.getItem("Tasks")) || [],
        term: '',
        valueMin: '',
        valueMax: ''
    };


/*(function(){
        const returnObj = JSON.parse(localStorage.getItem("myKey"));
    this.setState((state)=>{
        return{
             todoData: returnObj
        }
    })
    })();*/
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
          localStorage.setItem('Tasks', JSON.stringify(newArray));
          return{
              todoData: newArray
          }

      });
    };

    addedItem = (date, text) =>{
        const newItem = {
         date: date,
         label: text,
         id: this.maxId++,
         check: true
     };

     this.setState((state) => {
         const newArr = [...state.todoData, newItem];
         localStorage.setItem('Tasks', JSON.stringify(newArr));
         return{
             todoData: newArr
         }
     });
    };

    dateSortUp = (taskBlockA, taskBlockB) => {
        return new Date(this.LabelInDate(taskBlockA.date)) - new Date(this.LabelInDate(taskBlockB.date));
    };

    dateSortDown = (taskBlockA, taskBlockB) => {
        return new Date(this.LabelInDate(taskBlockB.date)) - new Date(this.LabelInDate(taskBlockA.date));
    };

    textSortUp = (taskBlockA, taskBlockB) => {
        if (taskBlockA.label.toUpperCase() < taskBlockB.label.toUpperCase()) return 1;
    };

    textSortDown = (taskBlockA, taskBlockB) => {
        if (taskBlockA.label.toUpperCase() > taskBlockB.label.toUpperCase()) return 1;
    };


    onSortDateUp = () =>{
     this.setState((state)=>{
         const sortArray = state.todoData.slice(0);
           sortArray.sort(this.dateSortUp);
           return{
               todoData: sortArray
           }
     })
    };

    onSortDateDown = () =>{
        this.setState((state)=>{
            const sortArray = state.todoData.slice(0);
            sortArray.sort(this.dateSortDown);
            return{
                todoData: sortArray
            }
        })
    };

    onSortTextUp = () =>{
        this.setState((state)=>{
            const sortArray = state.todoData.slice(0);
            sortArray.sort(this.textSortUp);
            return{
                todoData: sortArray
            }
        })
    };

    onSortTextDown = () =>{
        this.setState((state)=>{
            const sortArray = state.todoData.slice(0);
            sortArray.sort(this.textSortDown);
            return{
                todoData: sortArray
            }
        })
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
            <SortList
                onSortDateUp={this.onSortDateUp}
                onSortDateDown={this.onSortDateDown}
                onSortTextUp={this.onSortTextUp}
                onSortTextDown={this.onSortTextDown}
            />
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