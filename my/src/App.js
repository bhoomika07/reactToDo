import React, {Component} from 'react';
import ToDoItem from './ToDoItem.js';
import todosData from "./toDoData.js";
import { render } from '@testing-library/react';

class App extends Component {
    constructor(){
        super()
        this.state= {
            todos: todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo=>{
                if (todo.id===id) {
                    todo.completed= !todo.completed
                }
                return todo
            })
            return{
                todos:updatedTodos
            }
        })
    }
render() {
    const toDoItems = this.state.todos.map(item => <ToDoItem key = {item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div className="todo-list">
                {toDoItems}
            </div>
        )
    }
}
export default App

