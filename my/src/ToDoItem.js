import React from 'react';

function ToDoItem(props){
    return(
  <div className='toDo'>
    <input 
    type="checkbox"
    checked={props.item.completed}
    onChange={function() {
      props.handleChange(props.item.id)}} 
      />
    <p>{props.item.text}</p>
  </div>
    )
}
export default ToDoItem