import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css';
import { Todoitems } from './Todoitems';

let count=0;
export const Todo = () => {
    const[todos,ssetTodos]=useState([]);
    const inputRef=useRef(null);

    const add =()=>{
        ssetTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value="";
    }

    useEffect(()=>{
    console.log(todos);
    },[todos]);
  return (
     <div className='todo'>
    <div className="todo-header">To-Do List</div>
    <div className="todo-add">
    <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input'/>
    <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
    </div>
<div className="todo-list">
{
    todos.map((items,index)=>{
    return <Todoitems key={index} no={items.no} display={items.display} text={items.text}/>
    })
}
</div>
     </div>
  )
}
