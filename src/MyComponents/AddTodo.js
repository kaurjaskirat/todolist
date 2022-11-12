// import React from 'react';
import React,{useState} from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const submit=(e)=>{
  e.preventDefault();
  if(!title || !des){
    alert("Title and description cannot be blank");
  }
  props.addTodo(title,des);
  }
  return (
    <div className='container my-3'>
        <h3>Add To Do</h3>
      <form onSubmit={submit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="des" className="form-label">Todo description</label>
    <input type="text" value ={des}  onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="des"/>
  </div>
  
  <button type="submit" className="btn btn-primary">AddTodo</button>
</form>
    </div>
  );
}

export default AddTodo;
