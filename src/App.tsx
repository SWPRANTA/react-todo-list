import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState(['']);
  const [todoVal, setTodoVal] = useState('');

  function persistTodos(newList: string[]) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function addTodo(todo: string) {
    setTodos([...todos, todo]);
    persistTodos([...todos, todo]);
  }

  function deleteTodo(index:number) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodos);
    persistTodos(newTodos);
  }

  function editTodo(index: number) {
    const valueToEdit = todos[index];
    setTodoVal(valueToEdit);
    deleteTodo(index);
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  }, [])
  return (
    <>
      <TodoInput todoVal = {todoVal} setTodoVal = {setTodoVal} addTodo={addTodo}/>
      <TodoList todoVal = {todoVal} setTodoVal = {setTodoVal} todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
