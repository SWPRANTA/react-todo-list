import TodoCard from "./TodoCard";
interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number) => void;
  todoVal: string;
  setTodoVal: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoList(props:TodoListProps) {
  const {todos} = props;

  return (
    <ul className="main">
      {todos.map((todo:string, todoIndex:number) => {
        return (
        <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
        )
      })}
    </ul>
  );
}
