import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoVal, setTodoVal] = useState<string>('');

  function persistTodos(newList: string[]) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function addTodo(todo: string) {
    setTodos([...todos, todo]);
    persistTodos([...todos, todo]);
  }

  function deleteTodo(index:number) {
    const newTodos = todos.filter((todo, todoIndex) => {
      console.log(todo)
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
    const localTodos = localStorage.getItem('todos');
    if(localTodos){
      const parsedTodos: string[] = JSON.parse(localTodos).todos || [];
      setTodos(parsedTodos);
    }
    

  }, [])
  return (
    <>
      <TodoInput todoVal = {todoVal} setTodoVal = {setTodoVal} addTodo={addTodo}/>
      <TodoList todoVal = {todoVal} setTodoVal = {setTodoVal} todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
