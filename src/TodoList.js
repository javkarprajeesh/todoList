import React from 'react';
import './App.css';


function TodoList(props){

    const {list} = props

    
    
    
    return(
        <ul className= "listElement">
            { list.map((todo,index)=>   <li className="item" key = {index}>{todo}<button className = "removeButton" onClick = { () => {props.onDelete(index)}}>Remove</button></li>   )}
            
        </ul>
    )
    
}

export default TodoList;