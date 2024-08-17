import { useState } from "react";

export default function TodoInput(props) {
  const {addTodo, todoVal, setTodoVal} = props;


  return (
    <header>
      <input value = {todoVal} onChange={(e)=>{
        setTodoVal(e.target.value)
      }} type="text" className="input-box" placeholder="Add a Todo"/>
      <button onClick={()=>{
        addTodo(todoVal)
        setTodoVal('')
      }}>Add</button>
    </header>
  )
}
