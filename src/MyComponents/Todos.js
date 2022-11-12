import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todo List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todos,pos)=>{
       return (<TodoItem key={pos} todo={todos} onDelete={props.onDelete}/>)
      })}
   
    </div>
  );
}

export default Todos;
