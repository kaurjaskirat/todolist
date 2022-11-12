// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import AddTodo from "./MyComponents/AddTodo"

import React,{useState} from 'react';


function App() {
  let initTodo;
if(localStorage.getItem("todos")){
  initTodo=[];
}
else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}
  const onDelete=(todo)=>{
    console.log("I am on Delete of Todo",todo);

    
    setTodos(todos.filter((e)=> {                    
      return  e!==todo;
     } ));
    //  localStorage.getItem("todos");
    localStorage.setItem('todos',JSON.stringify(todos));
  }
const addTodo=(title,des)=>{
  console.log("I am adding this todo",title,des);
  // let sno=todos[todos.length-1].sno +1;
  let sno;
  if(todos.length===0){
  sno=0;
  }
  else{
     sno=todos[todos.length-1].sno +1;
  }
const myTodo={
  sno:sno,
  title:title,
  des:des,
}
setTodos([...todos,myTodo]);
console.log(myTodo);
localStorage.setItem('todos',JSON.stringify(todos));

}

  const[todos,setTodos]=useState([]);
  return (
    <>
    <Header title="MyToDoList"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
  );
}

export default App;
